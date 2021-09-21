import React from 'react'
import './index.css'

export default function AppHeader(props){

    return(

        <div className="AppHeader">
            <h1 className="header">Welcome to React-App</h1>
            <h4>Username: {props.username}</h4>
            <h4>Location:{props.location}</h4>
        </div>
    
    )
}