import React from 'react'
import { useState } from 'react'
import Faculty_Details from '../Components/Faculty_Details'
import Faculty_list from '../Components/Faculty_list'

const Faculty = ({setId,setTemp}) => {
    return (
        <>
        <Faculty_list setId={setId} setTemp={setTemp}/>
        </>
    )
}

export default Faculty