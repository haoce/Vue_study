# Vue_study

## Day2 HW

### 延續 HW1 Todo list，引入了 draggable 套件，增加 todo content 的 click 事件

1. 觀察 todo content click 行為，拖曳 todo 並改變排序後再 click 一次，觀察目前行為有甚麼問題。

2. 觀察到問題後，試著解決問題，不限方式。

3. 將 todo list 根據 isSealed 做顯示上的 filter，請在 computed 實作 filter function 並取代 v-for 的 todos。(進行此步驟時請先用`<draggable>...</draggable>` 取代 `<draggable v-model="todos">...</draggable>`，移除 draggable 的 v-model)
