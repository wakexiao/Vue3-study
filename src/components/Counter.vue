<template>
  <div>当前计数为： {{count}}</div>
  <button @click="add">点我加一</button>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
        const count = ref(0);
        function add(){
            count.value ++
        }
        return {count, add}
    }
}
</script>
