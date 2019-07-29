<template>
  <div>
        <todo-input @tagsUpdated="addDataxxxx"></todo-input>
        <todo-list :todo="newData"></todo-list>
  </div>
</template>

<script>
import { value } from 'vue-function-api';
import Form from './form/Index';
import DataList from './list/Index';
export default {
    components: {
        'todo-input': Form,
        'todo-list': DataList
    },
    setup(props, ctx) {
        const newData = value('');

        const addDataxxxx = (data) => {
            newData.value = data
        }

        return { newData, addDataxxxx };
    }
};
</script>