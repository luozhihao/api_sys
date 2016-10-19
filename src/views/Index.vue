<template>
    <div class="main">
        <Left msg="111"></Left>
        <Right></Right>
    </div>
</template>

<script>
import Left from './Left.vue'
import Right from './Right.vue'

export default {
    components: {
        Left,
        Right
    }
}
</script>

<style lang='stylus'>

</style>