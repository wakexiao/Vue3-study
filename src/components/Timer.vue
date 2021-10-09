<template>
  <div>当前时间为: {{getTime}}</div>
</template>

<script>
import {ref, computed, onMounted, onBeforeUnmount} from 'vue'
import moment from 'moment'
export default {
  setup() {
    const time = ref(Date.now());
    const getTime = computed(()=> moment(time.value).format('YYYY-MM-DD hh:mm:ss'));
    let timer = null;
    onMounted(()=> {
      timer = setInterval(()=> {
        time.value += 1000
      }, 1000)
    })
    onBeforeUnmount(()=> {
      setInterval(timer)
    })
    return {time, getTime}
  }
}
</script>

<style>

</style>
