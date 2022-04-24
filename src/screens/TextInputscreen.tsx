import React, { useState } from 'react'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, Keyboard, Text } from 'react-native'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { CustomSwitch } from '../components/CustomSwitch'
import { HeaderTitle } from '../components/HeaderTitle'
import { useForm } from '../hooks/useform'
import { styles } from '../Theme/appTheme'

export const TextInputscreen = () => {

    const { form, onChange, isSubscribed } = useForm({
        name: "",
        email: "",
        phone: "",
        isSubscribed: false,
    })

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>
                {/* permite salir del teclado del tlf cuando se da tab afuera del textfield */}
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>
                        <HeaderTitle title="TextInput" />

                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder="Ingrese su nombre"
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText={(value) => onChange(value, 'name')}
                        />
                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder="Ingrese su email"
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType='email-address'
                            keyboardAppearance='dark'//solo IOS
                        />

                        <View style={{ flexDirection: 'row',justifyContent:'space-between', marginVertical:10 }}>
                            <Text>Suscribirme: </Text>
                            <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')} />

                        </View>

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <HeaderTitle title={JSON.stringify(form, null, 3)} />

                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder="Ingrese su telefono"
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType='phone-pad'
                        />

                        <View style={{ height: 100 }} />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
    }
});