import React from "react"
import { StatusBar } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { View,Text,StyleSheet,SafeAreaView,Image,TextInput } from "react-native"
 const HomePage =({route,navigation})=>{
    // const { user } = route.params;
     return(
         <SafeAreaView style={{flex:1}}>
             <StatusBar style="dark" />
             <View style={{alignItems:"center",backgroundColor:"black",height:35,flexDirection:"row"}}>
                 <Text style={{fontSize:12,
                    borderBottomWidth:1,color:"#f2f2f2",paddingTop:8,
                    borderBottomColor:"#f2f2f2",marginLeft:70}}>Get the latest on our COVID-19 response</Text>
                    <Icon name="happy-outline" size={25} color="#fff" style={{marginLeft:20,marginTop:5}}/> 
             </View>
            
        
          <View style={{flex:1,position:"relative"}}>
              <Image style={{height:"100%",width:"100%"}}
              source={require('../../assets/img.jpg')}
              />
               <View style={styles.inputContainer}>
            <Icon name="search-outline" size={28}/>
            <TextInput
            placeholder="Search Here"
            
            style={{color:"black",paddingLeft:10,width:"80%",fontWeight:"bold",fontSize:16}}
            />

          </View>
          <View style={{position:"absolute",top:200,left:40}} >
              <Text style={{color:"#fff",fontWeight:"600",fontSize:35}}>Go Near</Text>
              <Text style={{fontSize:12,backgroundColor:"#fff",borderRadius:5,padding:3,fontWeight:"600"}}>Explore nearby Steps</Text>

          </View>
          <View style={{position:"absolute",top:200,left:40}} >
              

          </View>
          </View>
         </SafeAreaView>
     )
 }
 export default HomePage

 const styles=StyleSheet.create({
    inputContainer:{
        height:45,
        marginLeft:35,
        width:"80%",
        backgroundColor:"#fff",
   
        borderRadius:10,
        position:"absolute",
        top:30,
        flexDirection:"row",
        paddingHorizontal:20,
        alignItems:"center",
        
      }
 })