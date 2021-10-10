<template>
  <div>姓名：{{name}}</div>
  <div>年龄：{{age}}</div>
  <button @click="addAge">年龄加一</button>
  <div>使用 useTimer hook 展示时间功能，当前时间为： {{getTime}}</div>
</template>

<script>
import {reactive, toRef, toRefs} from 'vue'
import useTimer from '../hooks/useTimer'
export default {
    setup(){
        const person = reactive({
            name: 'jack',
            age: 18
        })
        function addAge(){
            // console.log(person)
            person.age ++
        }
        const {getTime} = useTimer()
        return {
            // person,
            // name: toRef(person, 'name'),
            // age: toRef(person, 'age'),
            ...toRefs(person),
            // ...person,
            addAge,
            getTime
        }
    }
}
</script>
