import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../Theme/appTheme'

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Modal Screen" />

            <Button
                title="Abrir modal"
                onPress={() => setIsVisible(true)}
            />

            <Modal
                animationType="fade"
                visible={isVisible}
                transparent={true}//si esta en false el modal cubre toda la pantallla

            >
                <View style={{
                    flex: 1,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor: 'rgba(0,0,0,0.3)'
                }}>

                    {/* Contenido del modal */}
                    <View style={{
                        backgroundColor:'white',
                        width:200,
                        height:200,
                        borderStartColor:'color',
                        justifyContent:'center',
                        alignItems:'center',
                        shadowOffset:{
                            width:0,
                            height:10
                        },
                        shadowOpacity:0.25,
                        elevation:10,
                        borderRadius:10
                    }}>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>Modal Title</Text>
                        <Text style={{fontSize:16, fontWeight:'300', marginBottom:20}}>Cuerpo del modal</Text>
                        <Button 
                            title="Cerrar"
                            onPress={() => setIsVisible(false)}
                        />
                    </View>

                </View>
            </Modal>
        </View>
    )
}
