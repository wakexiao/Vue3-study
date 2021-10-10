<template>
  <div>当前计数为： {{ count }}</div>
  <button @click="add">点我加一</button>
</template>

<script>
import { ref, h } from "vue";
export default {
  setup(props, context) {
    const count = ref(0);
    function add() {
      count.value++;
    }
    // return 一个 render 函数
    // return () =>
    //   h("div", {}, [
    //     h("div", {}, "当前计数为：" + count.value),
    //     h("button", { onclick: add }, "点我加一"),
    //   ]);

    // return 一个 jsx 函数
    // return () => (
    //   <div>
    //     <div>当前计数为： {count.value}</div>
    //     <button onclick={add}>点我加一</button>
    //   </div>
    // );

    // 正常使用 template 模板
    return { count, add };
  },
};
</script>
