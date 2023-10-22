import { View, Text ,Image, Pressable} from 'react-native'
import React from 'react'

const Screen_03 = ({ route,navigation}) => {
    
    console.log(route.params)
    
   
  return (
    <View style={{flex:1}}>

        <View style={{alignItems:"center",marginTop:"30px",justifyContent:"center"}}>
            <View style={{width:"359px",height:"388px",backgroundColor:"#E941411A",alignItems:"center"}}>
                <Image source={route.params} style={{width:"297px",height:"340px",marginTop:"40px"}} resizeMode='contain'></Image>
            </View>
           
         </View>
        
        <Text style={{fontFamily:"Voltaire",fontSize:"35px",fontWeight:400,marginLeft:"15px",marginTop:"20px"}}>Pina Mountain</Text>

        <View style={{flexDirection:"row"}}>
            <Text style={{fontFamily:"Voltaire",fontSize:"25px",fontWeight:400,marginLeft:"15px",marginTop:"15px",color:"#00000096"}}>15% OFF I 350$</Text>
            <Text style={{fontFamily:"Voltaire",fontSize:"25px",fontWeight:400,marginLeft:"15px",marginTop:"15px",textDecorationLine:"line-through"}}>449$</Text>
        </View>
        <Text style={{fontFamily:"Voltaire",fontSize:"25px",fontWeight:400,marginLeft:"15px",marginTop:"20px"}}>Description</Text>
        <Text style={{fontFamily:"Voltaire",fontSize:"22px",fontWeight:400,marginLeft:"15px",marginTop:"20px",color:"#00000096"}}>It is a very important form of writing as  </Text>
        <Text style={{fontFamily:"Voltaire",fontSize:"22px",fontWeight:400,marginLeft:"15px",marginTop:"5px",color:"#00000096"}}>we write almost everything in</Text>
        <Text style={{fontFamily:"Voltaire",fontSize:"22px",fontWeight:400,marginLeft:"15px",marginTop:"5px",color:"#00000096"}}>paragraphs, be it an answer, essay, story,</Text>
        <Text style={{fontFamily:"Voltaire",fontSize:"22px",fontWeight:400,marginLeft:"15px",marginTop:"5px",color:"#00000096"}}>emails, etc.</Text>
       
       <View style={{marginTop:"30px",flexDirection:"row",marginLeft:"19px",justifyContent:"center",marginBottom:"50px"}}>
                <Image source={require('../assets/Vector@2x.png')} style={{width:"35px",height:"35px",marginTop:"10px"}} resizeMode='contain'></Image>
                <Pressable style={{backgroundColor:"#E94141",borderRadius:"30px",width:"269px",height:"54px",marginLeft:"30px",justifyContent:'center',alignItems:"center"}}
                onPress={() => navigation.navigate('Screen_02')}>
                    <Text style={{color:"#FFFAFA",fontFamily:"Voltaire",fontSize:"25px",fontWeight:400}}>Add to card</Text>
                </Pressable>
       </View>
      
    </View>
  )
}

export default Screen_03