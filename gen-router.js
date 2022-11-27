
var fs = require('fs');
const readline = require('readline');
const os = require('os');

const vueDir = './src/views/';

fs.readdir(vueDir, function (err, files) {
    if (err) {
        console.log(err);
        return;
    }
    let routers = ``;
    for (const filename of files) {
      if (filename.indexOf('.') < 0) {
        continue;
      }
      var [name, ext] = filename.split('.');
      if (ext != 'vue') {
        continue;
      }
      let routerName = null

      const contentFull = fs.readFileSync( `${vueDir}${filename}`, 'utf-8' );
      var match = /\<\!\-\-\s*(.*)\s*\-\-\>/g.exec(contentFull.split(os.EOL)[0]);
      if (match) {
        routerName = match[1];
      }
      

      routers += `  {path: '/${name === 'root' ? '' : name}', component: ()=> import(/* webpackChunkName: "${name}" */ "@/views/${filename}") ${ routerName ? ',name: "' + routerName + '"' : ''} },\n`;
    }
    const result = 
`// 该文件由gen-router.js自动生成，请勿手动修改
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
var routes = [
${routers}
];

const router = new VueRouter({
  mode: 'hash',
  routes
})
export default router

`
  // console.log(result);
  fs.writeFile('./src/router.js',result, 'utf-8', 
    (err) => {  
      if (err) throw err; 
      // 如果没有错误
      console.log("./src/router.js 生成成功！") 
    });
});