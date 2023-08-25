import { defineComponent, ref, onMounted } from 'vue'
import { TodoWidgets, TodoService, TodoSort } from '@/entities/todos'
import { AddTodoWidget } from '@/entities/addTodo'
import type { TodoCard } from '@/entities/todos/models'

export default defineComponent({
  name: 'HomeView',
  setup() {
    const todoList = ref<TodoCard[]>([])
    const load = async () => {
      todoList.value = await TodoService.loadMany()
    }
    const myAction = () => {
      console.log('click')
    }
    onMounted(load)
    return () => (
      <>
        <AddTodoWidget/>
        <TodoSort/>
        <div class='test__wrapper'>
          { todoList.value.map((item) => (
            <TodoWidgets item={item}/>
          ))}
        </div>
        <div onClick={ myAction }>вызов</div>
      </>
    )
  },
})
