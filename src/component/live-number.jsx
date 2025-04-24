
import React from 'react'

const LiveText = ({value,dolar}) => {
  return (
    <div className={`${value>1?"text-green-600":"text-red-700"}  text-sm font-semibold p-2`}>
      <span>{dolar&&"$"}{value}</span>
    </div>
  )
}

export default LiveText
