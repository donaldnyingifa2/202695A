import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

function App() {
  const [data, setData] = useState({
    "row_name": "Row 1",
    "e0": "Value for e0",
    "e1": "Value for e1",
    "e2": "Value for e2",
  });

  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  // Extract environment keys (e0, e1, etc.)
  const envKeys = Object.keys(data).filter((key) => key.startsWith('e'));

  // Generate columns dynamically
  const columns = [
    { field: 'row_name', headerName: 'Row Name', width: 150 },
    ...envKeys.map((envKey, index) => ({
      field: envKey,
      headerName: `Environment ${index}`,
      width: 150,
      hide: currentTab !== index, // Hide column if not the current tab
    })),
  ];

  return (
    <div>
      <Tabs value={currentTab} onChange={handleChange}>
        {envKeys.map((envKey, index) => (
          <Tab key={index} label={`Environment ${index}`} />
        ))}
      </Tabs>

      <DataGrid rows={[{ id: 1, ...data }]} columns={columns} />
    </div>
  );
}

export default App;