<template>
    <div>姓名：{{data.name}}</div>
    <div>年龄：{{data.age}}</div>
    <button @click="emitHello">触发父组件的sayHello方法</button>
    <div>testProp 的值是：{{ testProp }}</div>
    <button @click="changeProp">修改testProp值</button>
    <ul>
        <li v-for="item in list" :key="item.id">{{item.name}}</li>
    </ul>
    <button @click="add">添加列表</button>
</template>

<script>
    import {reactive, getCurrentInstance, h } from 'vue'
    export default {
        beforeCreate(){
            console.log('beforeCreate')
        },
        props: ['testProp', 'test1'], // props 没有接收到的数据会放在setup中的context中attrs里
        emits: ['hello', 'modifyTestProp'], // 父组件绑定的自定义事件也需要和props一样接收，不接收也可以触发， 但是会有一个警告
        /**
         * setup函数比beforeCreate先执行且只执行一次， setup中无法通过 this拿到组件实例对象
         * @props {Proxy} 使用这个组件传的props对象，需要生命props接受才有值
         * @context {Object} 之前 vue2 中的 $attrs、$emit、$slots 都放在这个context中
         */
        setup(props, context){
            // console.log('setup')
            // console.log('this', this)
            // const internalInstance = getCurrentInstance()
            // console.log(internalInstance)
            console.log(props, context)
            // console.log('attrs---------', context.attrs)
            // console.log('emit---------', context.emit)
            // console.log('slots---------', context.slots)
            const {emit} = context;
            const data = reactive({
                name: 'Demo',
                age: 12,
                id: 4
            })
            const list = reactive([{id:1, name: '吃饭'},{id:2, name: '睡觉'},{id:3, name: '打豆豆'}]);
            function emitHello(){
                emit('hello')
            }
            function changeProp(){
                emit('modifyTestProp')
            }
            function add() {
                console.log(list)
                list.push({id: data.id ++, name: 'demo'})
            }
            // return () => h('div', {id: 'render', propsTest: 66}, ['div 的内容', h('p', 'p 标签')]) // render 函数的优先级高于根据 template，只渲染render函数，不渲染template
            return {
                data,
                list,
                emitHello,
                changeProp,
                add,
            }
        }
    }
</script>

<style>

</style>