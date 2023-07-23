import React from 'react'

const Header = ({Bigheader,subheader}) => {
  return (
    <div>
        <span><h1>{Bigheader}</h1></span>
        <p>{subheader}</p>
    </div>
  )
}

export default Header