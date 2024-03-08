<template>
  <div class="wrapper">
    <div v-loading="loading" :style="{'--width': mapWidth+'px', '--height': mapHeight+'px'}" class="map_wrapper">
      <canvas :class="{'cursorPointer': pointer}" class="map" ref="myCanvas" :width="mapWidth" :height="mapHeight" @click="selected" @mousemove="moved"></canvas>
    </div>
    <el-slider
      class="slider"
      v-if="ways && ways.length > 1"
      v-model="currentWayIndex"
      :max="ways.length - 1"
      :min="0"
      @input="drawRoute"
    >
    </el-slider>

    <el-button v-if="ways && ways.length > 1" @click="animationCurrentRoute">动画</el-button>
  </div>
</template>

<script>

const column = 9
const row = 9
const gap = 30


class PriorityQueue {
    constructor() {
        this.collection = [];
    }

    enqueue(element, priority) {
        if (this.isEmpty()) {
            this.collection.push([element, priority]);
        } else {
            let added = false;
            for (let i = 0; i < this.collection.length; i++) {
                if (priority < this.collection[i][1]) {
                    this.collection.splice(i, 0, [element, priority]);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.collection.push([element, priority]);
            }
        }
    }

    dequeue() {
        const value = this.collection.shift();
        return value[0];
    }

    isEmpty() {
        return this.collection.length === 0;
    }
}

export default {
  data() {
    return {
      column: column,
      row: row,
      gap: gap,
      points: Array.from({ length: (column + 1) * (row + 1)}, (_, i) => ({
        x: (i % (row + 1)) * gap,
        y: Math.floor(i / (column + 1)) * gap,
      })),
      startPoint: null,
      endPoint: null,
      offset: 5,
      pointer: false,
      graph: null,
      ways: null,
      currentWayIndex: 0,
      loading: false
    };
  },
  methods: {
    moved(event) {
      const canvas = this.$refs.myCanvas;
      const ctx = canvas.getContext("2d");
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const point = this.points.find((p) => {
        return Math.abs(p.x - x) + Math.abs(p.y - y) < this.offset * 4;
      });
      
      this.pointer = !!point

    },
    selected(event) {
      const canvas = this.$refs.myCanvas;
      const ctx = canvas.getContext("2d");
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const point = this.points.find((p) => {
        return Math.abs(p.x - x) + Math.abs(p.y - y) < this.offset * 4;
      });

      if (point) {
        if (!this.startPoint) {
          this.startPoint = point;
          this.reDrawPoint()
        } else if (!this.endPoint) {
          this.endPoint = point;
          this.reDrawPoint()
          this.loading = true;
          setTimeout(() => {
            this.ways = this.findAllShortestPaths(this.graph, `${this.startPoint.x},${this.startPoint.y}`, `${this.endPoint.x},${this.endPoint.y}`);
            this.currentWayIndex = 0
            this.drawRoute();
            this.loading = false;
          }, 17);
        } else {
          this.clearCanvas();
          this.initPoints();
          this.ways = null;
          this.currentWayIndex = 0

          this.startPoint = point;
          this.endPoint = null;
          this.drawPoint(this.startPoint, "red")
        }
      }
    },
    animationOnePath(startPointStr, endPointStr) {
      return new Promise((resolve, reject) => {
          
        // 把一条路线用动画渐显的方式绘制出来，没帧绘制3个像素，直到完成
        const pointA = { 
          x: parseInt(startPointStr.split(',')[0]),
          y: parseInt(startPointStr.split(',')[1])
        }
        const pointB = {
          x: parseInt(endPointStr.split(',')[0]),
          y: parseInt(endPointStr.split(',')[1])
        }
        // 从A点到B点按帧绘制直线动画，每次绘制3像素，每次间隔17ms
        const distance = Math.sqrt((pointB.x - pointA.x) ** 2 + (pointB.y - pointA.y) ** 2);
        const frames = Math.ceil(distance / 3);
        const dx = (pointB.x - pointA.x) / frames;
        const dy = (pointB.y - pointA.y) / frames;
        let x = pointA.x;
        let y = pointA.y;
        const canvas = this.$refs.myCanvas;
        const ctx = canvas.getContext("2d");
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(x + this.offset, y + this.offset);
        // 每17ms绘制一帧
        const interval = setInterval(() => {
          x += dx;
          y += dy;
          ctx.lineTo(x + this.offset, y + this.offset);
          ctx.stroke();
          if (Math.abs(x - pointB.x) < 3 && Math.abs(y - pointB.y) < 3) {
            resolve();
            clearInterval(interval);
          }
        }, 17);
      
      });

    },
    async animationCurrentRoute() {
      // 把当前路线用动画渐显的方式绘制出来，使用settimeout
      if (this.currentWayIndex >= this.ways.length) {
        return;
      }
      const points4Path = this.ways[this.currentWayIndex];
      if (!points4Path && points4Path.length > 1) {
        return;
      }
      this.clearCanvas();
      this.initPoints();
      this.reDrawPoint();
      for (let i = 0; i < points4Path.length - 1; i++) {
        const currentPoint = points4Path[i];
        const nextPoint = points4Path[i + 1];
        await this.animationOnePath(currentPoint, nextPoint)
      }

      
    },
    drawRoute() {
      if (!this.ways) {
        return;
      }
      this.refresh()
      const path = this.ways[this.currentWayIndex];
      if (!path) {
        return;
      }
      const canvas = this.$refs.myCanvas;
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(this.startPoint.x + this.offset, this.startPoint.y + this.offset);
      path.forEach(str => {
        const arr = str.split(',')
        const point = { x: parseInt(arr[0]), y: parseInt(arr[1]) };
        ctx.lineTo(point.x + this.offset, point.y + this.offset);
      });
      ctx.strokeStyle = 'red';
      ctx.stroke();
    },
    nextRoute() {
      this.currentWayIndex = (this.currentWayIndex + 1) % this.ways.length;
      this.drawRoute()
    },
    previousRoute() {
      this.currentWayIndex = (this.currentWayIndex - 1 + this.ways.length) % this.ways.length;
      this.drawRoute()
    },
    drawPoint(point, color) {
      const canvas = this.$refs.myCanvas;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(point.x + this.offset, point.y + this.offset, 5, 0, 2 * Math.PI);
      ctx.fill();
    },
    clearCanvas() {
      const canvas = this.$refs.myCanvas;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    },
    initPoints() {
      const canvas = this.$refs.myCanvas;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "black";
      this.points.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x + this.offset, point.y + this.offset, 1, 0, 2 * Math.PI);
        ctx.fill();
      });
    },
    reDrawPoint() {
      if (this.startPoint) {
        this.drawPoint(this.startPoint, "red")
      }
      if (this.endPoint) {
        this.drawPoint(this.endPoint, "blue")
      }
    },
    refresh() {
      this.clearCanvas();
      this.initPoints();
      this.reDrawPoint();
    },
    buildGraph(coordinates) {
      const graph = {};

      // 用于计算两点之间的距离
      function calculateDistance(pointA, pointB) {
          return Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2));
      }

      coordinates.forEach((point, _, array) => {
          const pointKey = `${point.x},${point.y}`;

          if (!graph[pointKey]) {
              graph[pointKey] = {};
          }

          // 对每个点，查找其邻接点并添加边
          array.forEach(otherPoint => {
              if (otherPoint !== point) {
                  const otherPointKey = `${otherPoint.x},${otherPoint.y}`;
                  // 只有当两点在同一直线上（水平或垂直）时才考虑它们相邻
                  if (point.x === otherPoint.x || point.y === otherPoint.y) {
                    // 如果水平在同一直线上，但中间还有其他点，就不行
                    if (point.x === otherPoint.x && array.some(p => p.y > Math.min(point.y, otherPoint.y) && p.y < Math.max(otherPoint.y, point.y) && p.x === point.x)) {
                      return;
                    }
                    // 如果垂直在同一直线上，但中间还有其他点，就不行
                    if (point.y === otherPoint.y && array.some(p => p.x > Math.min(point.x, otherPoint.x) && p.x < Math.max(otherPoint.x, point.x) && p.y === point.y)) {
                      return;
                    }
                    const distance = calculateDistance(point, otherPoint);
                    graph[pointKey][otherPointKey] = distance;
                  }
              }
          });
      });

      return graph;
    },
    dijkstra(graph, startKey, endKey) {
      // 存储到每个点的最短距离
      const distances = {};
      // 存储路径的前驱节点
      const predecessors = {};
      // 存储所有节点作为优先队列
      const nodes = new PriorityQueue();

      // 初始化距离和前驱节点
      Object.keys(graph).forEach(key => {
          if (key === startKey) {
              distances[key] = 0;
              nodes.enqueue(key, 0);
          } else {
              distances[key] = Infinity;
              nodes.enqueue(key, Infinity);
          }
          predecessors[key] = null;
      });

      while (!nodes.isEmpty()) {
          const smallest = nodes.dequeue();
          if (smallest === endKey) {
              // 构建最终路径
              const path = [];
              let currentKey = endKey;
              while (currentKey) {
                  path.unshift(currentKey);
                  currentKey = predecessors[currentKey];
              }
              return path;
          }

          if (!smallest || distances[smallest] === Infinity) {
              continue;
          }

          Object.keys(graph[smallest]).forEach(neighbor => {
              const alt = distances[smallest] + graph[smallest][neighbor];
              if (alt < distances[neighbor]) {
                  distances[neighbor] = alt;
                  predecessors[neighbor] = smallest;
                  nodes.enqueue(neighbor, alt);
              }
          });
      }

      return [];
    },
    getDistances(routes) {
      let sum = 0
      for (let i = 1; i < routes.length; i++) {
        const [x1, y1] = routes[i].split(',');
        const [x2, y2] = routes[i - 1].split(',');
        sum += Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
      }

      return sum;
    },
    findAllShortestPaths(graph, startKey, endKey) {
      // 首先使用 dijkstra 算法找到最短路径长度
      const paths = [];
      const routes = this.dijkstra(graph, startKey, endKey);

      const shortestDistance = this.getDistances(routes);

      // DFS 搜索所有路径
      function dfs(currentKey, endKey, path, distance) {
          if (distance > shortestDistance) return; // 如果当前路径长度已经超过最短路径长度，则停止该路径的搜索
          if (currentKey === endKey && distance === shortestDistance) {
              paths.push([...path, currentKey]);
              return;
          }

          Object.keys(graph[currentKey]).forEach(nextKey => {
              if (!path.includes(nextKey)) { // 避免循环
                  dfs(nextKey, endKey, [...path, currentKey], distance + graph[currentKey][nextKey]);
              }
          });
      }

      dfs(startKey, endKey, [], 0);

      return paths;
    }

  },
  mounted() {
    this.initPoints();
    this.graph = this.buildGraph(this.points)
    console.log(this.graph);
  },
  computed: {
    mapWidth() {
      return (this.column - 1) * this.gap + this.offset * 2;
    },
    mapHeight() {
      return (this.row - 1) * this.gap + this.offset * 2;
    }
  }
};
</script>
<style scoped>
.cursorPointer {
  cursor: pointer;
}
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2em;
}
.slider {
  width: 244px;
}
.map_wrapper {
  height: var(--height);
  width: var(--width);
  display: flex;
}
.map {
  height: var(--height);
  width: var(--width);
}
</style>