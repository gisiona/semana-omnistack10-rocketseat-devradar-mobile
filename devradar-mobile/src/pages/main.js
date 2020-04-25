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
        </MapView>

        <View style={styles.searchForm}>
            <TextInput style={styles.searchInput}
                placeholder= "Buscar devs por tecno..."
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false} />

            <TouchableOpacity onPress={() => {} } style={styles.loadButton} >
                <MaterialIcons name="my-location" size={ 24 } color="#ff" />
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
        backgroundColor: '#8e4dff',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    }
});

export default Main;

