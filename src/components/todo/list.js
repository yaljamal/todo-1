import React from 'react';



function TodoList  (props) {
  
  console.log(props);
  if (props.list){
    return (
      <ul>
        {props.list.map(item => (
          <li
            className={`complete-${false.toString()}`}
            key={item._id}
          >
            <span onClick={() =>props.handleComplete(item._id)}>
              {item.item}
            </span>
          </li>
        ))}
      </ul>
    );

  
  }
  else {
    return(
      null
    )
  }
   
}
// class TodoList extends React.Component {

//   render() {
//     return (
//       <ul>
//         {this.props.list.map(item => (
//           <li
//             className={`complete-${item.complete.toString()}`}
//             key={item._id}
//           >
//             <span onClick={() => this.props.handleComplete(item._id)}>
//               {item.text}
//             </span>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

export default TodoList;