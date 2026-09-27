# Código en orden · Práctica ESLint y Prettier

Versión en castellano · [English version](#english-version)

## Versión en castellano

Práctica de ESLint y Prettier del módulo FRONTEND [REACT] del máster **Rock The Code** de [The Power Tech School](https://thepower.education/thepowermba/tech). El ejercicio consiste en configurar un proyecto nuevo de Vite con React y JavaScript para detectar errores, ordenar importaciones y aplicar un formato común al código.

He separado la revisión del código, a cargo de ESLint, del formato, a cargo de Prettier. Ambas herramientas se integran para poder corregir imports y formato con un solo comando. La página **Código en orden** presenta el flujo de trabajo y permite alternar entre dos ejemplos de formato; es una demostración visual, no un editor que ejecute ESLint en el navegador.

![Aplicación en escritorio](docs/screenshots/escritorio.png)

### Qué incluye

- Configuración de los entornos `browser`, `es2021` y `node`, con JSX y ECMAScript 2021.
- Reglas recomendadas de JavaScript, React y accesibilidad JSX.
- Imports y exports ordenados con `simple-import-sort`; revisión de imports duplicados y su posición con `eslint-plugin-import`.
- Comillas simples en JavaScript, dobles en JSX, ausencia de punto y coma, dos espacios y comas finales.
- Archivos de exclusiones para ESLint y Prettier.
- Scripts para revisar, corregir, formatear, probar y compilar.
- Hook de `pre-commit` que revisa lint y formato antes de cada commit.

### Estructura

```text
.eslintrc.cjs              # Reglas de ESLint y plugins
.prettierrc.json           # Preferencias de formato
.eslintignore
.prettierignore
src/
  App.jsx                 # Presentación y comparación de formato
  App.css
  main.jsx
  index.css
tests/tooling.test.js      # Pruebas reales de la configuración
docs/
  screenshots/
  verificacion.txt
MEMORIA.md
```

### Tecnologías y compatibilidad

React 19, Vite 7, ESLint 8.57.1, Prettier 3, CSS y Node.js. Las versiones exactas instaladas están fijadas en `package-lock.json`.

El enunciado utiliza el formato clásico de ESLint (`env`, `extends` y `parserOptions`). Por eso se fija ESLint 8.57.1, aunque esta rama ya no tiene mantenimiento. Es una decisión de compatibilidad académica; actualizar ESLint requiere migrar la configuración. Los archivos llevan el punto inicial (`.eslintrc.cjs` y `.prettierrc.json`) para que las herramientas los detecten automáticamente.

### Instalación local

Requiere Node.js 22.12 o superior compatible con Vite 7 y npm. Se recomienda la rama Node.js 22 indicada en `.nvmrc`.

```bash
git clone https://github.com/AraceliFradejas/ejercicioES7--eslint-y-prettier.git
cd ejercicioES7--eslint-y-prettier
npm ci
npm run dev
```

La aplicación queda disponible en `http://localhost:5173`; Vite puede elegir otro puerto si está ocupado. Al instalar dentro del repositorio Git, `pre-commit` instala el hook local.

### Comandos

| Comando                | Función                                            |
| ---------------------- | -------------------------------------------------- |
| `npm run lint`         | Revisar JS, JSX y CJS sin permitir avisos          |
| `npm run lint:fix`     | Corregir automáticamente los problemas compatibles |
| `npm run format`       | Formatear código, estilos y documentación          |
| `npm run format:check` | Comprobar formato sin modificar archivos           |
| `npm test`             | Ejecutar cinco pruebas de ESLint y Prettier        |
| `npm run build`        | Generar la compilación en `dist`                   |
| `npm run preview`      | Servir localmente la compilación                   |
| `npm run check`        | Ejecutar lint, formato, pruebas y build            |

Los errores de lógica y accesibilidad que no admiten corrección automática deben resolverse a mano. El hook comprueba los archivos del directorio de trabajo y no modifica ni añade archivos al área de preparación de Git.

### Memoria del proyecto

El detalle de los requisitos cumplidos, las decisiones técnicas, las comprobaciones y las capturas está en la [memoria del proyecto](MEMORIA.md). La salida de las comprobaciones está en [el registro de verificación](docs/verificacion.txt).

### Redes sociales

[GitHub](https://github.com/AraceliFradejas) · [LinkedIn](https://www.linkedin.com/in/araceli-fradejas-munoz-transformaciondigital/) · [X](https://x.com/AraceliFradejas) · [Medium](https://medium.com/@araceli.fradejas) · [YouTube](https://www.youtube.com/@aracelifradejasmunoz2758)

### Autora

**Araceli Fradejas Muñoz** · Proyecto académico del máster Rock The Code de [The Power Tech School](https://thepower.education/thepowermba/tech).

---

## English version

[Volver a la versión en castellano](#versión-en-castellano)

ESLint and Prettier exercise from the FRONTEND [REACT] module of the **Rock The Code** master's programme at [The Power Tech School](https://thepower.education/thepowermba/tech). The assignment consists of setting up a new Vite project with React and JavaScript to detect code issues, sort imports and enforce consistent formatting.

ESLint checks JavaScript, React and JSX accessibility. Prettier handles formatting, and `simple-import-sort` sorts imports and exports. The page includes an interactive before-and-after example: it illustrates formatting without running the tools in the browser.

### Technologies and setup

React 19, Vite 7, ESLint 8.57.1, Prettier 3 and plain CSS. Requires Node.js 22.12 or a later compatible version. Node.js 22 is recommended. Exact dependency versions are recorded in `package-lock.json`.

```bash
git clone https://github.com/AraceliFradejas/ejercicioES7--eslint-y-prettier.git
cd ejercicioES7--eslint-y-prettier
npm ci
npm run dev
```

Vite serves the app at `http://localhost:5173` unless the port is already taken. Installation inside the Git repository sets up a local hook that checks lint and formatting before commits.

ESLint 8 is pinned to match the assignment's legacy configuration format. It is no longer maintained; upgrading requires a configuration migration. The leading dots in `.eslintrc.cjs` and `.prettierrc.json` enable automatic configuration discovery.

### Commands

Use `npm run lint` to inspect code, `npm run lint:fix` to apply supported fixes, `npm run format` to format files and `npm run format:check` to check formatting without changes. `npm test` runs five configuration tests. `npm run build` creates a production build, and `npm run preview` serves it locally. `npm run check` runs all four verification steps.

Formatting uses single quotes in JavaScript, double quotes in JSX, no semicolons, two spaces, an 80-character target width, trailing commas and automatic line endings. Generated files and dependencies are excluded. Issues without automatic fixes need manual changes. The commit hook checks the working tree and does not stage files.

### Project report

Requirements, decisions, validation results and screenshots are in the [project report in Spanish](MEMORIA.md). See the [verification log](docs/verificacion.txt) for command output and the Spanish section above for the project structure.

### Social media

[GitHub](https://github.com/AraceliFradejas) · [LinkedIn](https://www.linkedin.com/in/araceli-fradejas-munoz-transformaciondigital/) · [X](https://x.com/AraceliFradejas) · [Medium](https://medium.com/@araceli.fradejas) · [YouTube](https://www.youtube.com/@aracelifradejasmunoz2758)

### Author

**Araceli Fradejas Muñoz** · Academic project for the Rock The Code master's programme at [The Power Tech School](https://thepower.education/thepowermba/tech).
