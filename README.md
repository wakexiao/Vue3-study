## Vue3 新特性

1. 性能的提升
    - 打包大小减小41%
    - 初次渲染快55%，更新渲染快133%
    - 内存减少54%
2. 源码的升级
    - 底层使用 Proxy 替代 defineProperty 实现响应式
    - 重写虚拟 DOM 的实现和 tree-shaking
3. 拥抱Typescript
    - Vue3 可以更好的支持 Typescript
4. 新的特性
    - Composition API (组合API)
        - setup 配置
        - ref 与 reactive
        - watch 与 watchEffect
        - provid 与 inject
    - 新的内置组件
        - Fragment
        - Teleport
        - Suspense
    - 其他改变
        - 新的生命周期钩子
        - data 选项应始终声明为一个函数
        - 移除 keyCode 支持作为 v-on 的修饰符

Vue3 使用 createApp 工厂函数创建Vue实例对象，而 Vue2 是使用 new 关键字去创建一个 Vue 实例对象，Vue3 创建的实例对象会比 Vue2 创建出来的实例对象更 "轻"，Vue2 之前会把所有Vue构造函数身上的方法都放在创建出来的实例上，但是Vue3创建出来的实例身上属性会少很多，只有一些常用的方法

Vue3 组件中的模板结构可以没有根标签、


#### 什么时候使用composition API

1. 更好的支持 TypeScript
2. 组件太大，需要按功能组织
3. 需要与其他组件之间重用代码

在 Vue3 中提出了 composition API，之前 Vue2 使用的都是 optionsAPI，例如 data、computed、methods、watch
Vue3的升级是向下兼容的，在 Vue3 中依旧可以使用 optionsAPI，但是不建议和 Vue3 混用


composition API 感觉是借鉴了 react 的 hooks, 在setup中实现的一些功能，可以抽离出去定义一个hook，然后如果其他组件也需要用到，可以引入到setup方法中就可以了，和react hook类似的写法


常用的composition API： ref、reactive、toRef、watch、watchEffect、computed、生命周期hook

setup：
    - composition API 的"舞台"，组件中所用到的data、methods、watch等都需要配置在setup中
    - setup 函数会在 beforeCreate 、created 之前执行, vue3也是取消了这两个钩子，统一用setup代替, 该函数相当于一个生命周期函数，这个函数中的this是undefined，所以拿不到组件实例上的数据;可以通过调用- getCurrentInstance 方法来获取Vue实例上的数据，但是不要把它当做composition API中获取this的替代方案
    - setup 接收两个参数，一个是 props, 一个是 context； 需要注意这个props 接收到的是一个响应式对象，所以不能直接解构出来，需要用到官方提供的API toRefs 或 toRef 解构; context 是一个普通对象，这个对-象里有 attrs、slots、emit 等，就是之前Vue2组件实例上的 this.$attrs...,分别是自定义属性、插槽、触发器；emit触发自定义事件需要在组件中配置 emits 来接收，和接收props是一样的
    - setup 的返回值：可以返回两种形式： 如果返回的是一个对象，那就是把这个对象暴露给模板使用； 如果返回的是一个render函数，





大家好，今天我演讲的主题是Vue3 composition API 的介绍；大家应该都知道，vue3 发布到现在已经一年了；vue 从2更新到3，对于我们开发者去使用，最大的特性就是composition API；

toRef toRefs

生命周期

composition API 的优缺点
options API 的优缺点