import React, { useEffect } from 'react'
import { dummyCryptoData } from '../data/data'
import CoinNumberCell from './coin-name-cell'
import LiveText from './live-number'
import StaticText  from './staticText'
import SevenDayChart from './seven-day-chart'
import { useSelector, useDispatch } from 'react-redux'
import {simulateRealTimeData} from'../services/index'
const Table = () => {
useEffect(()=>{
  setTimeout(simulateRealData, 2000);

},[])
const cryptoData=useSelector((state)=>state.crypto.value)
const dispatch=useDispatch()
const simulateRealData=()=>{
  dispatch(simulateRealTimeData())
setTimeout(simulateRealData, 2000);
}


  return (
    <div className='h-screen overflow-x-scroll overflow-y-hidden'>

<table border='1' className=' w-screen text-sm overflow-x-scroll overflow-y-auto  '>
    <thead className='text-sm font-semibold border-b border-gray-200 h-10 shadow-sm shadow-gray-200 text-gray-800'>
        <tr>
            <th className=''></th>
            <th className=''>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>1h</th>
            <th>24%</th>
            <th>7d%</th>
            <th>Market Cap</th>
            <th>Volume(24h)</th>
            <th>Circulating Supply</th>
            <th>Last 7 Days</th>
        </tr>
    </thead>
    <tbody >
         {
          cryptoData.map((coin,i)=>(
            <tr key={i} className='h-16 border-b  border-gray-200' >
<td className='text-gray-400 '>★ </td>
            <td><StaticText value={coin.rank}/></td>
            <td><CoinNumberCell coin={coin}/></td>
          <td><LiveText dolar={true} value={coin.price}/></td>  
          <td><LiveText value={coin.change1h}/></td>  
          <td><LiveText value={coin.change24h}/></td>  
          <td><LiveText value={coin.change7d}/></td>  
           <td><StaticText value={coin.marketCap} dolar={true}/></td>
           <td><StaticText value={coin.volume} dolar={true}/></td>
           <td><StaticText value={coin.circulatingSupply} dolar={true}/></td>
        <td><SevenDayChart trend={coin.trend7d}/></td>

        </tr>
          ))
}
    </tbody>
</table>  
          </div>
)
}

export default Table
