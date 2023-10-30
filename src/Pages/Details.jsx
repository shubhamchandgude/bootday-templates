import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Header from './Header/Header';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const Details = () => {
  const location = useLocation()
  console.log(location);
  const navigate = useNavigate()
  const [data, setdata] = useState()

  const getData = () => {

    axios.get('http://localhost:2000/')
      .then(response => {
        setdata(response.data)
        console.log(response);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  function handleDelete(id) {
    axios
      .delete(`http://localhost:2000/${id}`)
      .then(() => {
        getData();
      }).catch((err) => {
        console.log(err)
      });
  }

  const columns = [
    { field: 'id', headerName: 'User Id', flex: 1 },
    { field: 'username', headerName: 'Username', flex: 1 },
    { field: 'firstname', headerName: 'Firstname', flex: 1 },
    { field: 'lastname', headerName: 'Lastname', flex: 1 },
    { field: 'organisationname', headerName: 'Organisationname', flex: 1 },
    { field: 'location', headerName: 'Location', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'phonenumber', headerName: 'Phonenumber', flex: 1 },
    { field: 'birthday', headerName: 'Birthday', flex: 1 },
    {
      field: 'action', headerName: 'Edit', renderCell: (params) => {
        return (
          <>
            <button className='custom-button' onClick={() => navigate('/editform', { state: params.row })}>
              <EditRoundedIcon />
            </button>
          </>
        )
      }, flex: 1
    },
    {
      field: 'delete', headerName: 'Delete', renderCell: (params) => {
        return (
          <>
            <button className='custom-button' onClick={() => {
              if (
                window.confirm("Are You Sure To Delete Data ??")
              ) {
                handleDelete(params.row.id);
              }
            }}>
              <DeleteIcon />
            </button >
          </>
        )
      }, flex: 1
    }
  ]

  return (
    <>
      <div>
        <Header />
        {/* {location.state.header}
        {location.state.name}
        <img src={location.state.image} height='400vh' width='600vw' /> */}
        {/* <table className="tables">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Organisationname</th>
              <th>Location</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Birth Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => {
              return (
                <>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.organisationname}</td>
                    <td>{item.location}</td>
                    <td>{item.email}</td>
                    <td>{item.phonenumber}</td>
                    <td>{item.birthday}</td>
                    <td>
                        <button
                          className="edit"
                        onClick={()=>{navigate('/editForm', {state:item})}}
                        >
                          <EditRoundedIcon />
                        </button>
                    </td>
                    <td>
                      <button
                        className="delete"
                        onClick={() => {
                          if (
                            window.confirm("Are You Sure To Delete Data ??")
                          ) {
                            handleDelete(item.id);
                          }
                        }}
                      >
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table> */}

        {data ? <DataGrid
          headerClassName="grid-header"
          autoHeight
          getRowId={(row) => row.id}
          columns={columns}
          rows={data}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10, 20, 30]}
        /> : null}
        <Button sx={{ m: 2 }} onClick={() => navigate('/createuser')} variant='contained'>Create User</Button>
        <Button onClick={() => navigate(-1)} variant='contained'>Back</Button>
      </div>
    </>
  )
}

export default Details;