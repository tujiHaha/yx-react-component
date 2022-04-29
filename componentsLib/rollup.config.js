import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript2'
import {
  terser
} from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
// import commonjs from 'rollup-plugin-commonjs'

// 用于生成类型声名文件
import dts from 'rollup-plugin-dts'
export default [{
    input: './index.tsx',
    output: {
      file: './dist/bundle.js',
      format: 'esm'
    },
    plugins: [
      // resolve(),
      // commonjs(),
      typescript(),
      terser()
    ]
  },
  {
    input: './index.tsx',
    output: [{
      filename: 'index.d.ts',
      dir: 'dist',
      format: 'esm'
    }],
    plugins: [dts()]
  }

]