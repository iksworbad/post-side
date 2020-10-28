import React from 'react'
import logo from '../assets/logo.svg'
import greenElement from '../assets/green-header.svg'

export const Header = () => (
    <div className='header'>
        <img src={logo} className='logo' alt='logo'/>
        <img src={greenElement} alt='green'/>
    </div>
)