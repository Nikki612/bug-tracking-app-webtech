import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Button from '@mui/material/Button'
import Box from '@mui/joy/Box'
import Typography from '@mui/material/Typography'
import Input from '@mui/joy/Input'
import axios from 'axios'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import ToggleButton from '@mui/material/ToggleButton'
import CheckIcon from '@mui/icons-material/Check'
import { useNavigate } from 'react-router-dom'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
let usrId = localStorage.getItem('userId');

function AddProjectsScreen() {
  const navigate = useNavigate()
  const [projectName, setProjectName] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [projectRepository, setProjectRepository] = useState('')

  const [data, setData] = useState([])
  const [userData, setUserData] = useState('')
  const [selected, setSelected] = useState(false)
  const [selectedIndexes, setSelectedIndexes] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5001/api/users')
      .then((res) => {
        setData(res.data)
        console.log('Result:', data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:5001/api/newProject', {
        name: projectName,
        description: projectDescription,
        repository: projectRepository,
      })
      .then((response) => {
        if (response.data.data.projectId) {
        localStorage.setItem('projectId', response.data.data.projectId)
      }
      else {
        alert('Incorrect username or password')
      }
      })
      .catch((error) => {
        console.log(error)
      })

    axios
      .post('http://localhost:5001/api/newPM', {
        projectId:localStorage.getItem('projectId'),
        userId: usrId,
        memberType: 'PM'
      })
      .then(() => {
        navigate('/home')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <Header />
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add a Project
        </Typography>
        <form
          id="modal-modal-description"
          sx={{ mt: 2 }}
          onSubmit={handleSubmit}
        >
          <Typography sx={{ mt: 2 }}>Name of the project:</Typography>
          <Input
            placeholder="name"
            required
            sx={{ mb: 1, fontSize: 'var(--joy-fontSize-sm)' }}
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <Typography sx={{ mt: 2 }}>Description:</Typography>
          <Input
            placeholder="zi ba ce face"
            required
            sx={{ mb: 1, fontSize: 'var(--joy-fontSize-sm)' }}
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
          <Typography sx={{ mt: 2 }}>Repository:</Typography>
          <Input
            placeholder="da linku"
            required
            sx={{ mb: 1, fontSize: 'var(--joy-fontSize-sm)' }}
            value={projectRepository}
            onChange={(e) => setProjectRepository(e.target.value)}
          />
          <TableContainer component={Paper}>
          <Table aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell align="right">Add?</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.email}>
                  <TableCell component="th" scope="row">
                    {row.email}
                  </TableCell>
                  <TableCell align="right">
                    <ToggleButton
                      value="checked"
                      selected={selectedIndexes.includes(row.email)}
                      onChange={() => {
                        if (selectedIndexes.includes(row.email)) {
                          setSelectedIndexes(
                            selectedIndexes.filter((email) => email !== row.email)
                          )
                        } else {
                          setSelectedIndexes([...selectedIndexes, row.email])
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
          <Button type="submit">Submit</Button>
        </form>
      </Box>
    </div>
  )
}
export default AddProjectsScreen
