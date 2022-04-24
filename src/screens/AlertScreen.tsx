import React from 'react'
import { Alert, Button, View } from 'react-native'

import prompt from 'react-native-prompt-android';

import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../Theme/appTheme'

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    onPress: () => Alert.alert("Cancel Pressed"),
                    style: "destructive",
                },
                { text: "OK", onPress: () => console.log("Ok pressed") }
            ],
            {
                cancelable: true,
                onDismiss: () =>
                    Alert.alert(
                        "This alert was dismissed by tapping outside of the alert dialog."
                    ),
            },
        );
    }

    const showPrompt = () => {
        // //prompt que solo funciona en IOS
        // Alert.prompt(
        //     'Esta seguro?',
        //     'Esta accion no se puede revertir',
        //     (valor: string) => console.log('info: '+ valor),
        //     'secure-text',
        //     'Hola mundo',//default text
        //     'email-address'//tipo de datoa recibir (number-pad)

        // )

        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Alerts' />

            <Button
                title="Mostrar alerta"
                onPress={showAlert}
            />

            <View style={{height:10}}/>

            <Button
                title="Mostrar prompt"
                onPress={showPrompt}
            />
        </View>
    )
}
