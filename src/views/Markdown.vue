<template>
    <div class="mark">
        <div class="nav">
            <el-button icon="arrow-left" v-on:click.native="back">返回</el-button>
            &nbsp;&nbsp;
            <el-button type="primary" icon="check" v-on:click.native="save">保存</el-button>
        </div>
        <div id="editor-wrapper" class="container">
            <textarea v-model="content" @keyup="compile"></textarea>
            <div id="preview" v-html="html">
                
            </div>
        </div>
    </div>
</template>

<script>
const showdown = require('showdown')
const str = require('../../template.json').content

showdown.setOption('tables', true)
showdown.setOption('omitExtraWLInCodeBlocks', true)

export default {
    data () {
        return {
            content: '',
            html: ''
        }
    },
    methods: {

        // markdown转化
        compile () {
            let text = this.content,
                converter = new showdown.Converter(),
                html = converter.makeHtml(text);

            this.html = html
        },

        // 返回
        back () {
            let id = this.$route.params.id

            this.$router.push({name: 'api', params: {id: id}})
        },

        // 保存
        save () {
            this.$http({
                url: '/save_api_info/',
                method: 'POST',
                body: {
                    id: this.$route.params.id,
                    content: this.content
                }
            })
            .then(response => {
                let result = response.data.result

                if (result) {
                    this.$notify.success({
                        title: '成功',
                        message: '保存成功'
                    })
                } else {
                    this.$notify.error({
                        title: '错误',
                        message: '保存失败了'
                    })
                }
            })
        },

        // 加载API
        apiLoad () {
            this.$http({
                url: '/get_api_info/?id=' + this.$route.params.id,
            })
            .then(response => {
                let content = response.data.content                     
                
                if (this.content) {
                    this.content = content
                } else {
                    this.content = str
                }

                this.compile()
            })
        }
    },
    watch: {
        '$route' (to, from) {
            console.log(111)

            if (from.name === 'api' && to.name === 'editor') {
                this.apiLoad()
            }
        }
    },
    mounted () {
        this.apiLoad()
    }
}
</script>

<style scoped>
textarea {
    max-width: 100%;
}

.mark {
    height: 100%;
    background: #f3f3f3;
}

.nav {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 45px;
    min-height: 45px;
    line-height: 45px;
    background: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.24);
    text-align: center
}

.container {
    display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: box;
    display: -moz-flex;
    display: -ms-flexbox;
    -webkit-box-lines: multiple;
    -moz-box-lines: multiple;
    box-lines: multiple;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    height: 100%;
    padding-top: 65px;
}

.container textarea {
    resize: none;
    font-family: Consolas,"Liberation Mono",Courier,monospace;
    height: 97%;
    max-height: 97%;
    width: 49%;
    padding: 30px 20px;
    background: #f8f9fa;
}

.container>* {
    display: block;
    width: 50%;
    margin-left: 10px;
    margin-right: 10px;
    max-height: 100%;
}

#preview {
    height: 97%;
    max-height: 97%;
    border: 1px solid #ccc;
    overflow-y: scroll;
    width: 49%;
    padding: 30px 20px;
}
</style>