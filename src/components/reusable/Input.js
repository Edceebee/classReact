import { useState, useEffect } from 'react'

const Input = ({ label, dataKey, getData, icon }) => {
    
    const [text, setText] = useState('')

    const inputContainer = {
        position: 'relative',
        marginBottom: '10px'
    }

    const inputIcon = {
        position: 'absolute',
        right: '15px',
        top: '30px',
        color: 'gray',
        fontSize: '20px'
    }

    const updateText = (value) => {
        if(dataKey)
            getData(dataKey.toLowerCase(), value)
        setText(value)
    }

    useEffect(() => {
        console.log('input mounted')
        return () => {
            console.log('input unmounted');
        }
    }, [text])

    return (
        // <div className='form-control'>
        <div style= {inputContainer} >
            <label htmlFor='text'> {label} </label>
            <input type='text' value = {text} onChange={(e) => updateText(e.target.value)} placeholder={`Enter ${label.toLowerCase()}...`} />
            {/* <input type='text' value= {text} onChange={(e) => setText(e.target.value)} placeholder='Enter text...' /> */}
            {/* <h5> {text} </h5> */}
            <i className='material-icons' style= {inputIcon} > {icon} </i>
        </div>
    )
}

export default Input
