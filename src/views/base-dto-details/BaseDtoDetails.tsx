import { useRoute } from 'vue-router'
import { defineComponent, onMounted, ref } from 'vue'
import { BaseDtoService, type BaseDto, BaseDtoCard } from '@/entities/base'

export default defineComponent({
  name: 'DetailPage',
  setup() {
    const route = useRoute()
    const model = ref<BaseDto | null>(null)
    const load = async () => {
      model.value = await BaseDtoService.loadDetail(route.params.id as string)
    }

    onMounted(load)

    return () => {
      if (!model.value) return <div>loading...</div>
      return <BaseDtoCard item={model.value} />
    }
  },
})
