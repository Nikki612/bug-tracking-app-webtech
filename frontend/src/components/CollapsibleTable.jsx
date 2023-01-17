<<<<<<< Updated upstream
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

function CollapsibleTable() {
  const [projects, setProjects] = useState([]);
  const userId = localStorage.getItem("userId");
  const memberType = localStorage.getItem("memberType");

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/${userId}/projects`)
      .then((res) => {
        setProjects(res.data);
        console.log("Projects:", projects);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
=======
import * as React from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

function createData(id, name, description, repo) {
  return {
    id,
    name,
    repo,
    description,
    history: [
      {
        id: 1,
        severity: 'ooglie booglie',
        description: 3,
        link: 'https://',
      },
      {
        id: 2,
        severity: 'ooglie booglie',
        description: 3,
        link: 'https://',
      },
    ],
  }
}

function Row(props) {
  const { row } = props
  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">{row.repo}</TableCell>
        <TableCell align="right">{row.description}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Severity</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">Link</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.id}>
                      <TableCell component="th" scope="row">
                        {historyRow.id}
                      </TableCell>
                      <TableCell>{historyRow.severity}</TableCell>
                      <TableCell align="right">
                        {historyRow.description}
                      </TableCell>
                      <TableCell align="right">{historyRow.link}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

const rows = [
  createData(1, 'alibaba', 'ching chong', 'http://link la baieti'),
  createData(2, 'alibaba', 'ching chong', 'http://link la baieti'),
  createData(3, 'alibaba', 'ching chong', 'http://link la baieti'),
  createData(4, 'alibaba', 'ching chong', 'http://link la baieti'),
  createData(5, 'alibaba', 'ching chong', 'http://link la baieti'),
]
>>>>>>> Stashed changes

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Repository</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
<<<<<<< Updated upstream
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell component="th" scope="row">
                {project.id}
              </TableCell>
              <TableCell align="right">{project.name}</TableCell>
              <TableCell align="right">{project.description}</TableCell>
              <TableCell align="right">{project.repository}</TableCell>
            </TableRow>
=======
          {row.map((row) => (
            <Row key={row.id} row={row} />
>>>>>>> Stashed changes
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CollapsibleTable
