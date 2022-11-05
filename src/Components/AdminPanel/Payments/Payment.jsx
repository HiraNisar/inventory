import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Grid, Button } from '@material-ui/core'
import FormDialog from './Dialogue';
import { backendURL } from '../../../VarHost';
const initialValue = { id:"", username: "", email: "", phone: "", dob: "" }
function Payment() {
  const [gridApi, setGridApi] = useState(null)
  const [tableData, setTableData] = useState(null)
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(initialValue)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue)
  };
  const url = `${backendURL}/AllPaymentRecord`
  const columnDefs = [
    // { headerName: "ID", field: "_id" },
    { headerName: "Username", field: "email", },
    { headerName: "Payment Status", field: "hasPaid", },
    { headerName: "Payment Date", field: "paymentDate" },
  
    // {
    //   headerName: "Actions", field: "_id", cellRendererFramework: (params) => <div>
    //     <Button variant="outlined" color="primary" onClick={() => handleUpdate(params.data)}>Update</Button>
    //     <Button variant="outlined" color="secondary" onClick={() => handleDelete(params.value)}>Delete</Button>
    //   </div>
    // }
  ]
  // calling getUsers function for first time 
  useEffect(() => {
    getUsers()
  }, [])

  //fetching user data from server
  const getUsers = () => {
    fetch(url).then(resp => resp.json()).then(resp => setTableData(resp))
  }
  const onChange = (e) => {
    const { value, id } = e.target
    // console.log(value,id)
    setFormData({ ...formData, [id]: value })
  }
  const onGridReady = (params) => {
    setGridApi(params)
  }

  // setting update row data to form data and opening pop up window
  const handleUpdate = (oldData) => {
    setFormData(oldData)
    handleClickOpen()
  }
  //deleting a user
  const handleDelete = (_id) => {
    const confirm = window.confirm("Are you sure, you want to delete this row", _id)
    if (confirm) {
      fetch(`${backendURL}/deleteStudent`+ `/${_id}`, { method: "DELETE" }).then(resp => resp.json()).then(resp => getUsers())

    }
  }
  const handleFormSubmit = () => {
    if (formData._id) {
      //updating a user 
      const confirm = window.confirm("Are you sure, you want to update this row ?")
      confirm && fetch(`${backendURL}/updateStudent` + `/${formData._id}`, {
        method: "PATCH", body: JSON.stringify(formData), headers: {
          'content-type': "application/json"
        }
      }).then(resp => resp.json())
        .then(resp => {
          handleClose()
          getUsers()

        })
    } else {
      // adding new user
      fetch(url, {
        method: "POST", body: JSON.stringify(formData), headers: {
          'content-type': "application/json"
        }
      }).then(resp => resp.json())
        .then(resp => {
          handleClose()
          getUsers()
        })
    }
  }

  const defaultColDef = {
    sortable: true,
    flex: 1, filter: true,
    floatingFilter: true,
  }
  return (
    <div className="App">
      <Grid align="right">
    
      </Grid>
      <div className="ag-theme-alpine" style={{ height: '400px' }}>
        <AgGridReact
          rowData={tableData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
      <FormDialog open={open} handleClose={handleClose}
        data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
    </div>
  );
}

export default Payment;