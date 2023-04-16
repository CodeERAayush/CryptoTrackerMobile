import { View, Text, Image, Dimensions, TouchableOpacity, TextInput, ActivityIndicator, ScrollView } from "react-native";
import styles from './styles'
import React, { useState, useEffect } from "react";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import Coin from '../assets/data/crypto.json'
//import React Native chart Kit for different kind of Chart
import { getDetailedCoinData } from "../src/services/requests";
// import {
//   LineChart
// } from 'react-native-chart-kit';
import { useRoute } from "@react-navigation/native";

import { LineChart } from "react-native-wagmi-charts";


//Universal Assignment

export const { width: SIZE } = Dimensions.get('window');
const {
  image: { small },
  name,
  symbol,
  prices,
  market_data: {
    market_cap_rank,
    current_price,
    price_change_percentage_24h
  },
} = Coin;









//Export Function


const DetailScr = ({ navigation }) => {





//useStates  


  const [coinData, setCoin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [coinValue, setCoinValue] = useState("0");
  const [usdValue, setUsdValue] = useState("0");




  const route = useRoute();
  const { params: { coinId } } = route;
  // console.log(coinId)


//Fetching CoinData From Api

  const fetchCoinData = async () => {
    setLoading(true);
    const fetchedData = await getDetailedCoinData(coinId)
    setLoading(false);
    // console.log(fetchedData)
    setCoin(fetchedData);
  }
  React.useEffect(() => {
    fetchCoinData();
  }, []);

// {console.log(prices.map((price)=>({x:price[0],y:price[1]})))}


//Render Screen

  if (loading || !coinData) {

    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator
          size={"large"}
        />
      </View>
    )
  }
  else
    console.log(coinData.image.large)
  const changeCoinValue = (value) => {
    setCoinValue(value);
    const floatValue = parseFloat(value.replace(",", ".")) || 0;
    setUsdValue((floatValue * (coinData.market_data.current_price.inr)).toString());
  };

  const changeUsdValue = (value) => {
    setUsdValue(value);
    const floatValue = parseFloat(value.replace(",", ".")) || 0;
    setCoinValue((floatValue / (coinData.market_data.current_price.inr)).toString());
  };



  
  
//Render Details


  return (
    <View style={styles.mainScreen}>
      <View style={styles.header}>
        <View style={{ width: "50%" }}>

{/* //Left Part Header */}

          <View style={styles.leftPart}>
            <TouchableOpacity onPress={() => navigation.replace("Home")}>
              <Ionicons name="chevron-back-outline" size={30} color="white" />
            </TouchableOpacity>
            <Image
              style={styles.headingImg}
              source={{ uri: coinData.image.large }}
            />
            <Text style={styles.heading}>{coinData.market_data.current_price.inr} ₹</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <AntDesign name="swap" size={15} style={{
              transform: [{ rotate: '90deg' }],
              margin: 3,
              opacity: 0.7
            }} color="white" />
            <Text style={[styles.text, { alignSelf: "center" }]}>{(coinData.market_data.price_change_24h_in_currency.inr).toFixed(2)}</Text>
            <Text style={[styles.text, { alignSelf: "center" }]}>&nbsp;₹</Text>
          </View>
        </View>


{/* //Right Part Header */}


        <View style={styles.rightPart}>
          <View style={[styles.rank, { backgroundColor: (coinData.market_data.price_change_percentage_24h) < 0 ? "red" : "#58F371", borderColor: (coinData.market_data.price_change_percentage_24h) < 0 ? "red" : "#58F371" }]}>
            <AntDesign name={(coinData.market_data.price_change_percentage_24h) < 0 ? 'caretdown' : "caretup"} size={10} style={{
              alignSelf: "center"
            }} color='white' />
            <Text style={{ color: "white", fontSize: 14, fontWeight: "bold" }}> {(coinData.market_data.price_change_percentage_24h).toFixed(2)}</Text>
          </View>
        </View>
      </View>
<ScrollView>

{/* //Bezier Chart */}


 {prices.length>0 && <LineChart.Provider 
 data={prices.map((price)=>({timestamp:price[0],value:price[1]}))}>
      <LineChart
      width={Dimensions.get('window').width} // from react-native
      height={(Dimensions.get('window').width)/2}
      >
        <LineChart.Path color= {(coinData.market_data.price_change_percentage_24h) < 0 ? "red" : "#58F371"}>
        <LineChart.Gradient color= {(coinData.market_data.price_change_percentage_24h) < 0 ? "hotpink" : "#58F371"}/>
          </LineChart.Path>
          

        
      </LineChart>

      </LineChart.Provider>}

{/* //Value Converter */}


      <View style={{ flexDirection: "row", width: "95%", alignSelf: 'center' }}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Text style={{ color: "white", alignSelf: "center" }}>
            {coinData.name.toUpperCase()}
          </Text>
          <TextInput
            style={styles.input}
            value={coinValue}
            keyboardType="numeric"
            onChangeText={changeCoinValue}
          />
        </View>

        <View style={{ flexDirection: "row", flex: 1 }}>
          <Text style={{ color: "white", alignSelf: "center" }}>INR</Text>
          <TextInput
            style={styles.input}
            value={usdValue}
            keyboardType="numeric"
            onChangeText={changeUsdValue}
          />
        </View>
      </View>


{/* bottom Area */}

<View>
  <Text style={{ color: "green",margin:10,fontWeight:"bold" }}>24 Hr highest : <Text style={{ color: "white", alignSelf: "center",margin:10,fontWeight:"bold" }}> {coinData.market_data.high_24h.inr} ₹ </Text></Text>

  <Text style={{ color: "red",margin:10,fontWeight:"bold" }}>24 Hr lowest : <Text style={{ color: "white", alignSelf: "center",margin:10,fontWeight:"bold" }}>  {coinData.market_data.low_24h.inr} ₹ </Text></Text>
</View>



</ScrollView> 




    </View>
  )
}
export default DetailScr;