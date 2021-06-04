import React from 'react'

// const Male = ( props ) => {

const Male = ({ color, height, weight }) => {

    return (
        <div>
            {/* <div>{ props.color }</div> */}
            <div>{ color }</div>
            <div>{ height }</div>
            <div>{ weight }</div>
        </div>
    )

}

export default Male