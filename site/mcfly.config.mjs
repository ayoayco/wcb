import { defineMcFlyConfig } from '@mcflyjs/config'
export default defineMcFlyConfig({
  components: 'js',
  nitro: {
    preset: 'netlify'
  }
})
