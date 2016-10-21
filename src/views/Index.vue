<template>
    <div class="main">
        <Left @getEdit="setEdit"></Left>
        <div class="right-view" v-loading="loading">
            <div class="right-main">
                <keep-alive>
                    <router-view @loadingfn="setLoading" :editable="editable"></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
import Left from './Left.vue'

export default {
    data () {
        return {
            loading: false,
            editable: false
        }
    },
    methods: {
        setLoading (isLoading) {
            this.loading = isLoading
        },
        setEdit (param) {
            this.editable = param
        }
    },
    components: {
        Left
    }
}
</script>

<style>
.right-view {
    width: auto;
    position: absolute !important;
    top: 0;
    left: 260px;
    bottom: 0;
    right: 0;
    overflow: hidden;
    overflow-y: auto;
    background-color: #f5f5f5;
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

.el-loading-mask {
    background-color: rgba(0, 0, 0, 0.28) !important;
}
</style>