<template>
    <div class="right-view ">
        <div class="right-main">
            <el-card class="box-card h100 scroll">
                <div slot="header" class="clearfix">
                    <span style="line-height: 36px;">API文档</span>
                    <el-button style="float: right;" type="primary" v-on:click.native="edit">编辑</el-button>
                </div>
                <div class="text item h100">
                    <div class="content">
                        <h2 id="">计费接口索引总文档</h2>

                        <h3 id="isvip"># isVip</h3>

                        <ul>
                        <li><strong>接口描述</strong>: 查询某帐号是否为VIP</li>

                        <li><strong>正式请求入口</strong>: <a href="http://service.woniu.com/v2/isVip">http://service.woniu.com/v2/isVip</a></li>

                        <li><strong>沙盒请求入口</strong>: <a href="http://sandbox.service.woniu.com/v2/isVip">http://sandbox.service.woniu.com/v2/isVip</a></li>
                        </ul>

                        <h3 id="isvip-1"># isVip</h3>

                        <ul>
                        <li><strong>接口描述</strong>: 查询某帐号是否为VIP</li>

                        <li><strong>正式请求入口</strong>: <a href="http://service.woniu.com/v2/isVip">http://service.woniu.com/v2/isVip</a></li>

                        <li><strong>沙盒请求入口</strong>: <a href="http://sandbox.service.woniu.com/v2/isVip">http://sandbox.service.woniu.com/v2/isVip</a></li>
                        </ul>

                        <pre><code>
{
   json: '121212',
   asa: 1212
}
                        </code></pre>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
var showdown = require('showdown')

showdown.setOption('tables', true)
showdown.setOption('omitExtraWLInCodeBlocks', true)

export default {
    data () {
        return {
            content: '',
            api: ''
        }
    },
    methods: {
        edit () {
            let id = this.$route.params.id

            this.$router.push({name: 'editor', params: {id: id}})
        }
    },
    created () {
        /*let converter = new showdown.Converter(),
            _this = this
            
        this.api = converter.makeHtml(_this.content)*/
    }
}
</script>

<style scoped>
.right-view {
    width: auto;
    position: absolute;
    top: 0;
    left: 260px;
    bottom: 0;
    right: 0;
    overflow: hidden;
    overflow-y: auto;
    background-color: #f5f5f5;
}

.main-header {
    position: absolute;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: rgba(255,255,255,0.4);
    color: #A3A3A3;
    box-shadow: 0 0 2px #ccc;
    z-index: 2;
}

.right-main {
    width: auto;
    position: absolute;
    top: -10px;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 20px;
    overflow: hidden;
    overflow-y: auto;
    background-color: #f5f5f5;
}

.h100 {
    height: 100%;
}

.content {
    max-width: 800px;
    margin: 0 auto;
}

.scroll {
    overflow: auto;
}
</style>