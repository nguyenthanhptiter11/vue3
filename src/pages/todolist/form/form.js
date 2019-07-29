import { value } from "vue-function-api";

function form(props, ctx) {
    const todo = value('');
    const addToDo = () => {
        ctx.emit("tagsUpdated", todo.value);
        todo.value = '';
    }
    return { todo, addToDo };
}

export default form;
