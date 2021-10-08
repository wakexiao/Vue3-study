<template>
  <div>姓名： {{userInfo.name}}</div>
  <div>年龄： {{userInfo.age}}</div>
  <div>职业： {{job.type}}</div>
  <div>我住在{{adress}}</div>
  <button @click="sayHello">点我打招呼</button>
  <br>
  <button @click="sayOtherInfo">我目前居住在</button>
  <br>
  <button @click="changeInfo">点我修改信息</button>
  <br>
  <button @click="changeJob">点我修改职业</button>
  <div>num的值为 {{num}}</div>
  <!-- <button @click="add">vue2 add</button> -->
  <br>
  <button @click="vue3Add">vue3 add</button>
  <hr>
  <Demo @modifyTestProp="tsetProp ++" :testProp="tsetProp" test1='test1' @hello="sayHello">
    <div>test</div>
    <!-- <template slot="old">
      <div>test old</div>
    </template> -->
    <!-- <template slot="slot1"> 老的写法会报错，而且在vue3 setup 的context中的 solts 也收不到，要用下面这个新写法 -->
    <template v-slot:new>
      <div>test</div>
    </template>
  </Demo>
  <Counter></Counter>
</template>

<script>
import {ref, reactive} from 'vue'
import Demo from './Demo.vue'
import Counter from './Counter.vue'

export default {
  name: 'test',
  data(){
    return {
      adress: '深圳市宝安区',
      // num: 100 // vue 2 中的属性的key如果和vue的key相同，以vue3的为准
      tsetProp: 100
    }
  },
  methods: {
    sayOtherInfo(){
      console.log(this.userInfo) // vue 中可以访问到vue3中的属性
      alert(`我居住在${this.adress}`)
    },
    // add() { // 在 vue2中修改vue3中的属性值，值会被修改，但是页面上不会响应式变化
    //   console.log(this.num)
    //   this.num++ 
    // }
  },
  setup(){
    let userInfo = ref({
      name: '张三',
      age: 18
    })
    const job = reactive({
      type: '前端工程师'
    })
    let num = ref(200)
    function sayHello() {
      console.log(this) // vue3中不能访问vue2中的属性
      console.log(`hello, my name is ${userInfo.age}`)
    }
    function vue3Add(){
      console.log(num) // RefImpl(引用实现对象)  reference 引用 implement 实现
      // num = num + 1 // 不能和 vue2 一样直接修改，通过 ref 生成的响应式对象返回的是一个引用实现对象，需要 .value 才能拿到这个值， 但是在模板上使用，不需要 .value，可以直接使用
      num.value = num.value + 1
    }
    function changeInfo(){
      console.log(userInfo.value) // Proxy 对象
      userInfo.value.name = '李四';
      userInfo.value.age = '19';
    }
    function changeJob(){
      console.log(job)
      job.type = 'java 开发工程师'
    }
    return {
      userInfo,
      sayHello,
      num,
      vue3Add,
      changeInfo,
      job,
      changeJob,
    }
  },
  components: {
    Demo,
    Counter
  }
}
</script>
