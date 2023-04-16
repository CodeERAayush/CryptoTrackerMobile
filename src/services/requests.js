import axios from "axios";

export const getDetailedCoinData=async(coinId)=>{
    try{
 const response=await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`)
 return response.data;
    }catch(e){
        console.log(e);
    }
}
 
export const getCoinsList=async()=>{
    try{
       const response=await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false');
       return response.data; 
    }catch(e){
        console.log(e);
    }
}

export const getCoinMarketChart = async (coinId, selectedRange) => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${selectedRange}&interval=hourly`)
      return response.data;
    } catch (e) {
      console.log(e)
    }
  }