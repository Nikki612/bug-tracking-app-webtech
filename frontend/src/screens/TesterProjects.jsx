import React from 'react';
import TableBugs from '../components/DynamicTableBugs';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';
import Button from '@mui/joy/Button';

function TesterProjects() {
  return (
    <div>
      <Header />
      <TableBugs />
    </div>
  );
}

export default TesterProjects;
