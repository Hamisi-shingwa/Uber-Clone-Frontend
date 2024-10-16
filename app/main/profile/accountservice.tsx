import {View,StyleSheet,Text,TouchableWithoutFeedback} from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Gstyle } from '@/components/style/globalstyle'

//define function to display my ejx
type AccountProp = {
    jina: any,
    title:string,
    text? : string,
}
const createEJXTemplate = ({jina, title, text}:AccountProp, route: string = "setting")=>{
    return(
        <TouchableWithoutFeedback>
           <View style={[Styles.infodetails]}>
                <View><MaterialIcons name={jina} size={20} color="black" /></View>
                <View style={Styles.textView}>
                    <Text style={{fontWeight:'bold'}}>{title}</Text>
                </View>
            </View>
          
           </TouchableWithoutFeedback>
    )
}


export function AccountInfo(){
    return(
        <View style={Styles.infocontainer}>
           <TouchableWithoutFeedback>
           <View style={[Styles.infodetails]}>
                <View><MaterialIcons name="family-restroom" size={20} color="black" /></View>
                <View style={Styles.textView}>
                    <Text style={{fontWeight:'bold'}}>Family</Text>
                    <Text style={{color:'grey'}}>Manage a family profile</Text>
                </View>
            </View>
           </TouchableWithoutFeedback>
      {createEJXTemplate({jina:"message",title:"message"})}
      {createEJXTemplate({jina:"message",title:"message"})}
      {createEJXTemplate({jina:"message",title:"message"})}
          
        </View>
    )
}
const Styles = StyleSheet.create(
   {
    infocontainer:{
    
    },
    infodetails:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:20
    },
    textView:{
      marginLeft:20,
    }
   }
)