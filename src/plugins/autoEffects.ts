/* eslint-disable vue/multi-word-component-names */
import type { App } from 'vue' // ✅ Import correct pour éviter l'erreur "App is a type"
import { h, defineComponent } from 'vue'
import HighlightedText from '@/components/HighlightedText.vue'
import CircledText from '@/components/CircledText.vue'

export default {
  install(app: App) {
    // ✅ Utilisation de composants renommés pour éviter le conflit avec les balises HTML
    app.component(
      'CircledTextWrapper',
      defineComponent({
        render() {
          return h(CircledText, {}, { default: () => this.$slots.default?.() })
        }
      })
    )

    app.component(
      'HighlightedTextWrapper',
      defineComponent({
        render() {
          return h(HighlightedText, {}, { default: () => this.$slots.default?.() })
        }
      })
    )
  }
}
