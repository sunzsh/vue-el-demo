<template>
    <div>
        234
        <avue-crud ref="crud" :data="data" :option="option" v-model="form"></avue-crud>
        
    </div>
</template>
<script>

export default {
 name: "TestCrud",
 data() {
      return {
        form:{},
        data: [
          {
            name:'张三',
            sex:'男'
          }, {
            name:'李四',
            sex:'女'
          }, {
            name:'王五',
            sex:'女'
          }, {
            name:'赵六',
            sex:'男'
          }
        ],
        option:{
          align:'center',
          menuAlign:'center',
          column:[
             {
              label:'姓名',
              prop:'name'
            },
            {
              label:'性别',
              prop:'sex'
            }
          ]
        }
      }
    },
    // methods:{
    //   beforeOpen(done){
    //     done()
    //     //  setTimeout(()=>{
    //     //   this.$message.success('查看控制台');
    //     //   console.log('text的ref对象')
    //     //   console.log(this.$refs.crud.getPropRef('name'))
    //     // },0)
    //   }
    // }
    // ,
    // watch: {
    //     'form.name': function (val) {
    //         console.log(val);
    //     }
    // }
  }

</script>
