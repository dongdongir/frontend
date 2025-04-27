<template>
  <LayoutHeader
    class="!leading-12 !p-inline-4 flex items-center !from-primary !to-primary-200"
    :class="headerClass"
  >
    <div class="flex items-center ms-auto">
      <Dropdown :trigger="['click']" class="!ms-auto">
        <AzButton
          icon="tabler:user"
          type="text"
          class="text-white !flex !items-center gap-x-2"
          @click.prevent
        >
          {{ authStore.currentUser.username ?? 'ناشناس' }}
        </AzButton>
        <template #overlay>
          <Menu>
            <MenuItem key="0" class="!text-red" @click="logout">
              {{ t('exit') }}
              <template #icon>
                <Icon icon="uil:signout" />
              </template>
            </MenuItem>
          </Menu>
        </template>
      </Dropdown>
      <Divider type="vertical" class="bg-white" />
      <Tooltip
        :title="settingsStore.fullscreen.isFullscreen ? t('exitFullScreen') : t('fullScreen')"
        size="small"
      >
        <AzButton
          :icon="settingsStore.fullscreen.isFullscreen ? 'subway:close-2' : 'subway:fullscreen'"
          type="text"
          class="text-white"
          @click="settingsStore.fullscreen.toggle"
        />
      </Tooltip>

      <Divider type="vertical" class="bg-white" />
      <Tooltip :title="t('panelSetting')" size="small">
        <AzButton
          icon="tabler:settings"
          type="text"
          class="text-white"
          @click="settingsModal.open"
        />
        <AzDrawer v-model:open="settingsModal.isOpen.value" @save="settingsModal.close" />
      </Tooltip>
    </div>
  </LayoutHeader>
</template>
<script lang="ts" setup>
import { Dropdown, LayoutHeader, Menu, MenuItem, Divider, Tooltip } from 'ant-design-vue/es'
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'
import { useSettingsStore } from '@/stores/settings.store'
import { AzButton, AzDrawer } from '@/components'
import { useI18n } from 'vue-i18n'
import { DirectionEnum } from '@/enums'
import { computed } from 'vue'
import { useModal } from '@/composable'

const settingsModal = useModal()
const settingsStore = useSettingsStore()
const authStore = useAuthStore()
const router = useRouter()

const { t } = useI18n()
const logout = () => {
  authStore.logout()
  router.push({ name: 'TheAuthLogin' })
}

const headerClass = computed(() => {
  if (settingsStore.settings.direction === DirectionEnum.RTL) {
    return '!bg-gradient-to-l'
  } else {
    return '!bg-gradient-to-r '
  }
})
</script>
