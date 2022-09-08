// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { makeStyles } from '@material-ui/core/styles';
// // import Paper from '@material-ui/core/Paper';
// // import Table from '@material-ui/core/Table';
// // import TableBody from '@material-ui/core/TableBody';
// // import TableCell from '@material-ui/core/TableCell';
// // import TableContainer from '@material-ui/core/TableContainer';
// // import TableHead from '@material-ui/core/TableHead';
// // import TablePagination from '@material-ui/core/TablePagination';
// // import TableRow from '@material-ui/core/TableRow';

// // const columns = [
// //   { id: 'name', label: 'Name', minWidth: 170 },
// //   { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
// //   {
// //     id: 'population',
// //     label: 'Population',
// //     minWidth: 170,
// //     align: 'right',
// //     format: (value) => value.toLocaleString('en-US'),
// //   },
// //   {
// //     id: 'size',
// //     label: 'Size\u00a0(km\u00b2)',
// //     minWidth: 170,
// //     align: 'right',
// //     format: (value) => value.toLocaleString('en-US'),
// //   },
// //   {
// //     id: 'density',
// //     label: 'Density',
// //     minWidth: 170,
// //     align: 'right',
// //     format: (value) => value.toFixed(2),
// //   },
// // ];

// // function createData(name, code, population, size) {
// //   const density = population / size;
// //   return { name, code, population, size, density };
// // }

// // const rows = [
// //   createData('India', 'IN', 1324171354, 3287263),
// //   createData('China', 'CN', 1403500365, 9596961),
// //   createData('Italy', 'IT', 60483973, 301340),
// //   createData('United States', 'US', 327167434, 9833520),
// //   createData('Canada', 'CA', 37602103, 9984670),
// //   createData('Australia', 'AU', 25475400, 7692024),
// //   createData('Germany', 'DE', 83019200, 357578),
// //   createData('Ireland', 'IE', 4857000, 70273),
// //   createData('Mexico', 'MX', 126577691, 1972550),
// //   createData('Japan', 'JP', 126317000, 377973),
// //   createData('France', 'FR', 67022000, 640679),
// //   createData('United Kingdom', 'GB', 67545757, 242495),
// //   createData('Russia', 'RU', 146793744, 17098246),
// //   createData('Nigeria', 'NG', 200962417, 923768),
// //   createData('Brazil', 'BR', 210147125, 8515767),
// // ];

// // const useStyles = makeStyles({
// //   root: {
// //     width: '100%',
// //   },
// //   container: {
// //     maxHeight: 440,
// //   },
// // });







// // export default function StickyHeadTable() {
// //   const classes = useStyles();
// //   const [page, setPage] = React.useState(0);
// //   const [rowsPerPage, setRowsPerPage] = React.useState(10);

// //   const handleChangePage = (event, newPage) => {
// //     setPage(newPage);
// //   };

// //   const handleChangeRowsPerPage = (event) => {
// //     setRowsPerPage(+event.target.value);
// //     setPage(0);
// //   };

// //     // All Data handle for data
// //   const [data, setData] = useState([]);
// //   // handle for pagination data
// // //   const [page, setPage] = useState(0);

// // //   // handle for tables rows
// // //   const [rowsPerPage, setRowsPerPage] = useState(5);

 
// // React.useEffect(() => {
// //     axios.get(`https://qaapi.jahernotice.com/api/Epp`).then((response) => {
// //         setData(response.data.data);
// //       console.log("anuj",response.data.data)
// //     });
// //   }, []);

// //   return (
// //     <Paper sx={{ width: "100%", mb: 0 }}>
// //     <TableContainer component={Paper}>
// //       <Table
// //         sx={{ minWidth: 650 }}
// //         className="table table-striped table-hover"
// //         size="small"
// //         aria-label="simple table"
// //       >
// //         <TableHead>
// //           <TableRow>
// //             <TableCell>EPPCount</TableCell>
// //             <TableCell>EmailID</TableCell>
// //             <TableCell>FirstName</TableCell>
// //             <TableCell>LastName</TableCell>
// //             <TableCell>MobileNo</TableCell>
// //             <TableCell>UserID</TableCell>
// //             <TableCell> end_date</TableCell>
// //             <TableCell>group_id</TableCell>
// //             <TableCell>start_date</TableCell>
// //           </TableRow>
// //         </TableHead>
// //         <TableBody>
// //           {data
// //             .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
// //             .map((data,index) => (
// //               <TableRow
// //                 key={index}
// //                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
// //               >
// //                 <TableCell>{data.EPPCount}</TableCell>
// //                 <TableCell>{data.EmailID}</TableCell>
// //                 <TableCell>{data.FirstName}</TableCell>
// //                 <TableCell>{data.LastName}</TableCell>
// //                 <TableCell>{data.MobileNo}</TableCell>
// //                 <TableCell>{data.UserID}</TableCell>
// //                 <TableCell>{data.end_date}</TableCell>
// //                 <TableCell>{data.group_id}</TableCell>
// //                 <TableCell>{data.start_date}</TableCell>
// //               </TableRow>
// //             ))}
// //         </TableBody>
// //       </Table>
// //     </TableContainer>
// //     {/* table pagination */}
// //     <TablePagination
// //       rowsPerPageOptions={[5, 10, 25]}
// //       component="div"
// //       count={data.length}
// //       rowsPerPage={rowsPerPage}
// //       page={page}
// //       onPageChange={handleChangePage}
// //       onRowsPerPageChange={handleChangeRowsPerPage}
// //     />
// //   </Paper>
// //   );
// // }



// import React, { useEffect, useState} from 'react'
// import axios from 'axios'
// import { Container } from '@material-ui/core';

// function Edit(props){
//   const [book, setBook] =useState({Name:'', Author:''})
//   const url = 'localhost:50231/api/Book/GetBookById?d=' + props,match,parm,id;

//   useEffect(()=>{
//     const GetData = async ()=>{
//       const resulr = await axios.get(url)
//       .then((response)=>{
//         setBook(response.data)
//       });
//     }
//     GetData();
//   },[]);

//   return(
//     <dev className="app flex-row align-items-center">
//       <Container>
//         <Row className='justify-content-center'>
//           <Card className='mx-4'>
//             <CardBody className='p-4'>
//               <Form>
//                 <h1>EDIT</h1>

//               </Form>
//             </CardBody>
//           </Card>
//         </Row>
//       </Container>

//     </dev>

//   )
// }
// export default Edit;