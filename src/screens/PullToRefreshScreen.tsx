import React, { useState } from 'react'
import { View, ScrollView, RefreshControl } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../Theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const PullToRefreshScreen = () => {

    const {top} = useSafeAreaInsets()
    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState<string>()

    const onRefresh = () => {
        setRefreshing(true)


        setTimeout(() => {
            console.log('Terminamos');
            setRefreshing(false)
            setData("Hola Mundo")
        }, 1500)
    }

    return (
        <ScrollView
            style={{
                marginTop:refreshing ? top:0
            }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    // progressViewOffset={200}
                    progressBackgroundColor="#5856D6"
                    colors={['red']}
                    // style={{backgroundColor:'#5856D6'}}
                    // tintColor="white"
                    // title="Refreshing"
                    // titleColor="white"
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title='Pull to Refresh' />

                {data && <HeaderTitle title={data} />}
            </View>
        </ScrollView>
    )
}
