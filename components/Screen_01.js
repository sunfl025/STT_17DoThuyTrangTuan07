import React from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";

const Screen_01 = ({navigation}) => {
  return (
    <View style={{flex:1}}>
       <View style={{alignItems:'center',marginTop:"30px"}}>
            <Text style={{fontSize:"26px",fontFamily:"VT323",fontWeight:400}}>A premium online store for </Text>
            <Text style={{fontSize:"26px",fontFamily:"VT323",fontWeight:400}}> sporter and their stylish choice </Text>
       </View>
      <View style={{alignItems:"center",marginTop:"30px"}}>
            <View style={{width:"359px",height:"388px",backgroundColor:"#E941411A",borderRadius:"50px",alignItems:"center"}}>
                <Image source={require('../assets/xedap.png')} style={{width:"292px",height:"270px",marginTop:"100px"}}></Image>
            </View>

      </View>
      <View style={{alignItems:"center",marginTop:"10px"}}>
            <Text style={{fontSize:"26px",fontFamily:"Unbutu",fontWeight:700}}>POWER BIKE </Text>
            <Text style={{fontSize:"26px",fontFamily:"Unbutu",fontWeight:700}}>SHOP</Text>
      </View>
      <View style={{alignItems:"center",marginTop:"30px"}}>
            <Pressable style={{width:"340px",height:"61px",backgroundColor:"#E94141",borderRadius:"30px",justifyContent:"center",alignItems:"center"}}
            onPress={()=> navigation.navigate('Screen_02')}>
                    <Text style={{color:"white",fontSize:"27px",fontFamily:"VT323",fontWeight:400}}>Get Started</Text>
            </Pressable>
      </View>
    </View>
  );
};

export default Screen_01;
// ,fontFamily:"VT323"