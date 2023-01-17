import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ToggleButton from '@mui/material/ToggleButton';
import CheckIcon from '@mui/icons-material/Check';

import axios from "axios";

export default function DynamicTable() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(false);
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/projects")
      .then((res) => {
        setData(res.data);
        console.log("Result:", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Repository</TableCell>
            <TableCell align="right">Tester?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.projectId} onClick={() => {setSelectedIndexes(row.projectId);console.log(setSelectedIndexes(row.projectId))}}>
              <TableCell component="th" scope="row">
                {row.projectId}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.repository}</TableCell>
              <TableCell align="right">
                <ToggleButton
                  key={row.projectId}
                  value="check"
                  selected={selectedIndexes.includes(row.projectId)}
                  onChange={() => {
                    if (selectedIndexes.includes(row.projectId)) {
                    setSelectedIndexes(selectedIndexes.filter(id => id !== row.projectId));
                } else {
                    setSelectedIndexes([...selectedIndexes, row.projectId]);
                }
                 }}
                >
                  <CheckIcon />
                </ToggleButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
