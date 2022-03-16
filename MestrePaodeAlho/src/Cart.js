import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, AsyncStorage, StyleSheet, ScrollView, Dimensions } from 'react-native';
var { width } = Dimensions.get("window")
// import icons
import Icon from 'react-native-vector-icons/Ionicons';

export default class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
          dataCart:[],
        };
     }

     componentDidMount()
     {
       AsyncStorage.getItem('cart').then((cart)=>{
         if (cart !== null) {
           // We have data!!
           const cartfood = JSON.parse(cart)
           this.setState({dataCart:cartfood})
         }
       })
       .catch((err)=>{
         alert(err)
       })
     }

     render() {
      return (
        <View style={{flex:1,alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
           <View style={{height:20}} />
           <Text style={{fontSize:32,fontWeight:"bold",color:"white"}}>Carrinho</Text>
           <View style={{height:10}} />
  
           <View style={{flex:1}}>
  
             <ScrollView>
  
               {
                 this.state.dataCart.map((item,i)=>{
                   return(
                     <View style={{width:width-20,margin:10,backgroundColor:'white', flexDirection:'row', borderBottomWidth:2, borderColor:"#cccccc", paddingBottom:10}}>
                       <Image resizeMode={"stretch"} style={{width:100, height:100, borderColor:'black', borderWidth:2, padding: 30, alignContent: 'center'}} source={item.food.image} />
                       <View style={{flex:1, backgroundColor:'white', padding:10, justifyContent:"space-between"}}>
                         <View>
                           <Text style={{fontWeight:"bold", fontSize:20}}>{item.food.name}</Text>
                           <Text>{item.food.descricao}</Text>
                         </View>
                         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                           <Text style={{fontWeight:'bold',color:"red",fontSize:20}}>R$ {item.price*item.quantity}</Text>
                           <View style={{flexDirection:'row', alignItems:'center'}}>
                             <TouchableOpacity onPress={()=>this.onChangeQual(i,false)}>
                               <Icon name="ios-remove-circle" size={35} color={"red"} />
                             </TouchableOpacity>
                             <Text style={{paddingHorizontal:8, fontWeight:'bold', fontSize:18}}>{item.quantity}</Text>
                             <TouchableOpacity onPress={()=>this.onChangeQual(i,true)}>
                               <Icon name="ios-add-circle" size={35} color={"red"} />
                             </TouchableOpacity>
                           </View>
                         </View>
                       </View>
                     </View>
                   )
                 })
               }
  
               <View style={{height:20}} />

               <Text style={{textAlign:'center', fontSize:28, fontWeight:'bold', color:'white'}}>Total do pedido: R$ {this.onLoadTotal()}</Text>

               <View style={{height:10}} />
  
               <TouchableOpacity style={{
                   backgroundColor:"red",
                   width:width-40,
                   alignItems:'center',
                   padding:10,
                   borderRadius:5,
                   margin:20
                 }}>
                 <Text style={{
                     fontSize:24,
                     fontWeight:"bold",
                     color:'white',
                   }}>
                   CONCLUIR
                 </Text>
               </TouchableOpacity>
  
               <View style={{height:20}} />
             </ScrollView>
  
           </View>
  
        </View>
      );
    }

    onLoadTotal() {
      var total = 0
      const cart = this.state.dataCart

      for (var i = 0; i < cart.length; i++) {
        total = total + (cart[i].price*cart[i].quantity)
      }
      return total
    }

    onChangeQual(i,type)
    {
      const dataCar = this.state.dataCart
      let cantd = dataCar[i].quantity;
  
      if (type) {
       cantd = cantd + 1
       dataCar[i].quantity = cantd
       this.setState({dataCart:dataCar})
      }
      else if (type==false&&cantd>=2){
       cantd = cantd - 1
       dataCar[i].quantity = cantd
       this.setState({dataCart:dataCar})
      }
      else if (type==false&&cantd==1){
       dataCar.splice(i,1)
       this.setState({dataCart:dataCar})
      } 
    }
}