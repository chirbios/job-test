import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { TodoElementModel } from '../models'

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<TodoElementModel>,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <div class='base-dto-card'>
        <h1>{ props.item.title }</h1>
        <div>{props.item.id}</div>
      </div>
    )
  },
})
