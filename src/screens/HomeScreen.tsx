import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { MenuItem } from '../interfaces/interfaces';
import { styles } from '../Theme/appTheme';

export const HomeScreen = () => {

    const {top} = useSafeAreaInsets()

    const renderListHeader = () => {
        return(
            <View style={{marginTop:top, marginBottom:20}}>
                <Text style={styles.title}>Opciones de menu</Text>
            </View>
        )
    }

    const itemSeparator = () => {
        return (
            <View
                style={{
                    borderBottomWidth:1,
                    opacity:0.4,
                    marginVertical:8
                }}
            />
        )
    }

    return (
        <View style={{flex:1, ...styles.globalMargin}}>

            <FlatList
                data={menuItems}//data que se quiere iterar
                renderItem={({item}) => <FlatListMenuItem menuItem={item}/>}//fn para renderizar cada uno de los elementos
                keyExtractor={(item) => item.name}// genera un key unico en cada uno de los elementos
                ListHeaderComponent={renderListHeader}
                ItemSeparatorComponent={itemSeparator}
            />
        </View>
    )
}
