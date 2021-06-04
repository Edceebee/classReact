import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'
import { pathString } from '../helpers'
import Button from './reusable/Button'


const styles = {
    justifyContent: 'space-between',
    display: 'flex',
}

const Header = () => {
    
    let location = useLocation()
    let history = useHistory()

    // let text = pathString(location)
    
    const goToRoute = () => {
        // if(text === 'login') {
        if(location.pathname === '/auth/login') {
            history.push('/auth/register')
        } else {
            history.push('/auth/login')
        }
    }

    return (
        <div style = {styles}>
            <div>Header</div>
            
            {/* <Button color='black' text = {text === 'login' ? 'register' : 'login'} */}
            
            <Button color='black' text = {location.pathname === '/auth/login' ? 'register' : 'login'}                
                width = '40%' outline = {true} action = {goToRoute} />
             
             {/* { useEffect } */}
        </div>
    )
}

export default Header
