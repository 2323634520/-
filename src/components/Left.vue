<template>
    <div class="test-box">
        <h3>{{ username }}</h3>
        <button @click="changeName">修改</button>
    </div>
</template>
<script>
export default{
    //data数据源
    data() {
        //vue中的组件不能指向对象，应该是一个函数
        return{
            username:'Left1'
        }
    },
    methods:{
        changeName() {
            this.username = '娃哈哈'
        }
    },
    watch:{

    },
    computed:{
        
    }
}
</script>
<style>
    .test-box{
        background-color:orange;
    }
</style>