import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import ToggleButton from '@mui/material/ToggleButton'
import CheckIcon from '@mui/icons-material/Check'

import axios from 'axios'

export default function DynamicTable() {
  const [data, setData] = useState([])
  const [userData, setUserData] = useState('')
  const [selected, setSelected] = useState(false)
  const [selectedIndexes, setSelectedIndexes] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5001/api/projects')
      .then((res) => {
        setData(res.data)
        console.log('Result:', data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  console.log(data)
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
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.repository}</TableCell>
              <TableCell align="right">
                <ToggleButton
                  value={row.id}
                  selected={selectedIndexes.includes(row.id)}
                  onChange={() => {
                    if (selectedIndexes.includes(row.id)) {
                      // Make a DELETE API call to delete the PM
                      axios.delete(`http://localhost:5001/api/pms/${row.id}`, {
                        params: {
                          userId: localStorage.getItem("userId"),
                          memberType: "tst"
                        }
                      })
                        .then(response => {
                          console.log(response);
                        })
                        .catch(error => {
                          console.log(error);
                        });
                      setSelectedIndexes(
                        selectedIndexes.filter((id) => id !== row.id)
                      )
                    } else {
                      // Make a POST API call to insert the PM
                      axios.post(`http://localhost:5001/api/newPM`, {
                        projectId: row.id,
                        userId: localStorage.getItem("userId"),
                        memberType: "tst"
                      })
                        .then(response => {
                          console.log(response);
                        })
                        .catch(error => {
                          console.log(error);
                        });
                      setSelectedIndexes([...selectedIndexes, row.id])
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
  )
}
