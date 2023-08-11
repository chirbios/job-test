import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'BtnBack',
  setup() {
    return () => (
      <RouterLink to='/'>
      <div class='test__btn-back'>Назад</div>
      </RouterLink>
    )
  },
})
