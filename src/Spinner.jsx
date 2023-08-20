import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
    return (
        <>
            <img src={loading} alt="loading" />
            <p className='text-white text-lg'>Wait! your password is generating now....</p>
        </>
    )
}

export default Spinner
