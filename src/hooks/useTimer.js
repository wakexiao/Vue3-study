import {ref, computed, onMounted, onBeforeUnmount} from 'vue'
import moment from 'moment'

export default (date = Date.now())=> {
  const time = ref(date);
  const getTime = computed(()=> moment(time.value).format('YYYY-MM-DD kk:mm:ss'));
  let timer = null;
  onMounted(()=> {
    console.log('hookTimer  -------  mounted')
    timer = setInterval(()=> {
      time.value += 1000
    }, 1000)
  })
  onBeforeUnmount(()=> {
    console.log('hookTimer  -------  onBeforeUnmount')
    clearInterval(timer)
  })
  function modifyTimeToNationalDay(){
    time.value = new Date('2021/10/01').getTime();
    clearInterval(timer)
  }
  return {time, getTime, modifyTimeToNationalDay}
}
