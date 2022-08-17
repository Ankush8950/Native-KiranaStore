import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity,FlatList,Image } from 'react-native'

const ViewCart = () => {
    const viewData = [
        {
            img: '',
            productName: 'Carrot (1 Kg)',
            price: "₹72",
            button: 'ADD'

        }
    ]
  return (
    <View style={styles.viewpage}>
        <View style={styles.topview}>
            <View style={styles.viewleftitem}>
                <Text style={styles.pricebtn}>₹300</Text>
                <Text style={styles.pricebtns}>|</Text>
                <Text style={styles.pricebtn}>2 items</Text>
            </View>
            <View style={styles.viewbtn}>
                <TouchableOpacity><Text style={styles.pricebtn}>View cart </Text></TouchableOpacity>
            </View>
        </View>
        <FlatList
                data={viewData} renderItem={(element)=>{
                    return (
                        <View style={styles.card}>
                        <View style={styles.cardview}>
                        <Image source={`uri: element.item.img`} style={styles.productimg} />
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
    viewpage:{
        width: 'auto',
        height: 'auto',
    },
    topview:{
        width: 'auto',
        height: 50,
        backgroundColor: '#6A5BFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    viewleftitem:{
        flexDirection: 'row',

    },
    pricebtn:{
        color: '#FFFFFF',
        fontSize: 14,
    },
    pricebtns:{
        paddingHorizontal: 17,
        color:"#FFFFFF",
        fontWeight: '400',
        fontSize: 14,
    },  
    card: {
        paddingVertical: 7,
        width: 'auto',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingHorizontal: 20,
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
export default ViewCart