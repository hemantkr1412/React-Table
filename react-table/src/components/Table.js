import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import Data from '../Data';
import {TextField} from '@mui/material';




export const Table = () => {
    const [data, setData] = React.useState(Data);
    const [search, setSearch] = React.useState("");

    const columns = [


        {
            name: 'ID',
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: 'First Name',
            selector:(row) => row.first_name,
            sortable: true,
        },
        {
            name: 'Last Name',
            selector: (row) => row.last_name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: (row) => row.email,
            sortable: true,
            minWidth: "300px",
        },
        {
            name:"Gender",
            selector: (row) => row.gender,
        },
        {
            name: 'IP Address',
            selector: (row) => row.ip_address,

        },
        {
            name:"AIR Port Code",
            selector: (row) => row.airport_code,
        },
        {
            name:"Time",
            selector: (row) => row.time,
            sortable: true,
        },
        {
            name:"Status",
            selector: (row) => row.status? "Active" : "Inactive",
            sortable: true,
        },
        {
            name:"Mobile",
            selector: (row) => row.mobile,
        },
        {
            name:"Area",
            selector: (row) => row.area,
        },
        {
            name:"Show",
            selector: (row) => row.show? "True" : "False",
        },
        {
            name:"Edit",
            selector: (row) => row.edit? "True" : "False",
        },
    ];

    const conditionalRowStyles = [{
            when: row => row.status === true,
            style: {
              backgroundColor: 'green',
              color: 'white',
              '&:hover': {
                cursor: 'pointer',
              },
            },
          },
          {
            when: row => row.status === false,
            style: {
              backgroundColor: 'red',
              color: 'white',
              '&:hover': {
                cursor: 'pointer',
              },
            },
          },
          {
            when: row => row.toggleSelected,
            style: {
              backgroundColor: "blue",
                color: "white",
              userSelect: "none",
            }
          }
        ];


  const handleRowClicked = row => {
    const updatedData = data.map(item => {
      if (row.id !== item.id) {
        return item;
      }

      return {
        ...item,
        toggleSelected: !item.toggleSelected
      };
    });

    setData(updatedData);
  };
  useEffect(() => {
    const results = Data.filter(person =>
        person.first_name.toLowerCase().includes(search.toLowerCase())
    );
    setData(results);
    }, [search]);

        
  return (
    <DataTable
        title="Table"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        pointerOnHover
        responsive
        fixedHeader
        fixedHeaderScrollHeight="800px"
        conditionalRowStyles={conditionalRowStyles}
        //On click background color change
        onRowClicked={handleRowClicked}
        subHeader
        subHeaderComponent={
            <TextField value={search} onChange={(e) => setSearch(e.target.value)} style={{width:"450px"}} placeholder='Search here by Name' /> 
        }
        subHeaderAlign="center"
        

        

        
        
        
       

     />
  )
}
