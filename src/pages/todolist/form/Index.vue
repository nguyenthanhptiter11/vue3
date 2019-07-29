<template>
  <div>
    <input
      type="text"
      placeholder="add todo..."
      v-model="todo"
      @keydown.enter="addToDo"
    >
    <button @click="addToDo">Add</button>
  </div>
</template>

<script>
import form from "./form";
export default {
    name: "todo-input",
    setup(props, ctx) {
        const { todo, addToDo } = form(props, ctx);
        return { todo, addToDo };
    }
};
</script>