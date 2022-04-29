import scss from 'rollup-plugin-scss'
export default {
  input: 'entry-style.js',
  plugins: [
    scss({
      output: 'dist/index.css',
      verbose: true,
      outputStyle: 'compressed'
    })
  ]
}