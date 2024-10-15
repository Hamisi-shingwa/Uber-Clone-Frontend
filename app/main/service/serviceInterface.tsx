import {StyleSheet, View,Text,Image } from "react-native";
import { Gstyle } from "@/components/style/globalstyle";
import { useRideData } from "./ridecontext";



export function ServiceInterface(){
    const {data} = useRideData()
   
    return(
        <View style={[Gstyle.container]}>
            <Text style={[Gstyle.title]}> Services </Text>
            <View style={Styles.servicecontainer}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Go anywhere, get anything</Text>
                <View style={[Styles.contextData]}>
                  {data.length ? data.map(dt=>{
                    let imageSource;
                    switch (dt.name) {
                      case "Ride":
                        imageSource = require("../../../assets/images/Uberimages/ride.png");
                        break;
                      case "Poa":
                        imageSource = require("../../../assets/images/Uberimages/bajaji.png");
                        break;
                      case "Food":
                        imageSource = require("../../../assets/images/Uberimages/menyu.png");
                        break;
                      case "Reserve":
                        imageSource = require("../../../assets/images/Uberimages/reserve_clock.png");
                        break;
                      case "Boda":
                        imageSource = require("../../../assets/images/Uberimages/boda.png");
                        break;
                      default:
                        imageSource = require("../../../assets/images/Uberimages/promo.png"); // Default image
                    }
                    return(
                        <View style={Styles.availableservice} key={dt.id}>
                            <View style={[Styles.carImg,Gstyle.border]}>
                              <Image style={Styles.UriImage} source={imageSource}/>
                            </View>
                            <Text>{dt.name}</Text>
                        </View>
                    )
                  }): (
                    <Text>No any service available</Text>
                  )}
                                  
                </View>
            </View>
            </View>

    )
}
const Styles = StyleSheet.create({
   servicecontainer:{

   },
   contextData:{
    height:'50%',
    flexWrap:'wrap',
    flexDirection:'row'
   },
   availableservice:{
    justifyContent:'center',
    alignItems:'center',    
    width:'30%',
    height:'50%',
    backgroundColor:'#E0E0E0',
    borderRadius:10,
    margin:5
   },
   carImg:{
      width:'100%',
      height:'70%',
   },
   UriImage:{
    width:'100%',
    height:'100%'
   }
})