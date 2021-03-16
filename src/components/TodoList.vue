<template>
    <div class="list-container corset">
        <ol>
            <TodoItem
                    v-for="(todo, i) in todos" :key="i"
                    v-bind:todo="todo"
                    v-bind:index="i"
                    v-on:remove-todo="removeTodo"
            />
        </ol>
    </div>
</template>


<script>
    import TodoItem from '@/components/TodoItem'
    export default  {
        props: ['todos'],
        components: {
            TodoItem
        },
        methods: {
            removeTodo(id) {
                this.$emit('remove-todo', id)
            }
        }
    }
</script>