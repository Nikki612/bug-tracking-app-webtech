//TODO: ProjectSpecsPage
import React from 'react';
import Header from '../components/Header';
import { Typography } from '@mui/material';
import CollapsibleTable from '../components/CollapsibleTable';

function MyProjectsScreen() {
  return (
    <div>
      <Header />
      <CollapsibleTable />
    </div>
  );
}

export default MyProjectsScreen;
