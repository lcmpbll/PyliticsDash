import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import StarRating from "./components/StarRating";
import StageCircle from "./components/Stage";
import { useTheme, Typography } from "@mui/material";
import { tokens } from "./theme";

export default function BasicTable(props) {
  /**
   * A basic table to display all non-nested information from opportunities.json
   */
  const { data, handleRowClick } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette);

  function handleClick(event, row) {
    event.preventDefault();
    handleRowClick(event, row);
  }

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, background: `${colors.primary[300]}` }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <Typography>Opp Stage</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography>Opp Name</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography>Rep Probability</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography>PX Probability</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography>PX Tier</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>Amount</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography>Product</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography>Sales Rep</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              onClick={(event) => handleClick(event, row)}
              key={row.oppId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">
                <StageCircle stage={row.stage} />
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography>{row.oppName}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography>{row.repProbability}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography>{row.pilytixProbability}</Typography>
              </TableCell>
              <TableCell align="left" display="flex" border="2px solid black">
                <StarRating rating={row.pilytixTier} />
              </TableCell>
              <TableCell align="right">
                <Typography>${row.amount}</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography>{row.product}</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography>{row.salesRepName}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
