import { defineComponent } from 'vue'
import { DefaultLayout } from './layout'

export default defineComponent({
  setup() {
    return () => (
      <DefaultLayout>
        <router-view/>
      </DefaultLayout>
    )
  },
})
