import { value, watch, onMounted } from 'vue-function-api';

function list(props, ctx) {
    const inputTodo = value("");
    const data = value([]);
    onMounted(() => {
        if (props.todo !== '' && props.todo !== undefined) {
            data.value.push(props.todo)
            inputTodo.value = props.todo
        }
    })
    watch(
        [
            inputTodo, () => inputTodo.value = props.todo
        ],
        ([a], [prevA]) => {
            if (a !== '' && a !== undefined) {
                data.value.push(a)
            }
            inputTodo.value = ''
        }, // callback function -- normally don't care
        {
            lazy: false,
            deep: true,
            flush: "sync"
        }
    )
    const removeToDo = (item) => {
        data.value = data.value.filter(t => {
            return t !== item
        })
    }
    return { inputTodo, data, removeToDo };
}

export default list;
