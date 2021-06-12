import React from 'react';
import Checkbox from './Checkbox';
import Delete from './delete';

const TodoList = (props) => {

    let editHandler = () => {
        props.setData(props.data.map((item, i) => {
            console.log(props.data[i].id)
            if(item.id === props.data[i].id) {
                return{
                    ...item, editing: true
                }
            }
            return item;
        }))
    }

    return(
        <div>
            <ul>
            {props.data.map((el, index) => (
                 <li
                 key={el.id}
                 onDoubleClick={(e) => editHandler(e, index)}
                 className='todo-item'>
                   <div className={props.data.checked ? 'complicated' : ''}>
                       {el.text}
                   </div>
                   <Checkbox data={props.data} setData={props.setData} id={el.id} />
                   <Delete data={props.data} setData={props.setData} id={el.id} />
               </li>
            ))}
            </ul>
        </div>
    )
};

export default TodoList;