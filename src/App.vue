<template>

      <MyRight></MyRight>

</template>
<script>
//1.导入
import Left from '@/components/Left.vue'

export default {
  //data数据源
  data() {
    //vue中的组件不能指向对象，应该是一个函数
    return {
      username: '李四'
    }
  },
  methods: {
    changeName() {
      this.username = '娃哈哈'
    }
  },
  //2.注册组件
  components: {
    Left
  },
  watch: {

  },
  computed: {

  }
}
</script>
<style>
.test-box {
  background-color: orange;
}
</style>