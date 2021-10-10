<template>
  <div>当前时间为: {{getTime}}</div>
</template>

<script>
import {ref, computed, onMounted, onBeforeUnmount} from 'vue'
import moment from 'moment'
import useTimer from '../hooks/useTimer'
export default {
  setup() {
    // const time = ref(Date.now());
    // const getTime = computed(()=> moment(time.value).format('YYYY-MM-DD hh:mm:ss'));
    // let timer = null;
    // onMounted(()=> {
    //   timer = setInterval(()=> {
    //     time.value += 1000
    //   }, 1000)
    // })
    // onBeforeUnmount(()=> {
    //   setInterval(timer)
    // })
    // return {time, getTime}
    onMounted(()=> { // setup 里的写的生命周期要比组件对象的生命周期限制性，查分出去的hooks定义的生命周期，按代码顺序执行
      console.log('onTimer  -------  onMounted')
    })
    const {getTime} = useTimer(Date.now());
    return {getTime}
  },
  mounted() {
    console.log('timer  -------  mounted')
  }
}
</script>
