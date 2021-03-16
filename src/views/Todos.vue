<template>
    <div class="page-todo">
        <section class="todo-header">
            <div class="wrapper">
                <div class="header-container">
                    <router-link class="link black" to="/">На Главную</router-link>
                    <h2>Список дел на сегодня</h2>
                </div>
            </div>
        </section>
        <hr>
        <section class="todo-option">
            <div class="wrapper">
                <div class="option-container corset">
                    <addTodo
                            @add-todo="addTodo"
                    />
                    <div class="todo-filter-container">
                        <select class="todo-filter" v-model="filter">
                            <option value="all">Все</option>
                            <option value="completed">Завершенные</option>
                            <option value="not-completed">Не завершенные</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
        <section class="todo-list">
            <div class="wrapper">
                    <loader v-if="loading"/>
                    <Todolist
                            v-else-if="filteredTodos.length"
                            v-bind:todos="filteredTodos"
                            @remove-todo="removeTodo"
                    />
                    <p v-else class="no-todo"> Дел нет =( <br> Пожалуйста, добавьте новые</p>
            </div>
        </section>
    </div>
</template>

<script>
    import Todolist from '@/components/TodoList'
    import addTodo from '@/components/addTodo'
    import loader from '@/components/loader'

    export default {
        name: 'App',
        data() {
            return {
                todos: [],
                loading: true,
                filter: 'all'
            }
        },
        mounted() {
            fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
                .then(response => response.json())
                .then(json => {
                    this.todos = json;
                    this.loading = false
                })
        },
        components: {
            Todolist, addTodo, loader
        },
        // watch: {
        //     filter(value) {
        //
        //     }
        // },
        computed: {
            filteredTodos() {
                let filter;
                if (this.filter === 'all') {
                    return this.todos
                }
                if (this.filter === 'completed') {
                    return this.todos.filter(t => t.completed)
                }
                if (this.filter === 'not-completed') {
                    return this.todos.filter(t => !t.completed)
                }
                return filter;
            }
        },
        methods: {
            removeTodo(id) {
                this.todos = this.todos.filter(t => t.id !== id)
            },
            addTodo(todo) {
                this.todos.push(todo)
            }
        }
    }
</script>