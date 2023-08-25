import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => (
      <div class='test__sort'> Сортировать
        <div class='test__sort_wrapper'>
          <div class='test__sort_item'>По алфавиту</div>
          <div class='test__sort_item'>По айди</div>
          <div class='test__sort_item'>По отмеченным</div>
        </div>
      </div>
    )
  },
})
