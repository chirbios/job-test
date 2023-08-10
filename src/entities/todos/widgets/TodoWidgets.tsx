import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { RouterLink } from 'vue-router'
import type { TodoCard } from '../models'

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<TodoCard>,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <RouterLink to={{ name: 'detail-page', params: { id: props.item.id } }}>
      <div class='test__item'>
        <div class="test__title">{ props.item.title }</div>
        <input type="checkbox" readonly checked={ props.item.completed }/>
      </div>
      </RouterLink>
    )
  },
})
