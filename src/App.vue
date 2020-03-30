<script>
import components from './components'

export default {
  install(Vue) {
    Vue.mixin(this)
  },
  components: { ...components }
}
</script>
