import React, {useState} from 'react'
import {AppBar,Tabs,Toolbar,Typography,Tab} from '@mui/material'
// import AddHomeIcon from '@mui/icons-material/AddHome';
import {NavLink} from 'react-router-dom'
import logo from '../images/logo.jpeg'
const Header = () => {
  const [value,setValue] = useState()
  return (
    <div>
      <AppBar sx={{backgroundColor: "Black"}} position='sticky'>
        <Toolbar>
          {/* <AddHomeIcon/>&nbsp; */}
          <Typography> <img src={logo} width={50}/></Typography>&nbsp;&nbsp;&nbsp;
        <Typography variant='h6'>COUNSELLING AND VISITOR MANAGEMENT SYSTEM </Typography>
        <Tabs sx={{ml: 'auto'}} textColor='inherit' indicatorcolor='primary' value={value} onChange={(e,val)=>setValue(val)} >
          <Tab LinkComponent={NavLink} to='/signup' label='Sign Up'/>
          <Tab LinkComponent={NavLink} to='/login' label='Log In'/>
          <Tab LinkComponent={NavLink} to='/counsellor' label='Add Counsellor'/>
          <Tab LinkComponent={NavLink} to='/appointment' label='Appointment'/>
          <Tab LinkComponent={NavLink} to='/visitor' label='Add Visitor'/>
          <Tab LinkComponent={NavLink} to='/contact' label='Contacts'/>
          <Tab LinkComponent={NavLink} to='/fetch-registration' label='Registration'/>
          
        </Tabs>
        </Toolbar>
      </AppBar>
    </div>
    
  )
}

export default Header