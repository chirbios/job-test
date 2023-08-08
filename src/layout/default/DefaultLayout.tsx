import { defineComponent } from 'vue'
import DefaultHeader from './header/DefaultHeader'
import DefaultFooter from './footer/DefaultFooter'

export default defineComponent({
  name: 'DefaultLayout',
  setup(_, { slots }) {
    return () => (
      <div class='default-layout'>
        <DefaultHeader />
        {slots.default && slots.default()}
        <DefaultFooter />
      </div>
    )
  },
})
