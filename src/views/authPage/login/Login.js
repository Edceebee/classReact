import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import Button from '../../../components/reusable/Button'
import Input from '../../../components/reusable/Input'
import './login.css'

const Login = () => {
    
    let data = {
        username: '',
        password: ''
    }

    const getData = (key, value) => {
        data[key] = value
    }

    // const logData = () => {
    //     console.log(data)
    // }

    // useEffect(() => {
    //     console.log('Login: i mounted')
    //     return () => console.log('Login: i unmounted');
    // }, [])

    const [loading, setLoading] = useState(false)

    const history = useHistory()

    const loginUser = async () => {
        setLoading(true)

        try {
            let res = await fetch(`http://localhost:5000/users/?email=${data.email}&password=${data.password}`)
            .catch(err => console.error(err))

            let result = await res.json()

            setLoading(false)
            console.log(result)

            if(result.length > 0) {
                history.push("/posts")
            }
        } catch (error) {
            setLoading(false)
            console.error(error)
        }
    }

    return (
        <div>
            <h5>Welcome</h5>
            <div className='loginContainer'>
                <Input label='Email' getData = {getData} dataKey='email' icon='email' />
                <Input label='Password' getData = {getData} dataKey='password' icon='person' />
            </div>

            <div className='loginBtn'>
                <Button color='black' text={loading ? 'Loading': 'login'} width='100%' outline = {false} action = {loginUser} key="" />
            </div>

        </div>
    )
}

export default Login
