import React from 'react'
import classes from './DrawerToggle.css'

const drawerToggle = (props) => (
    <div>
        <div onClick   = { props.clicked }
             className = { classes.DrawerToggle }>Menu</div>
        <div />
        <div />
        <div />
    </div>

);

export default drawerToggle;