import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    header:{
        width:"99%",
        marginTop:10,
        marginRight:20,
        alignItems:'center',
        color:'white',
        flexDirection:"row",
        borderBottomColor:'white',
        borderBottomWidth:0.5,
        paddingBottom:15,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    leftPart:{
        marginLeft:10,
width:"60%",
flexDirection:"row",
justifyContent:"flex-start",
alignItems:"center"
    },
    heading:{
        color:'white',
        fontSize:22,
        fontWeight:"bold"
    },
    headingImg:{
        marginLeft:5,
        marginRight:5,
        height:30,
        width:30,
        borderRadius:50,
        borderColor:'white',
        borderWidth:1,
    },
    text:{
        color:'white',
        fontSize:14,
    },
    rightPart:{
        width:"50%"
    },
    rank:{
        flexDirection:"row",
        alignSelf:'flex-end'
        ,
        marginRight:10,
        paddingVertical:8,
        paddingHorizontal:15,
        opacity:0.8,
        backgroundColor:"#58F371",
        borderRadius:10,
        borderWidth:1,
        borderColor:'green',
        justifySelf:"flex-end"
    },
    mainScreen:{
        flex: 1,
        backgroundColor:'black'
    },
    chartHolder:{
        alignSelf:"center",
        marginTop:100,
    },
    input: {
        flex: 1,
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        borderBottomColor: "white",
        padding: 10,
        fontSize: 16,
        color: "white",
      },
})
export default styles