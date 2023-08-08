import { defineComponent, ref, onMounted } from 'vue'
import { TodoElementWidget, TodoElementService } from '@/entities/todoElement'
import type { TodoElementModel } from '@/entities/todoElement/models'

export default defineComponent({
  name: 'HomeView',
  setup() {
    const todoList = ref<TodoElementModel[]>([])

    const load = async () => {
      todoList.value = await TodoElementService.loadMany()
    }
    onMounted(load)

    return () => (
      <div>
        { todoList.value.map((item) => (
          <TodoWidgets item={item}/>
        ))}
      </div>
    )
  },
})
