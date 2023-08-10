import { defineComponent, ref, onMounted } from 'vue'
import { TodoWidgets, TodoService } from '@/entities/todos'
import type { TodoCard } from '@/entities/todos/models'

export default defineComponent({
  name: 'HomeView',
  setup() {
    const todoList = ref<TodoCard[]>([])

    const load = async () => {
      todoList.value = await TodoService.loadMany()
    }
    onMounted(load)

    return () => (
      <div class='test__wrapper'>
        { todoList.value.map((item) => (
          <TodoWidgets item={item}/>
        ))}
      </div>
    )
  },
})
