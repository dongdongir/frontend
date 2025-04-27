<template>
  <ConfigProvider
    :componentSize="settingsStore.settings.componentSize"
    :direction="settingsStore.settings.direction"
    :locale="settingsStore.locale"
    :theme="settingsStore.theme"
    :ref="settingsStore.fullscreen.appRef"
  >
    <RouterView />
  </ConfigProvider>
</template>

<script lang="ts" setup>
import { ConfigProvider } from 'ant-design-vue/es'
import { RouterView } from 'vue-router'
import { useSettingsStore } from '@/stores/settings.store'
import { computed, onMounted, watch } from 'vue'
import { useCssVariables } from '@/composable/cssVariables.composable'
const { updateColors } = useCssVariables()

const settingsStore = useSettingsStore()

onMounted(() => updateColors(settingsStore.settings.colorPrimary))
watch(
  () => settingsStore.settings.colorPrimary,
  (newColor) => {
    updateColors(newColor)
  },
)

onMounted(settingsStore.setLanguageConfig)
watch(() => settingsStore.settings.language, settingsStore.setLanguageConfig, {
  immediate: true,
})

const appElement = computed<HTMLElement>(
  () => document.getElementById('app') ?? ({} as HTMLElement),
)

const setDarkMode = () => {
  if (settingsStore.settings.isDark) {
    appElement.value.classList.add('dark')
    appElement.value.classList.add('bg-dark')
  } else {
    appElement.value.classList.remove('dark')
    appElement.value.classList.remove('bg-dark')
  }
}
onMounted(setDarkMode)
watch(() => settingsStore.settings.isDark, setDarkMode)
</script>
