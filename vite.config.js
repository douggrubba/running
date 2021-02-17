import vue from '@vitejs/plugin-vue'

const publicPath = process.env.NODE_ENV === 'production' ? '/running/' : '/'

export default {
  base: publicPath,
  plugins: [vue()]
}
