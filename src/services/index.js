import { createSlice } from "@reduxjs/toolkit";
import{dummyCryptoData}from "../data/data"
const initialState={
  value:dummyCryptoData
}

const updatingAlgo=(value)=>{
let temp=value+((Math.random()*value)/100)
temp=Math.round(temp*100)/100
return temp
}

export const cryptoSlice=createSlice({
  name:'crypto',
  initialState,
  reducers:{
simulateRealTimeData:(state,action)=>{
state.value.map((coin)=>{

  coin.price=updatingAlgo(coin.price)


  coin.change1h=updatingAlgo(coin.change1h)


  coin.change24h=updatingAlgo(coin.change24h)


coin.change7d=updatingAlgo(coin.change7d)


coin.marketCap=updatingAlgo(coin.marketCap)


coin.volume=updatingAlgo(coin.volume)

coin.circulatingSupply=updatingAlgo(coin.circulatingSupply)

})
}    
  }
})

export const {simulateRealTimeData}=cryptoSlice.actions
export default cryptoSlice.reducer