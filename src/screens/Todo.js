import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {Link} from 'react-router-dom';
import '../styles/Todo.css';
function Todo() {
  const [Users, fetchUsers] = useState([])
  const [Usersid, fetchUsers2] = useState([])
  const result=[]
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchUsers(res)
      })
  }
  const sendData= (id) => {
    fetch('https://jsonplaceholder.typicode.com/todos'+id)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        result.push(res)
        fetchUsers2("["+res+"]")
        alert(JSON.stringify(Usersid))
      })
  }
  useEffect(() => {
    getData()
    
  }, [])

  
  return (
    <>
       <h1>Todo</h1>
     
            <tbody className='customers'>
                <tr>
                    <th >User Id</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
                {result.map((item, i) => (
                    <tr key={i}>
                       <td onClick={() => sendData(item.id)}>{item.userId}</td> 
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.completed}</td>
                    </tr>
                ))}
            </tbody>
 
        </>

        
    );
  
  
  
}

export default Todo