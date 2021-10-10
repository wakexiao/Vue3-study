<template>
  <template v-if="isShow">
    <Timer />
  </template>
  <hr>
  <button @click="changeShow">控制Timer展示隐藏</button>
  <Counter />
  <Person />
</template>

<script>
import {ref, reactive} from 'vue'
import Counter from './components/Counter'
import Timer from './components/Timer.vue'
import Demo from './components/Demo.vue'
import Person from './components/Person.vue'

export default {
  name: 'App',
  setup(){
    const isShow = ref(true);
    const changeShow = () => {
      isShow.value = !isShow.value
    }
    return {isShow, changeShow}
  },
  components: {
    Counter,
    Timer,
    Demo,
    Person
  }
}
</script>
