import React from 'react'

const pStyle = {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '24px',
    color: '#FFFFFF',
    textAlign : 'center'
}

const Copyright = () => {
  return (
    <div style={{padding : '13px 0', background : '#101418B2'}}>
        <p style={pStyle}>
            Copyright © 2022 Golden Dine website
            <br/>
            All rights reserved
        </p>
    </div>
  )
}

export default Copyright