//TODO: ProjectSpecsPage
import React from 'react'
import Header from '../components/Header'
import { Typography } from '@mui/material';
import CollapsibleTable from '../components/TableMyProjects';


export default function App()
{
    return (
        <div>
          <Header />
            <CollapsibleTable />
        </div>
      )
}