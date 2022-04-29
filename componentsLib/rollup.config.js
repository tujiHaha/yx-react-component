import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript2'
// 用于生成类型声名文件
import dts from 'rollup-plugin-dts'
export default [{
    input: './index.tsx',
    output: {
      file: './dist/bundle.js',
      format: 'esm'
    },
    plugins: [
      json(),
      typescript()
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