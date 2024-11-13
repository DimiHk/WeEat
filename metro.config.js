// eslint-disable-next-line @typescript-eslint/no-var-requires
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const {withNativeWind} = require('nativewind/metro')

const config = mergeConfig(getDefaultConfig(__dirname), {})

module.exports = withNativeWind(config, {input: './global.css'})
