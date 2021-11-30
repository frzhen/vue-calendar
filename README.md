# calendar

## Project setup

```script
npm install
```

### Compiles and hot-reloads for development

```script
npm run serve
```

### Compiles and minifies for production

```script
npm run build
```

### Lints and fixes files

```script
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Branches Info
* main: vue3+bulma
* bootstrap: vue3+bootstrap5



************************************************************

_The following markup only supported in Gitlab mermaid plugin_
### Vue Component Structure

```mermaid
graph TD;
    id1(App)-->id2([CalendarEntry])
    id1(App)-->id3[[CalendarWeek]]
    id3[[CalendarWeek]]-->id4[[CalendarDay]]
    id4[[CalendarDay]]-->id5([CalendarEvent])
```

#### gantt chart example

```mermaid
gantt
    title Gantt Diagram
    dateFormat YYYY-MM-DD
    section Frontend-1
    CalendarEvent         :a1, 2021-07-23, 2021-07-24
    CalendarEntry         :active, after a1, 2d
    section Frontend-2
    CalendarDay           :crit, a2, 2021-07-22, 2021-07-24
    CalendarWeek          :after a2, 2021-07-27
```
