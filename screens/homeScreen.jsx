import { FlatList,View,ActivityIndicator } from 'react-native';
import React,{useState,useEffect} from 'react';
import Coinlist from '../components/coinslist';
import { getCoinsList } from '../src/services/requests';
import cryptocurrencies from '../assets/data/cryptocurrencies.json'
const HomeScreen=({navigation})=>{
    const [coinsList, setCoinsList] = useState();
    const [loading,setLoading]=useState(false);
    
    const coinList=async()=>{
        setLoading(true);
        setCoinsList(await getCoinsList());
        setLoading(false)
    }
    useEffect(()=>{
        coinList();
    },[])
// console.log(coinsList);
    // const {id,symbol,name,image,current_price,market_cap,market_cap_rank,price_change_percentage_24h}=coinsList[0];
    if(loading||!coinsList){
        return (
        <View style={{flex:1,justifyContent:"center"}}>
        <ActivityIndicator
        size={"large"}
        />
        </View>
        )
      }
      else
    return(
        <FlatList
        data={coinsList}
        renderItem={
         ({item})=><Coinlist
         values={item}
            navigation={navigation}
         />
        }
        />
    )
}
export default HomeScreen;