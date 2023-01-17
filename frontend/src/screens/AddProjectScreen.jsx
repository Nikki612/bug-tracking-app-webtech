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
let usrId = localStorage.getItem('userId')

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
        if (res.status === 200 && res.data) {
          if (Array.isArray(res.data)) {
            setData(res.data)
          } else {
            console.log('API did not return an array')
          }
        } else {
          console.log('Could not retrieve data from the API')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const project = await axios.post(
        'http://localhost:5001/api/addNewProject',
        {
          name: projectName,
          description: projectDescription,
          repository: projectRepository,
          users: selectedIndexes.map((i) => data[i]),
        }
      )
      if (project.status === 200 && project.data) {
        navigate('/home')
      } else {
        console.log('Could not create project, please check the data')
      }
    } catch (error) {
      console.error(error)
    }
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
            placeholder="repo"
            required
            sx={{ mb: 1, fontSize: 'var(--joy-fontSize-sm)' }}
            value={projectRepository}
            onChange={(e) => setProjectRepository(e.target.value)}
          />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Select</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <ToggleButton
                        value={index}
                        selected={selectedIndexes.includes(index)}
                        onChange={() => {
                          if (selectedIndexes.includes(index)) {
                            setSelectedIndexes(
                              selectedIndexes.filter((i) => i !== index)
                            )
                          } else {
                            setSelectedIndexes([...selectedIndexes, index])
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
          <Button type="submit" variant="contained" color="primary">
            Create Project
          </Button>
        </form>
      </Box>
    </div>
  )
}
export default AddProjectsScreen
