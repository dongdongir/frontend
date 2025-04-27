import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { ComponentSizeEnum } from '@/enums'
import { useSettingsStore } from '@/stores/settings.store'
export const useComputedClass = () => {
  const settingsStore = useSettingsStore()

  const getClass = ({
    sm = '',
    md = '',
    lg = '',
    smC = '',
    mdC = '',
    lgC = '',
  }: {
    sm?: string
    md?: string
    lg?: string
    smC?: string
    mdC?: string
    lgC?: string
  }): ComputedRef<string> => {
    return computed(() => {
      const { isCompact, componentSize } = settingsStore.settings

      const classesMapping: Record<string, Record<ComponentSizeEnum, string>> = {
        true: {
          [ComponentSizeEnum.LARGE]: lgC,
          [ComponentSizeEnum.MIDDLE]: mdC,
          [ComponentSizeEnum.SMALL]: smC,
        },
        false: {
          [ComponentSizeEnum.LARGE]: lg,
          [ComponentSizeEnum.MIDDLE]: md,
          [ComponentSizeEnum.SMALL]: sm,
        },
      }

      return classesMapping[isCompact ? 'true' : 'false'][componentSize] || md
    })
  }

  return { getClass }
}
