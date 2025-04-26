import { defineStore } from 'pinia'
import 'dayjs/locale/fa'
import { useFullscreen, useWindowSize } from '@vueuse/core'

import { ref, computed } from 'vue'
import { ComponentSizeEnum, DirectionEnum, FontFamilyEnum, LanguageEnum } from '@/enums'
import { LocaleMapping } from '@/constant'
import type { MappingAlgorithm, ThemeConfig } from 'ant-design-vue/es/config-provider/context'

import { theme as antTheme } from 'ant-design-vue/es'
import { remove } from 'lodash'
import { useLocalStorage } from '@vueuse/core'

import dayjs from 'dayjs'
import jalali from '@zoomit/dayjs-jalali-plugin'
import { useI18n } from 'vue-i18n'
import { initI18n } from '@/i18n'

export const useSettingsStore = defineStore('Setting', () => {
  const settings = useLocalStorage('settings', {
    direction: DirectionEnum.LTR,
    language: LanguageEnum.FARSI,
    componentSize: ComponentSizeEnum.MIDDLE,
    fontFamily: FontFamilyEnum.ENGLISH,
    colorPrimary: '#2893ff',
    isDark: false,
    isCompact: false as boolean,
  })

  const appRef = ref()
  const fullscreen = useFullscreen(appRef.value)
  const locale = ref(LocaleMapping[settings.value.language])
  const algorithm = computed<MappingAlgorithm | MappingAlgorithm[]>(() => {
    const list: any = []

    if (settings.value.isDark) {
      list.push(antTheme.darkAlgorithm)
    } else {
      remove(list, (item) => item === antTheme.darkAlgorithm)
    }

    if (settings.value.isCompact) {
      list.push(antTheme.compactAlgorithm)
    } else {
      remove(list, (item) => item === antTheme.compactAlgorithm)
    }

    return list
  })

  const theme = computed<ThemeConfig>(() => {
    return {
      token: {
        colorPrimary: settings.value.colorPrimary,
        fontFamily: settings.value.fontFamily,
      },
      algorithm: algorithm.value,
    }
  })

  const i18n = useI18n()
  dayjs.extend(jalali)
  const setLanguageConfig = () => {
    i18n.locale.value = settings.value.language
    dayjs.calendar(i18n.locale.value === 'fa' ? 'jalali' : 'gregory')
    initI18n.global.locale.value = settings.value.language as 'en' | 'fa'
    locale.value = LocaleMapping[settings.value.language]

    if (settings.value.language === LanguageEnum.FARSI) {
      settings.value.fontFamily = FontFamilyEnum.FARSI
    }
    if (settings.value.language === LanguageEnum.ENGLISH) {
      settings.value.fontFamily = FontFamilyEnum.ENGLISH
    }
  }

  return {
    settings,
    locale,
    theme,
    setLanguageConfig,
    fullscreen: { ...fullscreen, appRef },
  }
})
