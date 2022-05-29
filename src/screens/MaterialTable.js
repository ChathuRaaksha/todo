import React from 'react'
import MaterialTable from 'material-table'
import { forwardRef } from 'react';
import {useState,useEffect} from 'react'
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog';
import  DialogContent  from '@material-ui/core/DialogContent';
import NavBarrr from '../components/Navbar';
import { RowingSharp } from '@material-ui/icons';
import BannerImage from '../assets/Todowall2.jpg';
import '../styles/Home.css';
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };


function MaterialTable2() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
    const [Users, fetchUsers] = useState([])
    const [Usersid, fetchUsers2] = useState([])
    const getData = () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          fetchUsers(res)
         
        })
    }
    const sendData= (id) => {
     // alert(id)
      fetch('https://jsonplaceholder.typicode.com/todos/'+ id)
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          
          fetchUsers2([res])
        //  alert(JSON.stringify(Usersid))
          setOpen(true)
        })
    }
    useEffect(() => {
      getData()
      
    }, [])
    return (
      <div >
        <NavBarrr/>
      <div className='home'style={{backgroundImage:`url(${BannerImage})`}}>
               <Dialog onClose={handleClose} open={open}>
      <DialogTitle>ToDOS</DialogTitle>
      <DialogContent>
      <table>
<th>id</th>
<th>User ID</th>
<th>Title</th>
<th>Completed</th>
{Usersid.map((item, i) => (
                    <tr key={i}>
                       <td >{item.userId}</td> 
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{String(item.completed) }</td>
                    </tr>
                ))}

         </table>
        </DialogContent>
     
    </Dialog>
     
        <MaterialTable
        icons={tableIcons}
  
        title="Todo Search"
        columns={[
          {
            title: 'ID', 
            field: 'id',
            customSort: (a, b) => a.name.length - b.name.length
          },
          { title: 'UserID', field: 'userId' },
          { title: 'Title', field: 'title' },
          {
            title: 'Completed',
            field: 'completed',
           
            
          },
        ]}
        
        data={Users}
        options={{
          sorting: true
        }}
        onRowClick={(event,rowData) => sendData(rowData.id)}
      />
      </div>
      </div> )
}

export default MaterialTable2