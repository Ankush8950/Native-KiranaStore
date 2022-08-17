import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {
    Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


const HeaderItem = () => {

    let [fontsLoad, error] = useFonts({
        Montserrat_700Bold,
    })

    if (!fontsLoad) {
        return <AppLoading />
    }
    return (
        <View style={styles.heading}>
            <View style={styles.headingIcon}>
                <Text>Hey</Text>
                <Text>Hey</Text>
            </View>
            <View style={styles.container}>
                <Image style={styles.storeimg} source={require('../assets/store.png')} />
                <View style={styles.contdata}>
                    <Text style={styles.title} >Chamundeshwari Kirana Store</Text>
                    <View style={styles.categoryBtn}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.cateItem}>Groceries</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.cateItem}>Fruits</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.cateItem}>Fruits and Vegetables</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    heading: {
        marginTop: 24,
        width: "auto",
        height: "auto",
        backgroundColor: "#E7E5FF",
    },
    headingIcon: {
        padding: 20,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    container: {
        paddingLeft: 20,
        paddingBottom: 23,
        paddingRight: 14,
        paddingTop: 8,
        width: "auto",
        height: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'red',
        overflow: 'hidden'
    },
    storeimg: {
        width: 100,
        height: 126,
        backgroundColor: 'white'
    },
    contdata: {
        width: 'auto',
        height: 'auto',
        padding: 14,
        flexDirection: 'column',
        // overflow: 'hidden'
    },
    title: {
        width: 215,
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Montserrat_700Bold',
        lineHeight: 20,
        flexWrap: 'wrap'
    },
    categoryBtn: {
        width: 'auto',
        height: 'auto',
        flexDirection: 'row',
    },
    button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#9E0059',
        margin: 5,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
    },
    cateItem: {
        color: "#9E0059",
        letterSpacing: 0.001,
        fontSize: 10,
        fontWeight: '500',
        fontFamily: 'Montserrat_700Bold'
    }

})

export default HeaderItem