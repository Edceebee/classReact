import React from 'react'
import { useEffect } from 'react'
import Button from '../../../components/reusable/Button'
import Input from '../../../components/reusable/Input'
import './register.css'

const Register = () => {

    let data = {
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    } 

    const getData = (key, value) => {
        data[key] = value
    }

    const logData = () => {
        console.log(data)
    }

    useEffect(() => {
        console.log('Login: i mounted')
        return () => console.log('Login: i unmounted');
    }, [])

    return (
        <div>
            <h5>Welcome</h5>
            <div className='registerContainer'>
                <Input label='Email' getData = {getData} dataKey='email' icon='email' />
                <Input label='Username' getData = {getData} dataKey='username' icon='person' />
                <Input label='Password' getData = {getData} dataKey='password' icon='lock' />
                <Input label='Confirm Password' getData = {getData} dataKey='confirmPassword' icon='lock' />
            </div>

            <div className='registerBtn'>
                <Button color='black' text='register' width='100%' outline = {false} action = {logData} />
            </div>

        </div>
    )
}

export default Register
