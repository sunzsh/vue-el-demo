<template>
    <div class="container">
        <div :class="current == index ? 'active' : ''" :key="index" v-for="(item,index) in 5">内容{{index}}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: 2,
        };
    },
    mounted() {},
    methods: {},
};
</script>

<style lang="less" scoped>
.container {
    width: 618px;
    height: 100px;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    border: 1px solid #999;
    div {
        height: 100px;
        flex-grow: 1;
	      // box-shadow: 0 0 0 3px red;
        // width: 90%;
        // display: flex;
        // align-items: center;
        // justify-content: center;
        background: #88a86e;
        
    }
    .active {
        // display: flex;
        // align-items: center;
        // justify-content: center;
        // background: #88a86e;
        // height: 100px;
        // width: 100%;
        // border: 0;
    }
}
</style>