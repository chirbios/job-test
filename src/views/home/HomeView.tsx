import { defineComponent, ref, onMounted } from 'vue'
import { TodoWidgets, TodoService, TodoSort } from '@/entities/todos'
import { AddTodoWidget } from '@/entities/addTodo'
import type { TodoCard } from '@/entities/todos/models'

export default defineComponent({
  name: 'HomeView',
  setup() {
    const todoList = ref<TodoCard[]>([])
    const currentPage = ref(1)
    const load = async () => {
      todoList.value = await TodoService.loadMany()
    }
    const next = async () => {
      todoList.value = await TodoService.nextPages(++currentPage.value)
    }
    const prev = async () => {
      if (currentPage.value > 1) {
        todoList.value = await TodoService.nextPages(--currentPage.value)
      }
    }
    const sortCompleted = async () => {
      todoList.value = await TodoService.sortCompletedTrue()
      console.log(todoList.value)
    }
    const sortTitle = async () => {
      todoList.value = await TodoService.sortTitle()
      console.log(todoList.value)
    }
    const sortId = async () => {
      todoList.value = await TodoService.loadMany()
      console.log(todoList.value)
    }

    function greeting(name:string) {
      console.log(`Greetings ${name}`)
    }
    onMounted(load)
    return () => (
      <>
        <AddTodoWidget/>
        <TodoSort
          onGreet={ greeting }
          onOnId={ sortId }
          onOnTitle={ sortTitle }
          onOnCompleted={ sortCompleted }
        />
        <div class='test__wrapper'>
          { todoList.value.map((item) => (
            <TodoWidgets item={item}/>
          ))}
        </div>
        <div class="test__pagination">
          {(currentPage.value > 1)
            ? <button class='test__arrow' onClick={ prev }>&lt;</button>
            : <button class='test__arrow_no-active'>&lt;</button>
          }
          <div class="test__current">{ currentPage.value } страница</div>
          <button class='test__arrow' onClick={ next }>&gt;</button>
        </div>
      </>
    )
  },
})
