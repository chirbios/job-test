import { onMounted, onBeforeUnmount, type Ref } from 'vue'

export default function useClickOutside(
  element: Ref<HTMLElement|null>|Ref<HTMLElement|null>[],
  callback: () => void,
  root?: Ref<HTMLElement|null>,
) {
  const onClick = (event: any) => {
    const targets = []

    if (Array.isArray(element)) {
      targets.push(...element)
    } else {
      targets.push(element)
    }

    const path = event.path || (event.composedPath && event.composedPath())
    let isOutside = true

    targets.forEach((target) => {
      isOutside = isOutside && (
        path
          ? path.indexOf(target.value) < 0
          : !target.value?.contains(event.target)
      )
    })

    if (isOutside) callback()
  }

  onMounted(() => {
    const clickRoot = root?.value ?? document
    clickRoot.addEventListener('click', onClick)
  })

  onBeforeUnmount(() => {
    const clickRoot = root?.value ?? document
    clickRoot.removeEventListener('click', onClick)
  })
}
