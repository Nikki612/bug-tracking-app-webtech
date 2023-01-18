//TODO: ProjectSpecsPage
import React, { useEffect,useState } from 'react'
import Header from '../components/Header'
import { Typography } from '@mui/material'
import CollapsibleTable from '../components/CollapsibleTable'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function MyProjectsScreen() {
  const location = useLocation()
  const { userId } = localStorage.getItem('userId')
  const [user, setUser] = useState({})

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:5001/api/My_Projects/${userId}`)
        .then((response) => {
          setUser(response.data.data)
        })
        .catch((error) => {
          console.error(error)
        })
    }
    axios
      .get('http://localhost:5001/api/projects')
      .then((response) => {
        setActivities(response.data.data)
      })
      .catch((error) => {
        console.error(error)
      })
  })
  return (
    <div>
      <Header />
      <div>{user.email}</div>
      <CollapsibleTable />
    </div>
  )
}

export default MyProjectsScreen
