import React from 'react'
import { useState } from 'react'
import Faculty_Details from '../Components/Faculty_Details'
import Faculty_list from '../Components/Faculty_list'

const Faculty = ({setId}) => {
    return (
        <>
        <Faculty_list setId={setId}/>
        </>
    )
}

export default Faculty