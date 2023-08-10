import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultFooter',
  setup() {
    return () => (
      <div class='test__footer'>footer</div>
    )
  },
})
