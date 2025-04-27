<template>
  <Button
    class="flex items-center justify-center"
    :class="{ 'gap-2': props.icon, 'flex-col !h-auto': props.col }"
  >
    <template #icon v-if="props.icon">
      <Icon :icon="props.icon" />
    </template>
    <slot v-if="$slots.default" />
  </Button>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-vue/es'
import { Icon } from '@iconify/vue'
interface Props {
  icon?: string
  col?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  icon: '',
  col: false,
})
</script>
<style lang="less"></style>
