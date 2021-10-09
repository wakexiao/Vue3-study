<template>
  <div>当前计数为： {{count}}</div>
  <button @click="add">点我加一</button>
  <div>counter 组件复用 timer hook，当前时间为：{{getTime}}</div>
  <button @click="modifyTimeToNationalDay">时间回到国庆节</button>
</template>

<script>
import {ref} from 'vue'
import useTimer from '../hooks/useTimer'
export default {
    setup(){
        const count = ref(0);
        const {getTime, modifyTimeToNationalDay} = useTimer();
        function add(){
            count.value ++
        }
        return {count, add, getTime, modifyTimeToNationalDay}
    }
}
</script>
