import React from 'react'

const Sum = ({price1,price2,price3,plan}) => {
  return (
    <div className='Summary'>
        <div className='item'>
            <div>
                <h3>{plan}</h3>
                <p>change</p>
            </div>
            <p>{price1}</p>
        </div>
       
        <div className='sum-divid'/>
        <div className='item'>
            <p>online service</p>
            <p>{price2}</p>
        </div>
        <div className='item'>
            <p>Larger Storage</p>
            <p>{price3}</p>
        </div>
    </div>
  )
}

export default Sum