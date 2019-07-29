<template>
  <div>
    <input
      type="text"
      placeholder="add todo..."
      v-model="todo"
      @keydown.enter="addToDo"
    >
    <button @click="addToDo">Add</button>
    <ul v-if="todoList.length">
      <li v-for="item in todoList" :key="item">
        <span>{{item}}</span> - 
        <button @click="removeToDo(item)">delete</button>
      </li>
    </ul>
    <h4 v-else class="muted">There is no todoList</h4>
    {{todoComputed}}
  </div>
</template>

<script>
import { value, watch, computed, onCreated, onBeforeMount, onMounted, onUnmounted, onBeforeUpdate, onUpdated,
    onBeforeDestroy, onDestroyed, onActivated, onDeactivated, onErrorCaptured } from 'vue-function-api';
export default {
    setup(props, ctx) {
        const todo = value(''); // khai báo tham số dữ liệu - tương đương data: {} trong vue2
        const todoList = value([]);
        const todoComputed = computed(() => todo.value + ' data.'); // tương đương computed trong vue2
        onCreated(() => {
            console.log('onCreated!')
        })
        onMounted(() => {
            console.log('mounted!')
        })
        onUpdated(() => {
            console.log('updated!')
        })
        onUnmounted(() => {
            console.log('unmounted!')
        })
        watch(
            [
                todo, () => console.log(`todo changed`, todo.value),
                todoList, () => console.log(`todoList changed`, todoList.value),
            ],
            ([], []) => {}, // callback function -- normally don't care
            {
                lazy: false,
                deep: true,
                flush: "sync"
            }
        )
        const addToDo = () => { // tương đương các hàm được khai báo trong methods: {} trong vue2
            todoList.value.push(todo.value);
            todo.value = '';
        }
        const removeToDo = (item) => {
            todoList.value = todoList.value.filter(t => {
                return t !== item
            })
        }
        return { todo, todoList, todoComputed, addToDo, removeToDo }; // bắt buộc trả về các tham số hoặc function mà html sử dụng
    }
};
</script>