import assert from 'node:assert/strict'
import { test } from 'node:test'

import eslint from 'eslint'
import * as prettier from 'prettier'

const { ESLint } = eslint
const linter = new ESLint()

test('detecta variables sin definir y problemas de accesibilidad JSX', async () => {
  const [result] = await linter.lintText(
    'export default function Demo() { return <img src={missing} /> }',
    { filePath: 'src/Demo.jsx' },
  )
  const rules = result.messages.map((message) => message.ruleId)
  assert.ok(rules.includes('no-undef'))
  assert.ok(rules.includes('jsx-a11y/alt-text'))
  assert.ok(!rules.includes('react/react-in-jsx-scope'))
})

test('corrige el orden de imports y el formato y deja el código limpio', async () => {
  const fixer = new ESLint({ fix: true })
  const [result] = await fixer.lintText(
    'import {createRoot} from "react-dom/client";\nimport {useState} from "react";\nexport {useState, createRoot};\n',
    { filePath: 'src/example.js' },
  )
  assert.equal(result.errorCount, 0)
  assert.ok(result.output)
  assert.ok(!result.output.includes(';'))
  assert.ok(result.output.includes("from 'react'"))
  assert.ok(
    result.output.indexOf("from 'react'") <
      result.output.indexOf("from 'react-dom/client'"),
  )
  assert.ok(result.output.includes('export { createRoot, useState }'))
  const [checked] = await linter.lintText(result.output, {
    filePath: 'src/example.js',
  })
  assert.equal(checked.messages.length, 0)
})

test('Prettier aplica comillas, espacios, ausencia de punto y coma y coma final', async () => {
  const options = await prettier.resolveConfig('src/example.jsx')
  const output = await prettier.format(
    'const preferences={name:"React",tools:["eslint","prettier"],description:"Una descripción suficientemente larga para dividir el objeto en varias líneas"};\nexport default <div title=\'demo\'>{preferences.name}</div>;',
    { ...options, parser: 'babel' },
  )
  assert.ok(output.includes("  name: 'React',"))
  assert.ok(output.includes('title="demo"'))
  assert.ok(!output.includes(';'))
  assert.ok(output.includes(',\n}'))
  assert.ok(await prettier.check(output, { ...options, parser: 'babel' }))
})

test('ESLint ignora dependencias y archivos generados', async () => {
  for (const file of [
    'node_modules/demo.js',
    'dist/demo.js',
    'coverage/demo.js',
  ]) {
    assert.equal(await linter.isPathIgnored(file), true)
  }
})

test('Prettier respeta el archivo de exclusiones', async () => {
  for (const file of [
    'dist/demo.js',
    'coverage/demo.js',
    'package-lock.json',
  ]) {
    const info = await prettier.getFileInfo(file, {
      ignorePath: '.prettierignore',
    })
    assert.equal(info.ignored, true)
  }
})
