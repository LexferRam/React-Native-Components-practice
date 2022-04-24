import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { menuItems } from '../data/menuItems';
import { MenuItem } from '../interfaces/interfaces';
import { styles } from '../Theme/appTheme';

export const HomeScreen = () => {



    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>

            <FlatList
                data={menuItems}//data que se quiere iterar
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}//fn para renderizar cada uno de los elementos
                keyExtractor={(item) => item.name}// genera un key unico en cada uno de los elementos
                ListHeaderComponent={<HeaderTitle title="Opciones del menu" />}
                ItemSeparatorComponent={() => <ItemSeparator />}
            />
        </View>
    )
}
