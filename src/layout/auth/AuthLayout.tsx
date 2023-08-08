import { defineComponent } from 'vue'

export default defineComponent({
  setup(_, { slots }) {
    return () => (
      <div class='auth-layout'>
        {slots.default && slots.default()}
      </div>
    )
  },
})
