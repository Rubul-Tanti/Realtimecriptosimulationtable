import React from 'react'

export default function StaticText({value,dolar}) {
  return (
    <div className={`text-gray-700 text-sm font-semibold p-2 `}>
    <span>{dolar&&"$"}{value}</span>
  </div>
  )
}
