import { View, Text,StyleSheet,FlatList,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import TotalDetailedBill from './TotalDetailedBill'

const CheckDelivery = () => {
    const productItem = [
        {
            productname: 'Carrot (1 Kg)',
            item:"888",
            price: '₹4000'
        },
        {
            productname: 'Capsicum (1/2 Kg)',
            item:"2",
            price: '₹40'
        },
        {
            productname: 'Rice flour (Safe h...',
            item:"2",
            price: '₹300'
        },
        {
            productname: 'Apples',
            item:"2",
            price: '₹500'
        },
    ]
  return (
    <View style={styles.storeItem}>
        <Text style={styles.arrowIcon}>Hey</Text>
        <Text style={styles.title}>Chamundeshwari Kirana Store</Text>
        <Text style={styles.item}>Cart items</Text>
        <FlatList 
        data={productItem} renderItem={(element)=>{
            return (
                <View style={styles.items}>
                <Text style={styles.prodname}>{element.item.productname}</Text>
                <View style={styles.button}>
                <TouchableOpacity style={styles.intbtn}><Text style={styles.btntext}>-</Text></TouchableOpacity>
                   <TextInput style={styles.input} value={element.item.item} />
                <TouchableOpacity style={styles.intbtn}><Text style={styles.btntext}>+</Text></TouchableOpacity>
                </View>
                <Text style={styles.price}>{element.item.price}</Text>
            </View>
            )
        }}
        />
        <View style={styles.line}></View>
        <View style={styles.delivery}>
                <Text style={styles.modTitle}>Choose Delivery mode</Text>
                <View style={styles.deliverybtn}>
                    <TouchableOpacity style={styles.goshopbtn}>
                        <Text style={styles.gotobtn}>Go to Shop</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.delivrybtn}>
                        <Text style={styles.gotobtns}>Delivery</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <TotalDetailedBill />
    </View>
  )
}

const styles = StyleSheet.create({
    storeItem:{

    },
    arrowIcon:{
        paddingLeft: 22,
        paddingTop: 21,
    },
    title:{
        paddingLeft: 22,
        marginTop: 18,
        fontSize: 19,
        fontWeight: '600',
    },
    item:{
        paddingLeft: 22,
        marginTop: 22,
        fontSize: 15,
        fontWeight: '600',
        fontStyle: 'normal',
        color: '#343434',
    },
    items:{
        paddingLeft: 22,
        paddingRight: 19,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    prodname:{
        width: 120,
        // backgroundColor:"#E7E5FF",
        fontSize:13,
        fontWeight: '500',
    },
    button:{
        width: 80,
        marginTop: 30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    intbtn:{
        width: 18.87,
        height: 19,
        borderRadius: 3,
        backgroundColor:'#FF5B5B',
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btntext:{
        fontSize:20,
    },
    input:{
        margin:2,
        width: 25.48,
        height: 19,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#BBBBBB',
        color: '#000000',
        textAlign: 'center',
    },
    price:{
        // marginRight: 19,
        fontSize: 13,
        fontWeight: '600',
        color: '#6C6C6C',
        alignItems: 'flex-end',
    },
    line:{
        width:321,
        borderWidth: 0.5,
        borderColor: '#D9D9D9',
        marginTop: 37,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent:'center'
    },
    delivery: {
        width: 'auto',
        height: 111,
        backgroundColor: '#E7E5FF',
        marginTop: 20,
        alignItems: 'center',
    },
    modTitle: {
        paddingVertical: 19,
        fontSize: 15,
        fontWeight: '600',
        lineHeight: 18,
        color: '#343434',
        letterSpacing: 0.001,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deliverybtn: {
        width: 360,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    goshopbtn: {
        width: 115.36,
        height: 34,
        borderRadius: 4,
        backgroundColor: '#6A5BFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    delivrybtn: {
        width: 115.36,
        height: 34,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#6A5BFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gotobtn: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '600',
    },
    gotobtns: {
        color:'#6A5BFF',
        fontSize: 13,
        fontWeight: '600',
    },
    
})

export default CheckDelivery