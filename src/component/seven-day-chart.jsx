import React from 'react'

export default function SevenDayChart({trend}) {
  return (
    <div className='p-2 h-16'>
      <img className='h-full min-w-16' src={trend}></img>
    </div>
  )
}
