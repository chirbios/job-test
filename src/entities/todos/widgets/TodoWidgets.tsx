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
      <RouterLink to='/:id'>
        <div class='base-dto-card'>
          { props.item.title }
        </div>
      </RouterLink>
    )
  },
})
