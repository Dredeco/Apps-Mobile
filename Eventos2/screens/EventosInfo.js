import React from 'react';
import { View, Text,StyleSheet,ImageBackground, ScrollView } from 'react-native';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { StatusBar } from 'expo-status-bar';

console.disableYellowBox = true;

function EventosInfo ({ route, navigation }) {
  return (
    <View style={{flex:1}}>
      <StatusBar hidden />
    <ScrollView style={{ flex: 1 }}>
      <ImageBackground style={styles.imageConteudo} source={{ uri: route.params.imagem }} >
            <View style={{
              width:'100%',
              height:'100%',
              backgroundColor:'rgba(0,0,0,0.5)',
              justifyContent:'flex-end',
              padding:10
            }}>
              <Text style={{fontSize:27,color:'white'}}>{route.params.titulo}</Text>
            </View>          
         </ImageBackground>
         
         <View style={{flex:0.8}}>
         <Text style={{
          fontSize:15,
          padding:20
        }}>{route.params.conteudo}</Text>
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
imageConteudo: {
  resizeMode: 'cover',
  width:'100%',
  flex:0.5,
  height:200
}
})

export default EventosInfo;