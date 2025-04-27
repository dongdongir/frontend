<template>
  <Layout class="h-screen">
    <AppHeader />
    <AppMain />
    <div class="flex justify-between gap-4 p-4 bg-slate-200 dark:bg-slate-900">
      <AzButton type="text"  icon="tabler:alarm" col>{{ t('messages') }} </AzButton>
      <AzButton type="text" icon="tabler:users" col>{{ t('groups') }}</AzButton>
      <AzButton type="text" icon="game-icons:three-friends" col>{{ t('friends') }}</AzButton>
    </div>
  </Layout>
</template>
<script lang="ts" setup>
import { AzButton } from '@/components'
import AppHeader from './AppLayout/AppHeader.vue'
import AppMain from './AppLayout/AppMain.vue'
import { Layout } from 'ant-design-vue/es'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
