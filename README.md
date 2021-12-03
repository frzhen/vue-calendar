# Calendar project in Vue.js

### Branches Info
* main: vue3+bulma+Fontawesome

### Vue Upgrade
*`npm install -g @vue/cli@next`
* Vue/Cli: 5.0.0
* Vue: 3.2.23
* [Vue 2 vs Vue 3 and Migration Notes](https://github.com/frzhen/vue-calendar/blob/bootstrap/Migration_V2_to_V3.md)

### Project setup
* Install Dependencies: 
```script
npm install
```
* Compiles and hot-reloads for development
```script
npm run serve
```
* Compiles and minifies for production
```script
npm run build
```
* Lints and fixes files
```script
npm run lint
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
************************************************************
_The following markup only supported in mermaid plugin_
   - [add chrome extension for mermaid](https://chrome.google.com/webstore/detail/mermaid-diagrams/phfcghedmopjadpojhmmaffjmfiakfil/related)
   - [add chrome externsion for PlantUML](https://chrome.google.com/webstore/detail/plantuml-visualizer/ffaloebcmkogfdkemcekamlmfkkmgkcf/related)
   - [add webstorm plugin from: `prefereence->Language & Frameworks->Markedown` Select Mermaid or PlantUML](https://www.jetbrains.com/help/webstorm/markdown.html#diagrams)
### Vue Component Structure
```mermaid
graph TD;
    id1(App)-->id3[[CalendarWeek]]
    id3[[CalendarWeek]]-->id4[[CalendarDay]]
    id4[[CalendarDay]]-->id5([CalendarEvent])
    id1(App)-->id2([CalendarEntry])
```
```plantuml
@startuml

App -> CalendarEntry: props
App -> CalendarWeek: props

CalendarWeek -> CalendarDay: props
CalendarDay -> CalendarEvent: props
CalendarEvent --> CalendarDay: $emit()
CalendarDay --> CalendarWeek: $emit()
CalendarWeek --> App: $emit()
hnote across: Vuex (or simple state management, or global event bus)

@enduml
```

### Other Structure Documentation:
* [store.js structure](https://github.com/frzhen/vue-calendar/blob/main/src/store.md)

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
