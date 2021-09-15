<template>
    <div>

        <el-card class="box-card">
            <el-form label-width="80px">
                <el-form-item label="　">
                    <span class="xyk">{{creditCard}}</span>
                </el-form-item>
                <el-form-item label="信用卡">
                    <el-input v-model="creditCard" placeholder="信用卡号" v-cleave="{creditCard: true}"></el-input>
                </el-form-item>
            </el-form>
        </el-card>

        <el-card class="box-card">

            <el-row>
                <el-col :span="12">
                    <el-form label-width="80px">
                        <el-form-item label="　" class="res">
                            {{riqi}}
                        </el-form-item>
                        <el-form-item label="日期">
                            <el-input v-model="riqi" placeholder="yyyy-MM-dd" v-cleave="{date: true,datePattern: ['Y', 'm', 'd'], delimiter: '-'}"></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="12">
                    <el-form label-width="80px">
                        <el-form-item label="　" class="res">
                            {{time}}
                        </el-form-item>
                        <el-form-item label="时间">
                            <el-input v-model="time" placeholder="HH:mm" v-cleave="{time: true,timePattern: ['h', 'm']}"></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
            
        </el-card>

        <el-card class="box-card">
            <el-form label-width="80px">
                <el-form-item label="　" class="res_tel">
                    {{phone}}
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="phone" placeholder="手机号" v-cleave="{  phone: true, phoneRegionCode: 'CN' }"></el-input>
                </el-form-item>
            </el-form>
        </el-card>

        <el-card class="box-card">
            <el-form label-width="80px">
                <el-form-item label="　" class="res_sn">
                    {{sn}}
                </el-form-item>
                <el-form-item label="序列号">
                    <el-input v-model="sn" placeholder="序列号" v-cleave="{  prefix: 'PREFIX', delimiter: '-', blocks: [6, 4, 4, 4], uppercase: true }"></el-input>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
  data() {
      return {
        creditCard: '',
        riqi: '',
        time: '',
        phone: '',
        sn: ''  
      }
  }
}
</script>

<style scoped>
    .box-card {
        margin-top: 30px;
    }
    .xyk {
        font-size: 24px;
        color: #ec771d;
    }
    .res ::v-deep .el-form-item__content{
        font-size: 24px;
        color: #67C23A;
    }
    .res_tel ::v-deep .el-form-item__content {
        font-size: 24px;
        color: #409EFF;
    }
    .res_sn ::v-deep .el-form-item__content {
        font-size: 24px;
        color: #F56C6C;
    }
</style>