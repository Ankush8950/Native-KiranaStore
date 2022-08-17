import React from 'react'
import { View, Text, FlatList, StyleSheet, Image,TouchableOpacity } from 'react-native';
import Carrot from "../../assets/Rectangle 382.png"
import Organic from "../../assets/Rectangle 383.png"
import Apple from "../../assets/Rectangle 384.png"

const ProductItem = () => {
    const product = [
        {
            img: Carrot,
            productName: 'Carrot (1 Kg)',
            price: "₹20/Kg",
            closePrice: '₹40/Kg',
            button: 'ADD'
        },
        {
            img: Organic,
            productName: 'Organic tattva - Organic Wheat flour (..',
            price: "₹200",
            button: 'OUT OF STOCK'
        },
        {
            img: Apple,
            productName: 'Apple (pack of 4)',
            price: "₹75/Kg",
            closePrice: '₹40/Kg',
            button: 'ADD'
        }
    ]
    return (
        <View style={styles.ProductItem}>
            <FlatList
                data={product} renderItem={(element)=>{
                    return (
                        <View style={styles.card}>
                        <View style={styles.cardview}>
                        <Image source={require('../../assets/store.png')} style={styles.productimg} />
                        <Text style={styles.productname}>{element.item.productName}</Text>
                        </View>
                        <View style={styles.rightdata}>
                        <View style={styles.priceall}>
                        <Text style={styles.price}>{element.item.price}</Text>
                        <Text style={styles.chengeprice}>{element.item.closePrice}</Text>
                        </View>
                        <TouchableOpacity style={styles.addbtn}><Text style={styles.addbtns}>ADD</Text></TouchableOpacity>
                        </View>
                    </View>
                    )
                        
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ProductItem: {
        width: 'auto',
        height: 'auto',
        // backgroundColor: 'red',
        marginTop: 31,
        paddingHorizontal: 20,
    },
    card: {
        width: 'auto',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    cardview:{
        width: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    productname:{
        marginLeft: 22,
        fontSize: 13,
        fontWeight: '500',
        width: 151,
        maxHeight:'auto',
        // backgroundColor: 'red',
    },
    productimg:{
        width: 80,
        height: 80,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#A9A9A9'
    },
    rightdata:{
        width: 'auto',
        flexDirection: 'column',
        alignItems:'flex-end',
        justifyContent: 'space-between',
        // backgroundColor: 'red'
    },
    price:{
        fontSize: 12,
        fontWeight: '600',
        color:'#6C6C6C'
    },
    chengeprice:{
        fontSize: 12,
        fontWeight: '600',
        color:'#6C6C6C'
    },
    addbtn:{
        paddingVertical: 6,
        paddingHorizontal: 22,
        backgroundColor:'#FF5B5B',
        borderRadius: 3,
    },
    addbtns:{
        color: '#FFFF',
        fontSize: 11,
        fontWeight: '600',
    }

})
export default ProductItem