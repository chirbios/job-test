import { useRoute } from 'vue-router'
import { defineComponent, onMounted, ref } from 'vue'
import { TodoService, type TodoCard, TodoWidgets } from '@/entities/todos'

export default defineComponent({
  setup() {
    const route = useRoute()
    const model = ref<TodoCard | null>(null)
    const load = async () => {
      model.value = await TodoService.getDetails(route.params.id as string)
    }
    onMounted(load)

    return () => {
      if (!model.value) return <div>loading...</div>
      return <TodoWidgets item={model.value} />
    }
  },
})
