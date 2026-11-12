# Nodo Norte · Práctica 2: Deseño de Interfaces Web

Web responsive para **Nodo Norte**, una comunidad tecnológica de A Coruña que organiza charlas y talleres sobre software libre. Proyecto en equipo con **Scrum**, maquetado con **HTML5 semántico, CSS y Bootstrap 5.3 (CDN)**.

| | |
|---|---|
| **Módulo** | Deseño de Interfaces Web |
| **Ciclo** | Desarrollo de Aplicaciones Web (DAW) |
| **Equipo** | Equipo 5 |
| **Sprint actual** | Sprint 1 |
| **Scrum Master (Sprint 1)** | Nicolás |

## Autores

- **Hugo Suárez Barreiro** ([@Hugo240306](https://github.com/Hugo240306))
- **Nicolás Ledo Varela** ([@ibnotis013](https://github.com/ibnotis013))

## Product Goal

Facilitar que las personas de A Coruña descubran las actividades de Nodo Norte, se inscriban en eventos y conozcan cómo hacerse socias, mediante una web accesible, responsive y coherente con la identidad de la comunidad.

## Sprint Goal (Sprint 1)

Presentar a la Product Owner los wireframes corregidos, el moodboard y la guía de estilos para su aprobación, y dejar en `main` una plantilla responsive en Bootstrap 5.3 con navbar y footer en Inicio, Eventos y Únete.

## Páginas

| Página | Archivo | Contenido |
|---|---|---|
| Inicio | `index.html` | Presentación, próximo evento con botón de inscripción, acceso a hacerse socio |
| Eventos | `eventos.html` | Listado y filtros, formulario de inscripción, eventos anteriores |
| Únete | `unete.html` | Ventajas de ser socio y formulario de alta |

## Estructura del proyecto

```
Practica2-Bootstrap/
├── index.html
├── eventos.html
├── unete.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── img/
│   └── logo.svg
├── docs/
│   ├── fichas/        (Fichas 1 a 5)
│   ├── wireframes/    (escaneados)
│   ├── moodboard/
│   └── guia-de-estilos/
└── README.md
```

## Estado del Sprint 1

Las fases se completan en este orden y no se pasa a la siguiente sin aprobación de la Product Owner:

| # | Fase | Responsable | Estado |
|---|------|-------------|--------|
| 1 | Wireframes (Inicio, Eventos, Únete; móvil y escritorio) | Nicolás y Hugo | 🔄 En corrección |
| 2 | Moodboard | Nicolás | ⏳ Pendiente de aprobar wireframes |
| 3 | Guía de estilos (PDF/PNG) | Hugo | ⏳ Pendiente de aprobar moodboard |
| 4 | Plantilla base Bootstrap (navbar + footer) | Nicolás y Hugo | ⏳ Pendiente de aprobar guía |
| 5 | Repositorio, README y tablero | Nicolás y Hugo | ✅ Hecho |

> Estados: ✅ Hecho · 🔄 En progreso · ⏳ Pendiente. Actualiza esta tabla en cada Daily.

El tablero de seguimiento está en GitHub Projects: _añadir enlace_.

## Diseño

Dirección visual: minimalismo tecnológico, cercano y claro. La guía de estilos completa (colores con su uso, tipografías, botones, formularios, iconos e imágenes) está en `docs/guia-de-estilos/`.

| Color | Código | Uso |
|-------|--------|-----|
| Papel | `#FAFAF8` | Fondo general |
| Gris cálido | `#F2F1ED` | Fondos secundarios |
| Línea | `#E4E2DC` | Bordes y separadores |
| Gris texto | `#66666E` | Texto secundario |
| Tinta | `#17171A` | Texto principal y botón principal |
| Verde bosque | `#1F6F5C` | Acento: enlaces, estados activos, acciones |

Tipografía: **Inter** (texto y títulos) y fuente monoespaciada para detalles retro.

## Cómo ejecutarlo

Abre `index.html` en el navegador (necesita conexión para cargar Bootstrap desde el CDN). Para probar el diseño responsive usa las herramientas de desarrollo del navegador.

## Tecnologías

HTML5 · CSS3 · Bootstrap 5.3 (CDN) · JavaScript · Git y GitHub · Scrum

## Próximos pasos (Sprint 2)

Se rellenará con los cambios que pida la Product Owner en la Review, además de:

- Contenido real de eventos y datos de contacto (a confirmar con el cliente).
- Archivo de eventos anteriores.
- Revisión de accesibilidad y validación W3C.

## Licencia

Proyecto académico con fines educativos.
