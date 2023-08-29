import { defineComponent, ref } from 'vue'
import { type TodoCard } from '..'

export default defineComponent({
  emits: ['greet', 'onId', 'onTitle', 'onCompleted'],
  setup(props, { emit }) {
    function sortId() {
      emit('onId', 'asd')
    }
    function sortTitle() {
      emit('onTitle', 'asd')
    }
    function sortCompleted() {
      emit('onCompleted', 'asd')
    }
    return () => (
      <div class='test__sort'> Сортировать
        <div class='test__sort_wrapper'>
          <div class='test__sort_item' onClick={ sortId }>По айди</div>
          <div class='test__sort_item' onClick={ sortTitle }>По алфавиту</div>
          <div class='test__sort_item' onClick={ sortCompleted }>По отмеченным</div>
        </div>
      </div>
    )
  },
})
