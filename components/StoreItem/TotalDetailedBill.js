import { View, Text, StyleSheet, TouchableOpacity, FlatList, } from 'react-native'
import React from 'react'

const TotalDetailedBill = () => {
    const billdata = [
        {
            total: 'Sub Total',
            price: '₹4840'
        },
        {
            total: 'GST',
            price: '₹150'
        },
        {
            total: 'Grand Total',
            price: '₹5030'
        }
    ]
    return (
        <View style={styles.deliverypage}>
            <View style={styles.bill}>
                <Text>Detailed Bill</Text>
                <FlatList data={billdata} renderItem={(element) => {
                    return (
                        <View style={styles.totaldata} >
                            <Text style={styles.totalprice}>{element.item.total}</Text>
                            <Text style={styles.gst}>{element.item.price}</Text>
                        </View>
                    )
                }} />
           

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
    delivery: {
        width: 'auto',
        height: 111,
        backgroundColor: '#E7E5FF',
        marginTop: 20,
    },
    title: {
        paddingVertical: 19,
        paddingHorizontal: 20,
        fontSize: 15,
        fontWeight: '600',
        lineHeight: 18,
        color: '#343434',
        letterSpacing: 0.001
    },
    deliverybtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    goshopbtn: {
        width: 115.36,
        height: 34,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#6A5BFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    delivrybtn: {
        width: 115.36,
        height: 34,
        borderRadius: 4,
        backgroundColor: '#6A5BFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gotobtn: {
        color: '#6A5BFF',
        fontSize: 13,
        fontWeight: '600',
    },
    gotobtns: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '600',
    },
    bill: {
        marginTop: 28,
        paddingHorizontal: 20,
    },
    totaldata: {
        marginTop: 23,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    totalprice: {
        fontSize: 13,
        fontWeight: '400',
        color: '#343434',
        letterSpacing: 0.001,
    },
    gst: {
        fontSize: 13,
        fontWeight: '400',
        color: '#343434',
    },
    checkoutpage:{
        width: 'auto',
        height: 54,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#007E05',
        marginTop: 10
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

export default TotalDetailedBill