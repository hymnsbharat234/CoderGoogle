import React,{useEffect} from "react"

import * as Google from 'expo-google-app-auth'
import { View,Text,StyleSheet,TouchableOpacity,Image } from "react-native"









 const ProfilePage =({navigation})=>{
  const signInAsync = async () => {
    console.log(" loggin in");
    try {
      const { type, user } = await Google.logInAsync({
    
        androidClientId: `520350559970-q9dokdd76hcqmh6rb3ph1brhd2bj28ro.apps.googleusercontent.com`,
      });

      if (type === "success") {
        // Then you can use the Google REST API
        console.log(" success, navigating to profile");
        navigation.navigate("HomePage", { user });
      }
    } catch (error) {
      console.log(" error with login", error);
    }
  };

  

  



   
     return(
         <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#e0e0e0"}}>
             <Image
             style={{height:90,width:130,borderRadius:5}}
             source={require("../../../assets/google.jpg")}
             />
             <Text style={{fontWeight:"600",marginTop:5}}>Please Login</Text>
             <View style={{marginTop:10}}>
                 <TouchableOpacity 
                onPress={()=>signInAsync()}
                 style={{width:160,backgroundColor:"#fff",borderRadius:5}}>
                     <Text style={{textAlign:"center",padding:5,fontWeight:"600",color:"#e64a19"}}>Google Sign In+</Text>
                 </TouchableOpacity>
             </View>
         </View>
     )
 }
 export default ProfilePage