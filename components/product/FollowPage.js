import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const FollowPage = () => {
    return (
        <View style={styles.followBtn}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.followbutton} >+</Text>
                <Text style={styles.followbutton}>Follow</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    followBtn: {
        marginTop: 6,
        width: 'auto',
        height: 70,
        backgroundColor: '#E7E5FF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        flexDirection: 'row',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF5B5B',
        paddingHorizontal: 32.25,
        paddingVertical: 6,
    },
    followbutton: {
        fontSize: 13,
        marginLeft: 3,
        color: "#FFFFFF"
    }
})

export default FollowPage