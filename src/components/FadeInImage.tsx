import React, { useState } from 'react'
import { ActivityIndicator, Animated, StyleProp, View,ImageStyle } from 'react-native'
import useAnimation from '../hooks/useAnimation';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style = {} }: Props) => {

    const { opacity, fadeIn } = useAnimation()
    const [isLoading, setIsLoading] = useState(true)

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn(1000);
    }

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {isLoading &&
                <ActivityIndicator
                    style={{ position: 'absolute' }}
                    color="#5856D6"
                    size={30}
                />
            }

            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={{
                    //     // width: '100%',
                    //     // height: 400,
                    ...style as any,
                    opacity
                }}
            />
        </View>
    )
}
