<template>
  <div>
    <ul v-if="data.length">
      <li v-for="item in data" :key="item">
        <span>{{item}}</span> - 
        <button @click="removeToDo(item)">delete</button>
      </li>
    </ul>
    <h4 v-else class="muted">There is no data</h4>
  </div>
</template>

<script>
import list from "./list";
export default {
    name: "todo-list",
    props: {
        todo: {
            type: String,
            required: true
        }
    },
    setup(props, ctx) {
        const { data, inputTodo, removeToDo } = list(props, ctx);
        return { inputTodo, data, removeToDo };
    }
};
</script>