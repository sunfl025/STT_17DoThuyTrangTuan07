import { View, Text, Button, FlatList, Image, Pressable } from 'react-native'
import React, { useState } from 'react'

const Screen_02 = ({navigation}) => {
    
    const array = [
        {
            id:"1",
            src:require('../assets/xedap4.png'),
            name:"Pinarello",
            price:"1800",
            type:"MounTain"
        },
        {
            id:"2",
            src:require('../assets/xedap1.png'),
            name:"Pina Mountai",
            price:"1700",
            type:"MounTain"
        },
        {
            id:"3",
            src:require('../assets/xedap2.png'),
            name:"Pina Bike",
            price:"1500",
            type:"RoadBike"
        },
        {
            id:"4",
            src:require('../assets/xedap3.png'),
            name:"Pinarello",
            price:"1900",
            type:"MounTain"
        },
        {
            id:"5",
            src:require('../assets/xedap4.png'),
            name:"Pinarello",
            price:"2700",
            type:"RoadBike"
        },
        {
            id:"6",
            src:require('../assets/xedap1.png'),
            name:"Pinarello",
            price:"1350",
            type:"RoadBike"
        },
        
    ]
const [state,setState] = useState(array)
const [isClick,setIsClick] = useState("All")

const handleClick = () => {
        setIsClick(true)
}



  return (
    <View style={{flex:1,margin:"15px"}}>
        <View style={{marginTop:"20px"}}>
                <Text style={{fontSize:"25px",fontFamily:"Unbutu",fontWeight:700,color:"#E94141"}}>The world’s Best Bike</Text>
        </View>

        {/* {console.log(isClick)} */}
        <View style={{flexDirection:"row",marginTop:"30px",width:"350px",justifyContent:"space-around"}}>
            <Pressable style={{width:"99px",height:"32px",borderWidth:1,alignItems:"center",justifyContent:"center",borderColor:"#E9414187"}}
            
            onPress={() => {
                
                setState(array),setIsClick("All")
            }}>
                {isClick== "All" ? <Text style={{fontSize:"20px",fontFamily:"Voltaire",fontWeight:400,color:"#E94141"}}>All</Text> 
                : <Text style={{fontSize:"20px",fontFamily:"Voltaire",fontWeight:400,color:"#BEB6B6"}}>All</Text>  }
                
                
            </Pressable>
            <Pressable style={{width:"99px",height:"32px",borderWidth:1,alignItems:"center",justifyContent:"center",borderColor:"#E9414187"}}
            onPress={()=> {
               setIsClick("RoadBike")
                var newArr = array.filter((item) => {
                    return item.type == "RoadBike"
                })
                setState([...newArr])
            }}>
                {isClick=="RoadBike" ? <Text style={{fontSize:"20px",fontFamily:"Voltaire",fontWeight:400,color:"#E94141"}}>RoadBike</Text> 
                : <Text style={{fontSize:"20px",fontFamily:"Voltaire",fontWeight:400,color:"#BEB6B6"}}>RoadBike</Text>  }
            </Pressable>
            <Pressable style={{width:"99px",height:"32px",borderWidth:1,alignItems:"center",justifyContent:"center",borderColor:"#E9414187"}}
             onPress={() => {
                setIsClick("MounTain")
               
                var newArr = array.filter((item) => {
                    return item.type == "MounTain"
                })
                setState([...newArr])
            }}>
                {isClick=="MounTain" ? <Text style={{fontSize:"20px",fontFamily:"Voltaire",fontWeight:400,color:"#E94141"}}>MounTain</Text> 
                : <Text style={{fontSize:"20px",fontFamily:"Voltaire",fontWeight:400,color:"#BEB6B6"}}>MounTain</Text>  }
            </Pressable>
            
        </View>
     
        <View style={{marginTop:"20px",alignItems:"center",justifyContent:"center"}}>
            <FlatList numColumns={2}  data={state} renderItem={({item})=>{
                return (
                            // console.log(item.source)
                            <Pressable style={{width:"167px",height:"200px",justifyContent:"center",alignItems:"center",borderRadius:"10px",backgroundColor:"#F7BA8326",margin:"10px"}}
                            onPress={()=>  {
                                navigation.navigate('Screen_03',item.src)
                               
                            }}>

                                    
                                        <Pressable style={{position:"absolute",left:"10px",top:"10px"}}>
                                            {item.id == "1" ? <Image source={require('../assets/Vector.png')} style={{width:"17.38px",height:"14.99px"}}></Image> 
                                            : <Image source={require('../assets/Vector3.png')} style={{width:"17.38px",height:"14.99px"}}></Image>}
                                            
                                        </Pressable>
                                

                                       
                                    
                                   <Image source={item.src} style={{width:"108px",height:"124px"}} resizeMode='contain'>
                                      
                                    </Image>
                                    <Text style={{fontFamily:"Voltaire",fontWeight:400,fontSize:"20px", color:"#00000099"}}>{item.name}</Text>
                                    <View style={{width:"52px",height:"25px",flexDirection:"row"}}>
                                        <Image source={require("../assets/$.png")} style={{width:"9px",height:"25px"}} resizeMode='contain'></Image>
                                        <Text style={{fontFamily:"Voltaire",fontWeight:400,fontSize:"25px"}}>{item.price}</Text>

                                    </View>
                            </Pressable>
                )
                
            }}>

            </FlatList>
        </View>
     
    </View>
  )
}

export default Screen_02

