<template>
  <div>姓名：{{name}}</div>
  <div>年龄：{{age}}</div>
  <button @click="addAge">年龄加一</button>
</template>

<script>
import {reactive, toRef, toRefs} from 'vue'
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
        return {
            // person,
            // name: toRef(person, 'name'),
            // age: toRef(person, 'age'),
            ...toRefs(person),
            // ...person,
            addAge
        }
    }
}
</script>
