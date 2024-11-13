import {Home} from '@screens/Home'
import React from 'react'
import './global.css'
import {GluestackUIProvider} from '@components/ui/gluestack-ui-provider'

function App(): React.JSX.Element {
    return (
        <GluestackUIProvider>
            <Home />
        </GluestackUIProvider>
    )
}

export default App
