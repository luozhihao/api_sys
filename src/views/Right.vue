<template>
    <el-card class="box-card h100 scroll">
        <div slot="header" class="clearfix">
            <span style="line-height: 36px;">API文档</span>
            <el-button style="float: right;" type="primary" v-on:click.native="edit">编辑</el-button>
        </div>
        <div class="text item h100">
            <div class="content" v-html="api">
            </div>
        </div>
    </el-card>
</template>

<script>
var showdown = require('showdown')

showdown.setOption('tables', true)
showdown.setOption('omitExtraWLInCodeBlocks', true)

export default {
    data () {
        return {
            api: ''
        }
    },
    methods: {

        // 编辑API
        edit () {
            let id = this.$route.params.id

            this.$router.push({name: 'editor', params: {id: id}})
        },

        // 加载API
        apiLoad () {
            this.$emit('loadingfn', true)

            this.$http({
                url: '/get_api_info/?id=' + this.$route.params.id,
            })
            .then(response => {
                let converter = new showdown.Converter()
                            
                setTimeout(() => {
                    this.$emit('loadingfn', false)

                    this.api = converter.makeHtml(response.data)
                }, 500)
            })
        }
    },
    watch: {
        '$route' (to, from) {
            if (to.name !== 'editor') {
                this.apiLoad()
            }
        }
    },
    mounted () {
        if (this.$route.params.id) {
            this.apiLoad()
        }
    }
}
</script>

<style scoped>
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