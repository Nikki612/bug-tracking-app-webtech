//TODO: ProjectSpecsPage
import React from 'react';
import Header from '../components/Header';
import { Typography } from '@mui/material';

function ProjectSpecsScreen() {
  return (
    <div>
      <Header />
      <div>
        <Typography level="h4" component="h1">
          <b>Project Name</b>
        </Typography>
        <Typography level="body1">Description</Typography>
        <Typography level="body2">*project description*</Typography>
        <Typography level="body1">Repository</Typography>
        <Typography level="body2">*project repo*</Typography>
      </div>
    </div>
  );
}

export default ProjectSpecsScreen;
