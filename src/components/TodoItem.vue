<template>
    <li>
        <div v-bind:class="{done: todo.completed}" class="list-item">
            <span class="todo-num">{{index + 1}}.</span>
            <label class="checkbox" for="inputCheckbox">
                <input type="checkbox" id="inputCheckbox"
                       v-on:change="todo.completed = !todo.completed" v-model="todo.checked">
            </label>
            <span class="todo-title">{{ todo.title | uppercase }}</span>
        </div>
        <button class="btn remove"
        v-on:click="$emit('remove-todo', todo.id)">&times;</button>
    </li>
</template>

<script>
    export default  {
        props: {
            todo: {
                type: Object,
                required: true
            },
            index: Number
        },
        filters: {
            uppercase(value) {
                return value.toUpperCase();
            }
        }
    }
</script>