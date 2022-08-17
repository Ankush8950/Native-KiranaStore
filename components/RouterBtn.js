import React ,{useState} from 'react'
import { View, Text ,StyleSheet,TouchableOpacity,TextInput} from 'react-native'
import ProductItem from './product/ProductItem';

const RouterBtn = () => {
    const [color,setColor] = useState(false);

    const onPress = () => {
        setColor(true)
    }
  return (
      <View style={styles.routermain}>
        <View style={styles.btnrouter}>
            <TouchableOpacity style={styles.routerBtn}
            onPress={onPress}
            >
                <Text style={styles.btncolor}>Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.routerBtns}>
                <Text style={styles.btncolors}>About</Text>
            </TouchableOpacity>
        </View>

    <View style={styles.textinput}>
        <TextInput style={styles.inputform}
            placeholder='Search for Products or Services'
        />
        </View>
    </View>
  ) 
}

const styles = StyleSheet.create({
    routermain:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnrouter:{
        marginTop: 6,
        width: 200,
        height: 37, 
        flexDirection: 'row',
        backgroundColor:'#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25.5,
        borderWidth: 1,
        borderColor: '#D4D1FF'

    },
    routerBtn:{
        width: 100,
        height: 37,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:25.5,
        backgroundColor:"#6A5BFF",
    },
    routerBtns:{
        width: 100,
        height: 37,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:25.5,
    },
    btncolor:{
        color: '#FFFFFF'
    },
    btncolors:{
        color: '#6A5BFF',
    },
    textinput:{
        marginTop: 21,
        width: 320,
        height: 49,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 9,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        shadowOpacity: 0.2,
        shadowColor:'#000000',
    }
})

export default RouterBtn