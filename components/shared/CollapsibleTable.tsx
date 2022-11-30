// function createData(name: string, calories: number, fat: number, carbs: number, protein: number, price: number) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [
//       {
//         date: '2020-01-05',
//         customerId: '11091700',
//         amount: 3,
//       },
//       {
//         date: '2020-01-02',
//         customerId: 'Anonymous',
//         amount: 1,
//       },
//     ],
//   };
// }

// function Row(props: { row: ReturnType<typeof createData> }) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);

//   return (
//     <>
//       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//         <TableCell>
//           <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.name}
//         </TableCell>
//         <TableCell align="right">{row.calories}</TableCell>
//         <TableCell align="right">{row.fat}</TableCell>
//         <TableCell align="right">${row.carbs}</TableCell>
//         <TableCell align="right">{row.protein}%</TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Typography variant="h6" gutterBottom component="div">
//                 Sales
//               </Typography>
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Date</TableCell>
//                     <TableCell>Customer</TableCell>
//                     <TableCell align="right">Amount</TableCell>
//                     <TableCell align="right">Total price ($)</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {row.history.map((historyRow) => (
//                     <TableRow key={historyRow.date}>
//                       <TableCell component="th" scope="row">
//                         {historyRow.date}
//                       </TableCell>
//                       <TableCell>{historyRow.customerId}</TableCell>
//                       <TableCell align="right">{historyRow.amount}</TableCell>
//                       <TableCell align="right">{Math.round(historyRow.amount * row.price * 100) / 100}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </>
//   );
// }

// const rows = [
//   createData('Alpha / Limited Edition Alpha', 1993, 1, 1000000, 1, 3.99),
//   createData('Beta / Limited Edition Beta', 1993, 200, 500000, 3, 4.99),
//   createData('Unlimited Edition', 1993, 120, 250000, 10, 3.79),
//   createData('Arabian Nights', 1993, 240, 200000, 20, 2.5),
//   createData('Antiquities', 1994, 399, 100000, 21, 1.5),
// ];

// export default function CollapsibleTable(): JSX.Element {
//   return (
//     <TableContainer component={Paper}>
//       <Table aria-label="collapsible table">
//         <TableHead>
//           <TableRow>
//             <TableCell />
//             <TableCell>Set Name</TableCell>
//             <TableCell align="right">Year Released</TableCell>
//             <TableCell align="right">Total Quantity</TableCell>
//             <TableCell align="right">Total Price</TableCell>
//             <TableCell align="right">Percentage</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <Row key={row.name} row={row} />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

export {};
