import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

const ShippingAddress = () => {
  return (
    <View style={styles.shippage}>
        <View style={styles.shipngadd}>
            <View style={styles.ahippingaddress}>
            <Text style={styles.title}>Shipping address</Text>
            <Text style={styles.shipadd}>#43, 3rd cross, Sahakar Nagar road, Sajat..</Text>
            </View>
            <TouchableOpacity style={styles.changebtn}>
                <Text style={styles.btntext}>Change</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.checkoutpage}>
            <View style={styles.icons}>
                <Text style={styles.icon}>hey</Text>
                <Text style={styles.text}>Cash On Delivery</Text>    
            </View>
            <TouchableOpacity style={styles.checkoutbtn}>
                <Text style={styles.checkbtn}>CHECKOUT </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    shipngadd:{
        width: 'auto',
        height: 63,
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#6A5BFF'
    },
    title:{
        fontSize: 14,
        fontWeight:'600',
        color: '#FFFFFF',
        lineHeight: 17,
    },
    shipadd:{
        fontSize: 11,
        fontWeight: '500',
        marginTop: 2,
        color: '#FFFFFF',
        lineHeight: 13,
    },
    changebtn:{
        width: 71,
        height: 26,
        backgroundColor: '#FF5B5B',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btntext:{
        color: '#FFFFFF'
    },
    checkoutpage:{
        width: 'auto',
        height: 54,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#007E05',
    },
    icons:{
        width: 120,
        height: 54,
        backgroundColor: '#FFFFFF',
        paddingLeft: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
    // icon:{

    // },
    text:{
        fontSize: 10,
        fontWeight: '700',
    },
    checkbtn:{
        fontSize: 15,
        fontWeight: '600',
        color: '#FFFFFF',
        marginRight: 20,
    }
})
export default ShippingAddress