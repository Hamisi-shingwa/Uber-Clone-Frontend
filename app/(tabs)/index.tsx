import {View, Text, StyleSheet} from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'

export default  function HomeScreen(){
  return(
    <ThemedView style={Styles.container}>
      <ThemedText type="title">This is Uber app</ThemedText>
    </ThemedView>
  )

 
}
const Styles = StyleSheet.create({
  container:{
    flex: 1,
   
    
  }
})