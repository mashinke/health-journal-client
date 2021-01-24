import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import DashboardError from '../../components/DashboardError/DashboardError';

function DashboardRoute() {
  return (
    <DashboardError>
      <Dashboard />
    </DashboardError>
  );
}

export default DashboardRoute;
