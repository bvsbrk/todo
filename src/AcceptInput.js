import React, {useState} from 'react'

function AcceptInput({content, setContent, setAdd}) {
    return (
        <>
            <p style={{fontSize: '20px', cursor: 'pointer'}} onClick={() => setAdd(false)}>X</p>
            <textarea className='ta' onChange={e => setContent(e.target.value)} value={content} placeholder="What would you like to add ?"/>
        </>
    )
}

export default AcceptInput
