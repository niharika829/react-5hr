import React from 'react'
import TodoMainList from './TodoMainList15'
import MapArray from './Todolist13'
function TodoMain(){
    const MapArrayMap = MapArray.map(
      function(list){
        return(
        <TodoMainList
        key={list.id}
        listitem={list}
        />
      )
      }
    )
    return(
      <div>
        {MapArrayMap}
      </div>
    )
}

export default TodoMain
