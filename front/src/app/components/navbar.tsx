import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { TypographyDef } from './fields';
import {  Stack } from '@mui/material';
import { current_routes } from '../utils';


export default function Navbar() {

  const routes=current_routes
  return (
    <Box >
      <AppBar position="absolute">
        <Toolbar sx={{background:"black"}}>

  <Stack
  direction="row"
  spacing={25}
  alignItems={"center"}
>
          <TypographyDef value={routes.main_page} link={"/"}  ></TypographyDef>
          <TypographyDef value={routes.about} link={"/wad"}></TypographyDef>
          <TypographyDef value={routes.teams}link={"/rsf"}></TypographyDef>
          <TypographyDef value={routes.attandance} link={"/sef"}></TypographyDef>
          <TypographyDef value={routes.photos}link={"/sef"}></TypographyDef>
          <TypographyDef value={routes.contacts}link={"/esfs"}></TypographyDef>

          <IconButton size="medium" color="inherit">
          <MenuIcon />
          </IconButton>
    
       </Stack>

        </Toolbar>
      </AppBar>
    </Box>
  );
}