import React from 'react'

const CoinNumberCell = ({coin}) => {

  return (
    <div className='flex justify-start w-max px-2 py-2 h-8 flex-row items-center gap-2   '>
      <img className= ' rounded-full  w-8 h-8 ' src={coin.logo}/>
      <h1 className='font-semibold text-gray-800'>{coin.name}</h1>
      <h2 className='text-gray-300 font-bold'>{coin.symbol}</h2>
    </div>
  )
}

export default CoinNumberCell
