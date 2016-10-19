<template>
    <div class="sidebar">
        <div class="logo">API 接口管理系统</div>
        <div class="api-list">
            <el-row class="tac">
                <el-col :span="24">
                    <el-menu :defaultActive="active" class="el-menu-vertical-demo" theme="dark" :router="true" :uniqueOpened="true">
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-document"></i>导航一</template>
                            <el-menu-item index="/api/1">选项1</el-menu-item>
                            <el-menu-item index="/api/2">选项2</el-menu-item>
                            <el-menu-item index="/api/3">选项3</el-menu-item>
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
            active: '/api/1'
        }
    },
    mounted () {
        this.active = this.$route.path
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