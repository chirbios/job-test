import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { BaseDto } from '../models'

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<BaseDto>,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <div class='base-dto-card'>
        { props.item.name }
      </div>
    )
  },
})
