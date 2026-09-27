import './App.css'

import { useState } from 'react'

const before = `import {useState} from "react";

const tools = ["ESLint", "Prettier"];
const config = {semi: false, singleQuote: true};`
const after = `import { useState } from 'react'

const tools = ['ESLint', 'Prettier']
const config = { semi: false, singleQuote: true }`

export default function App() {
  const [showFormatted, setShowFormatted] = useState(false)

  return (
    <div className="page">
      <header className="header">
        <a className="brand" href="#inicio">
          <span aria-hidden="true">{'{ }'}</span> código en orden
        </a>
        <span className="course">REACT / PRÁCTICA 07</span>
      </header>
      <main id="inicio">
        <section className="intro" aria-labelledby="title">
          <p className="eyebrow">ESLINT + PRETTIER</p>
          <h1 id="title">
            Buenas reglas.
            <br />
            <span>Mejor código.</span>
          </h1>
          <p className="description">
            Un proyecto React con una base cuidada: detecta errores, ordena las
            importaciones y mantiene un formato consistente.
          </p>
          <a
            className="source-link"
            href="https://github.com/AraceliFradejas/ejercicioES7--eslint-y-prettier"
          >
            Explorar el repositorio <span aria-hidden="true">↗</span>
          </a>
        </section>
        <section className="example" aria-labelledby="example-title">
          <div className="example-heading">
            <h2 id="example-title">El formato, en un vistazo</h2>
            <span className="file-label">ejemplo.js</span>
          </div>
          <div className="code-panel">
            <div className="code-heading">
              <span className="dot" aria-hidden="true" />
              <span>
                {showFormatted
                  ? 'Después · formato consistente'
                  : 'Antes · formato por unificar'}
              </span>
            </div>
            <pre aria-label="Ejemplo de código">
              <code>{showFormatted ? after : before}</code>
            </pre>
          </div>
          <div className="example-footer">
            <p>Comillas simples, dos espacios y sin punto y coma.</p>
            <button
              type="button"
              aria-pressed={showFormatted}
              onClick={() => setShowFormatted((value) => !value)}
            >
              {showFormatted ? 'Ver el original' : 'Ver con formato'}{' '}
              <span aria-hidden="true">↔</span>
            </button>
          </div>
          <p className="note">
            Comparación ilustrativa. Las herramientas se ejecutan en la terminal
            del proyecto.
          </p>
        </section>
        <section className="steps" aria-label="Flujo de trabajo">
          <article>
            <span className="step-number">01 / ANALIZAR</span>
            <h2>Detectar a tiempo</h2>
            <p>
              Reglas de JavaScript, React y accesibilidad para revisar el
              código.
            </p>
            <code>npm run lint</code>
          </article>
          <article>
            <span className="step-number">02 / CORREGIR</span>
            <h2>Cada import en su sitio</h2>
            <p>Orden automático de importaciones y correcciones compatibles.</p>
            <code>npm run lint:fix</code>
          </article>
          <article>
            <span className="step-number">03 / FORMATEAR</span>
            <h2>Un estilo compartido</h2>
            <p>El mismo formato en JavaScript, JSX, CSS y documentación.</p>
            <code>npm run format</code>
          </article>
        </section>
      </main>
      <footer>
        <span>Araceli Fradejas Muñoz</span>
        <span>Rock The Code · The Power Tech School</span>
      </footer>
    </div>
  )
}
