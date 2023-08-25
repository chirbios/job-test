import { defineComponent, ref, computed } from 'vue'
import { TodoService } from '@/entities/todos'
import type { TodoCreate } from '@/entities/todos'

export default defineComponent({
  name: 'AddTodoForm',
  setup(props, { emit }) {
    const model = ref<TodoCreate>({
      title: '',
      completed: false,
    })
    const title = computed(() => model.value.title)
    const clickBtn = () => {
      emit('myEvent')
    }
    const submit = async (e: Event) => {
      e.preventDefault()
      const data = TodoService.create(model.value)
      const newTodo = model.value
      console.log(newTodo)
      model.value.title = ''
    }
    return () => (
      <div class='test__add-todo'>
        <div class='test__title'>Добавить ТуДу</div>
        <form onSubmit={ submit }>
          { title.value }
          <input v-model={ model.value.title }/>
          <input
            type='checkbox'
            checked={ model.value.completed }
            onChange={() => { model.value.completed = !model.value.completed }}
          />
        </form>
        <div onClick={ clickBtn }>вызов</div>
      </div>
    )
  },
})
