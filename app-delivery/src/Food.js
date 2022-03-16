import React, { Component } from 'react';
import { Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons';

var {height, width} = Dimensions.get('window');

const categorias = [
  {
    id: 1,
    name: "Sanduiche",
    color: "fbc831",
    image: require("../image/sanduiche.jpeg"),
  },
  {
    id: 2,
    name: "Hamburger",
    color: "fbc831",
    image: require("../image/hamburguer.jpeg"),
  },
  {
    id: 3,
    name: "Churrasco",
    color: "fbc831",
    image: require("../image/churrasco.jpg"),
  },
  {
    id: 4,
    name: "Bebidas",
    color: "fbc831",
    image: require("../image/bebida.jpg"),
  },
]

const comidas = [
  {
    categorie: 1,
    name: "Frango",
    price: 22,
    descricao: "Pão de alho com recheio de frango",
    image: require("../image/frango.jpeg"),
  },
  {
    categorie: 2,
    name: "Coracao",
    price: 28,
    descricao: "Pão de alho com recheio de coração",
    image: require("../image/coracao.jpeg"),
  },
  {
    categorie: 3,
    name: "Picanha",
    price: 30,
    descricao: "Pão de alho com recheio de picanha",
    image: require("../image/picanha.jpeg"),
  },
  {
    categorie: 4,
    name: "Misto",
    price: 30,
    descricao: "Pão de alho com recheio de misto",
    image: require("../image/misto.jpeg"),
  },
]


 class Food extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      dataBanner : [],
      dataCategories:[],
      dataFood: [],
      selectCatg:0
    }
  }


  render() {
    return (
      <ScrollView>
        <View style={{flex:1, backgroundColor:"black" }}>
          <View style={{width: width, alignItems:'center'}} >
              <Image style={{height:60,width:width/2,margin:10, marginTop:30 }} resizeMode="contain" source={require("../image/foodapp.png")}  />
              <Swiper style={{height:width/2}}  showsButtons={false} autoplay={true} autoplayTimeout={5}>
                
                <View>
                  <Image style={styles.imageBanner} resizeMode="contain" source={require("../image/image1.jpeg")}/>
                </View>

                <View>
                  <Image style={styles.imageBanner} resizeMode="contain" source={require("../image/image2.jpeg")}/>
                </View>

                <View>
                  <Image style={styles.imageBanner} resizeMode="contain" source={require("../image/image3.jpeg")}/>
                </View>

              </Swiper>
              <View style={{height:20}} />
          </View>

          <View style={{width:width, borderRadius:20, paddingVertical:20, backgroundColor:'black', borderColor:'red', borderWidth:1}}>
            
            <Text style={styles.titleCatg}>Categorias</Text>
            
            <FlatList
              horizontal={true}
              data={categorias}
              renderItem={({ item }) => this._renderItem(item)}
              keyExtractor = { (selectCatg,index) => index.toString() }
            />

            <FlatList
              //horizontal={true}
              data={comidas}
              numColumns={2}
              renderItem={({ item }) => this._renderItemFood(item)}
              keyExtractor = { (item,index) => index.toString() }
            />

            <View style={{height:20}} />
          </View>

        </View>
      </ScrollView>
    );
  };

  _renderItem(item){
    return(
      <TouchableOpacity
      onPress={()=>this.setState({selectCatg:item.id})} 
      style={{marginLeft: 3.5, padding: 4, flexDirection: "column"}}>
        <Image
          style={{width:90, height:90, borderColor:'red', borderWidth:2, borderRadius:100}}
          resizeMode="cover"
          source={item.image} />
        <Text style={{fontWeight:'bold',fontSize:15, textAlign:'center', color:'white'}}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  _renderItemFood(item){
    let catg = this.state.selectCatg
    if(catg==0||catg==item.categorie) 
    {
      return(
        <TouchableOpacity style={styles.divFood}>
          <Image
            style={styles.imageFood}
            resizeMode="center"
            source={item.image} />
            <View style={{height:((width/2)-20)-90, backgroundColor:'transparent', width:((width/2)-20)-10}} />
            <Text style={{fontWeight:'bold',fontSize:22,textAlign:'center'}}>
              {item.name}
            </Text>
            <Text style={{textAlign:'center'}}>{item.descricao}</Text>
            <Text style={{fontSize:20,color:"green"}}>R$ {item.price}</Text>

            <TouchableOpacity
            onPress={()=>this.onClickAddCart(item)}
            style={{
              width:(width/2)-40,
              backgroundColor:'#33c37d',
              flexDirection:'row',
              alignItems:'center',
              justifyContent:"center",
              borderRadius:5,
              padding:4
            }}>
            <Text style={{fontSize:18, color:"white", fontWeight:"bold"}}>Add Cart</Text>
            <View style={{width:10}} />
            <Icon name="ios-add-circle" size={30} color={"white"} />
          </TouchableOpacity>

          </TouchableOpacity>
        )
      }
  }

onClickAddCart(data){

    const itemcart = {
      food: data,
      quantity:  1,
      price: data.price
    }
 
    AsyncStorage.getItem('cart').then((datacart)=>{
        if (datacart !== null) {
          // We have data!!
          const cart = JSON.parse(datacart)
          cart.push(itemcart)
          AsyncStorage.setItem('cart',JSON.stringify(cart));
        }
        else{
          const cart  = []
          cart.push(itemcart)
          AsyncStorage.setItem('cart',JSON.stringify(cart));
        }
        alert("Add Cart")
      })
      .catch((err)=>{
        alert(err)
      })
    }
}

  const styles = StyleSheet.create({
    imageBanner: {
      height:width/2,
      width:width-40,
      marginHorizontal:20,
      borderWidth:3,
      borderColor:'red',
    },
    divCategorie:{
      backgroundColor:'black',
      margin:5, 
      alignItems:'center',
      borderRadius:10,
      padding:10,
    },
    titleCatg:{
      fontSize:30,
      fontWeight:'bold',
      textAlign:'center',
      marginBottom:10,
      color:'white'
    },
    imageFood:{
      width:((width/2)-20)-10,
      height:((width/2)-20)-30,
      backgroundColor:'transparent',
      marginBottom: -90,
      borderColor:'black', 
      borderWidth:2,
    },
    divFood:{
      width:(width/2)-20,
      padding:10,
      borderRadius:10,
      marginTop:30,
      marginBottom:5,
      marginLeft:10,
      alignItems:'center',
      elevation:10,
      shadowOpacity:0.3,
      shadowRadius:50,
      backgroundColor:'white',
      borderColor:'black', 
      borderWidth:2
    }
  }
);

export default Food;