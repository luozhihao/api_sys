<template>
    <div class="sidebar">
        <div class="logo">API 接口管理系统</div>
        <div class="api-list">
            <el-row class="tac">
                <el-col :span="24">
                    <el-menu class="el-menu-vertical-demo" theme="dark" :router="true" :uniqueOpened="true">
                        <el-submenu :index="key" v-for="(value, key) in apiList">
                            <template slot="title"><i class="el-icon-document"></i>{{ key }}</template>
                            <el-menu-item :index="'/api/' + item.value" v-for="item in value">{{ item.label }}</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            apiList: {}
        }
    },
    mounted () {
        this.$http({
            url: '/get_apis/',
            method: 'POST'
        })
        .then(response => {
            this.apiList = response.data
        })
    }
}
</script>

<style scoped>
.sidebar {
    width: 260px;
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #324057;
    box-shadow: 5px 0 5px #ccc;
    z-index: 102;
    overflow-x: hidden;
}

.logo {
    height: 80px;
    line-height: 80px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    border-bottom: 1px solid #324057;
}
</style>