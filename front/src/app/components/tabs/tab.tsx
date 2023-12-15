import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        centered
      >
        <Tab value="one" label="Баскетбол (м)" />
        <Tab value="two" label="Футбол (ж)" />
        <Tab value="three" label="Мини-футбол (м)" />
        <Tab value="four" label="Волейбол (ж)"/>
        <Tab value="five" label="Волейбол (м)"/>
      </Tabs>
    </Box>
  );
}
//, backgroundColor: '#F0EFFD'