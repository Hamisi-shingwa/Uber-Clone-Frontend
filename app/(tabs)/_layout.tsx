
import {View, Text, StyleSheet} from 'react-native'
import {CheckFile} from './filechecker'
import { ThemedView } from '@/components/ThemedView'

import { ThemedText } from '@/components/ThemedText'
import { GetStart } from '@/components/welcome/getstart'

export default  function HomeScreen(){
  return(
    
      <ThemedView style={Styles.container}>
       <CheckFile/>
    </ThemedView>
  
    
  )

 
}
const Styles = StyleSheet.create({
  container:{
    flex: 1,
    
    
  }
})