import {Text, View} from 'react-native'
import React from 'react'
import {Spinner} from '@components/ui/spiner'

export const Home = () => {
    return (
        <View>
            <Text>Home</Text>
            <Spinner size="small" />
        </View>
    )
}
