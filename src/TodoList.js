import React, {useState} from 'react';

function  TodoList(props) {
    
    let tmp;


    let isChecked = (index) => {
        console.log(index)
       
    }

    let delate = (e, index) => {
        tmp = props.data;
        tmp.splice(index, 1)
        props.setData( [...tmp] )
    }

  let editTodo = (el,index) => {
      if(el.id === index) {

      }
  }

    return(
        <ul className="todos">

        {props.data.map( (el, index) => {

            <li className="todoList" key={index} onClick={editTodo}>
                    <div className="content">
                        <input
                            type="checkbox"
                            checked={el.checked}
                            onChange={() => isChecked(index)}
                            className="checkbox"
                        />
                        {el.title}
                    </div>
                    <button className="add-btn" onClick={(e) => {delate(e, index)}}>X</button>
             </li> 

        })}

    </ul>
    )
};

export default TodoList;