<template>
  <Timer />
  <hr>
  <Counter />
</template>

<script>
import {ref, reactive} from 'vue'
import Counter from './components/Counter'
import Timer from './components/Timer.vue'

export default {
  name: 'App',
  components: {
    Counter,
    Timer,
  }
}
</script>
