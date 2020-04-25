import React, { useState, useEffect, Fragment } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps'
import {StyleSheet, Image, View, Text , TextInput, TouchableOpacity } from 'react-native'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons'

function Main( { navigation }){

    const [currentRegion, setCurrentRegion ] = useState(null);
    
    useEffect(() => {
        async function loadInitialPosition(){
            const { granted } = await requestPermissionsAsync();

            if(granted){
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.10,
                    longitudeDelta: 0.05,
                });
            }
        }
        // inicializa a função
        loadInitialPosition();
    }, []);

    

    if(!currentRegion){
        return null;
    }

    return (
        <Fragment>
        <MapView initialRegion={currentRegion} style={styles.map}>
            <Marker coordinate={{ latitude: -23.68219, longitude: -46.6741995 }}>
                <Image source={{ uri: 'https://avatars1.githubusercontent.com/u/5739362?s=460&u=5028c2c4a775cceb954d1b298d578edc59ec5b02&v=4' }}  style={styles.avatar}/>
                <Callout onPress={() => {
                    navigation.navigate('Profile', { github_name: 'gisiona'})
                }}>
                    <View style={styles.callout}>
                        <Text  style={styles.devName}>Gisiona Costa</Text>
                        <Text  style={styles.devBio}>MCP Microsoft Certified Professional | Developer | Tech Inovation | Software Engineer at Itaú Unibanco</Text>
                        <Text  style={styles.devTechs}>ReactJS, React Native, NodeJS, Java, C#, Asp Net Core</Text>
                    </View>
                </Callout>
            </Marker>

            <Marker coordinate={{ latitude: -23.6710315, longitude: -46.6797396 }}>
                <Image source={{ uri: 'https://avatars1.githubusercontent.com/u/5739362?s=460&u=5028c2c4a775cceb954d1b298d578edc59ec5b02&v=4' }}  style={styles.avatar}/>
                <Callout onPress={() => {
                    navigation.navigate('Profile', { github_name: 'gisiona'})
                }}>
                    <View style={styles.callout}>
                        <Text  style={styles.devName}>Gisiona Costa</Text>
                        <Text  style={styles.devBio}>MCP Microsoft Certified Professional | Developer | Tech Inovation | Software Engineer at Itaú Unibanco</Text>
                        <Text  style={styles.devTechs}>ReactJS, React Native, NodeJS, Java, C#, Asp Net Core</Text>
                    </View>
                </Callout>
            </Marker>

            <Marker coordinate={{ latitude: -23.6718831, longitude: -46.6801546 }}>
                <Image source={{ uri: 'https://www.google.com/maps/uv?hl=pt-BR&pb=!1s0x94ce50048a88f707%3A0x6df97fdae77b999!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipM6okCwlp5OVo-pM7QiZz2fapmr_3KSO0HRJiOg%3Dw355-h200-k-no!5srehem%20lanchonete%20interlagos%20-%20Pesquisa%20Google!15sCAQ&imagekey=!1e10!2sAF1QipM6okCwlp5OVo-pM7QiZz2fapmr_3KSO0HRJiOg&sa=X&ved=2ahUKEwjsgdjFvoLpAhVqHLkGHfBmDMoQoiowCnoECBwQBg#' }}  style={styles.avatar}/>
                <Callout onPress={() => {
                    navigation.navigate('Profile', { github_name: 'gisiona'})
                }}>
                    <View style={styles.callout}>
                        <Text  style={styles.devName}>Lanchonete Rehem</Text>
                        <Text  style={styles.devBio}>MCP Microsoft Certified Professional | Developer | Tech Inovation | Software Engineer at Itaú Unibanco</Text>
                        <Text  style={styles.devTechs}>ReactJS, React Native, NodeJS, Java, C#, Asp Net Core</Text>
                    </View>
                </Callout>
            </Marker>

            <Marker coordinate={{ latitude: -23.6402443, longitude: -46.6760085 }}>
                <Image source={{ uri: 'https://www.google.com/maps/uv?hl=pt-BR&pb=!1s0x94ce4fdfe45cf3d7%3A0xedcfb15ed6e0a998!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPJbFofkG01qnimwtwD1Vx_Wg6WcMq-FvTfQ-MF%3Dw276-h200-k-no!5spre%C3%A7olandia%20interlagos%20-%20Pesquisa%20Google!15sCAQ&imagekey=!1e10!2sAF1QipPJbFofkG01qnimwtwD1Vx_Wg6WcMq-FvTfQ-MF&sa=X&ved=2ahUKEwiogdKAvYLpAhVGILkGHQ_mABcQoiowDHoECBgQBg#' }}  style={styles.avatar}/>
                <Callout onPress={() => {
                    navigation.navigate('Profile', { github_name: 'gisiona'})
                }}>
                    <View style={styles.callout}>
                        <Text  style={styles.devName}>Gisiona Costa</Text>
                        <Text  style={styles.devBio}>MCP Microsoft Certified Professional | Developer | Tech Inovation | Software Engineer at Itaú Unibanco</Text>
                        <Text  style={styles.devTechs}>ReactJS, React Native, NodeJS, Java, C#, Asp Net Core</Text>
                    </View>
                </Callout>
            </Marker>


        </MapView>

        <View style={styles.searchForm}>
            <TextInput style={styles.searchInput}
                placeholder= "Buscar devs por tecno..."
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false} />

            <TouchableOpacity onPress={() => {} } style={styles.loadButton} >
                <MaterialIcons name="my-location" size={ 24 } color="#fff" />
            </TouchableOpacity>
        </View>
        
        </Fragment>
    )
   
};


const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    avatar:{
        width:54,
        height:54,
        borderRadius: 30,
        borderWidth: 4,
        borderColor: '#fff'
    },
    callout:{
        width:260,        
    },
    devName:{
        fontWeight: 'bold',
        fontSize: 16
    },
    devBio:{
        color: '#666',
        marginTop: 5
    },
    devTechs:{
        marginTop: 5
    },
    searchForm:{
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row'
    },
    searchInput:{
        flex: 1,
        height: 50,
        backgroundColor: '#fff',
        color: '#333',
        borderRadius: 12,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        textShadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 2
    
    },
    loadButton:{
        width: 50,
        height: 50,
        backgroundColor: '#ffc107',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    }
});

export default Main;

