
import React,{useState,useEffect} from "react";
import { View,Text,Image,StyleSheet,ActivityIndicator, Pressable, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { getCoinsList } from "../src/services/requests";
const Coinlist=({values,navigation})=>{
    
    const [coinsList, setCoinsList] = useState();
    const [loading,setLoading]=useState(false);
    const {id,symbol,name,image,current_price,market_cap,market_cap_rank,price_change_percentage_24h}=values;
    const color=price_change_percentage_24h<0?"red":"green"
    const updown=price_change_percentage_24h<0?"caretdown":"caretup"
    const opa=price_change_percentage_24h<0?0.6:0.8

    const normalizeMarketCap = (marketCap) => {
        if (marketCap > 1e12) {
          return `${(marketCap / 1e12).toFixed(3)} T`;
        }
        if (marketCap > 1e9) {
          return `${(marketCap / 1e9).toFixed(3)} B`;
        }
        if (marketCap > 1e6) {
          return `${(marketCap / 1e6).toFixed(3)} M`;
        }
        if (marketCap > 1e3) {
          return `${(marketCap / 1e3).toFixed(3)} K`;
        }
        return marketCap;
      };

return (
    <Pressable style={styles.boxWrapper} onPress={()=>navigation.navigate("Details",{coinId:id})}>
    {/* <View style={styles.boxWrapper}> */}
        <View style={styles.leftPart}>
            <Image
            source={{uri:image}}
            style={{
                height:50,
                width:50
            }}
            />
            <View>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.textHolder}>
                <View style={{backgroundColor:"#585858",opacity:0.7,paddingHorizontal:1,marginRight:5,borderRadius:5,borderColor:'white',borderWidth:1}}>
            <Text style={[styles.text,{alignSelf:'center'}]}> {market_cap_rank}</Text>
            </View>
            <Text style={styles.text}>{symbol}</Text>
            <AntDesign name={updown} size={10} style={{
            alignSelf:"center"
            ,opacity:opa
            }}color={color} />
            <Text style={{color:color,
        fontSize:12,
        marginRight:5,
        opacity:opa
        }}>{price_change_percentage_24h.toFixed(2)}%</Text>
            </View>
            </View>
        </View>
        <View style={styles.rightPart}>
            <Text style={{color:'white',
        fontWeight:"bold",
        marginRight:5,
        marginTop:3,
        fontSize:18}}>{current_price} ₹</Text>
        
        <View>
            <Text style={[styles.text,{marginTop:5}]}>MCap {normalizeMarketCap(market_cap)}</Text>
            </View>
        </View>
    </Pressable>
)

}
const styles=StyleSheet.create({
    boxWrapper:{
        // width:'100%',
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        backgroundColor:"black",
        elevation:10,
        padding:10,
        color:'white',
        flexDirection:"row",
        borderRadius:5,
    },
    leftPart:{
        flexDirection:"row",
        width:"50%",
        alignItems:"center"
    },
    title:{
        color:'white',
        fontWeight:"bold",
        marginLeft:10,
        fontSize:18,
    },
    text:{
        color:'white',
        fontSize:12,
        marginRight:5,
        opacity:0.6
    },
    textHolder:{
        flexDirection:"row",
        marginLeft:10,
        marginTop:3,
    },
    rightPart:{
        width:"50%",
        alignItems:"flex-end",
        marginRight:2
    },


})
export default Coinlist;