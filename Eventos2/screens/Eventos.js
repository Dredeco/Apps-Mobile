import React,{useEffect,useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, ScrollView, Image, Pressable } from 'react-native';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {db} from '../firebase.js';
import { StatusBar } from 'expo-status-bar';
import firebase from 'firebase/compat/app';

console.disableYellowBox = true;

function Eventos({navigation}) {

  const [noticias,setarNoticias] = useState([]);

  useEffect(()=>{
      db.collection('noticias').orderBy('data', 'asc').onSnapshot(snapshot=>{
          setarNoticias(snapshot.docs.map(function(doc){
              return {info:doc.data()}
          }));
      })
  },[])
  
  return (
    <View style={styles.container}>
      <StatusBar hidden />
    <View style={styles.header}> 
      <ScrollView horizontal contentContainerStyle={{width:'200%',height:'100%',backgroundColor:'#489f4e'}} style={{flex:1}}>
          {
            noticias.map((val,index)=>{
                if(index < 2){
                    return (
                      <ImageBackground style={styles.image} source={{ uri: val.info.imagem }} >
                      <Pressable onPress={()=>navigation.navigate("EventosInfo",{
                        titulo: val.info.titulo,
                        conteudo: val.info.conteudo,
                        imagem: val.info.imagem
                      })} style={{
        
                          width:'100%',
                          height:'100%',
                          backgroundColor:'rgba(0,0,0,0.4)',
                          justifyContent:'flex-end'
        
                      }}>
                      <Text style={{fontSize:27,color:'white', textAlign:'center', paddingBottom:20 }}>{val.info.titulo}</Text>
                      </Pressable>
                    </ImageBackground>
                    )
                }
            })
  
            }
                
            </ScrollView>
    </View>
    <View style={styles.footer}>
    <Text style={styles.title}>Mais Eventos</Text>
    <ScrollView contentContainerStyle={{padding:20}} style={{flex:1}}>


          {
            noticias.map((val,index)=>{
                if(index >=0){
                    return (
                      <View style={styles.footer}>
                      <Pressable style={{flexDirection:'row'}} onPress={()=>navigation.navigate("EventosInfo",{
                        titulo: val.info.titulo,
                        conteudo: val.info.conteudo,
                        imagem: val.info.imagem
                      })}>
                      <Image source={{ uri: val.info.imagem}} style={{borderWidth:2, borderColor:'#489f4e', width:100,height:100}} />
                      <Text style={{borderBottomWidth:2, borderColor:'#489f4e', alignItems:'center', padding:10, width:'75%', height:100, fontWeight:'bold'}}>
                      {val.info.titulo}
                      {"\n"} {"\n"}
                      {val.info.conteudo}</Text>
                      </Pressable>
                  </View>
                )}
            })
          }  
              
                  
          
        </ScrollView>
</View>
</View>
    );
  }

const {height} = Dimensions.get("screen");
const height_logo = height * 0.40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00a046',
    height:'50%',
  },
  header: {
      flex: 1,
      backgroundColor: '#00a046',
      justifyContent: 'center',
      alignItems: 'center',
      height:'50%',
  },
  footer: {
      flex:1,
      backgroundColor: '#fff',
      paddingVertical: 5,
      justifyContent:'center',
      textAlign:'center',
      height:'100%',
      width:'100%'
  },
  logo: {
      width: height_logo,
      height: height_logo,
  },
  title: {
      color: 'white',
      padding:9,
      fontSize: 20,
      backgroundColor:'#00a046',
      fontWeight: 'bold',
      textAlign:'center',
  },
  text: {
      color: 'grey',
      marginTop: 30,
  },
  image: {
    width:'100%',
    height:'100%',
    flex:1,
  },


 
});
export default Eventos;