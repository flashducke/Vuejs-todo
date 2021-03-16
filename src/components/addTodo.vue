<template>
    <form class="todo-add" @submit.prevent="onSubmit">
        <input class="base-input" type="text" placeholder="уже забыл что хотел" v-model="title">
        <button class="btn add">Добавить</button>
    </form>
</template>

<script>
    export default  {
        data() {
          return {
              title: ''
          }
        },
        methods: {
            onSubmit() {
                if(this.title.trim()) {
                    const newTodo = {
                        id: Date.now(),
                        title: this.title,
                        completed: false
                    }
                    this.$emit('add-todo', newTodo);
                    this.title = ''
                }
            }
        }
    }
</script>