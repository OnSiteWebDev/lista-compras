import * as React from 'react'

import { View } from 'react-native'
import Storage from '../models/Storage'

import { Content, Container, Thumbnail, Spinner } from 'native-base'

import Utils from './Utils'

// import realm from '../components/database'

export interface Props {
    navigation: any
}

export interface State {
    progress: number
}

class SplashScreen extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            progress: 0.2
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4682B4' }}>
                <View style={{ flex: 0.75, alignItems: 'center', justifyContent: 'center' }}>
                    <Thumbnail
                        source={require('../assets/images/icon.png')}
                        style={{ width: 150, height: 150 }}
                    />
                </View>

                <View style={{ flex: 0.35 }}>
                    <Spinner color='#FFFFFF' size={80} />
                </View>
            </View>
        )
    }

    componentDidMount() {
        let stores = Storage.getAll('Stores')
        if (stores.length === 0) {
            Storage.add('Stores', {
                id: 1,
                name: 'Nacional',
                description: 'Mercado Nacional'
            })
            Storage.add('Stores', {
                id: 2,
                name: 'Atual',
                description: 'Mercado Atual'
            })
            Storage.add('Stores', {
                id: 3,
                name: 'Paulinho',
                description: 'Mercado Paulinho'
            })
            Storage.add('Stores', {
                id: 4,
                name: 'Índio',
                description: 'Mercado Índio'
            })
        }

        let products = Storage.getAll('Products')
        if (products.length === 0) {
            Storage.add('Products', {
                id: 1,
                name: 'Café'
            })

            Storage.add('Products', {
                id: 2,
                name: 'Nescau'
            })
        }

        let prices = Storage.getAll('Prices')
        if (prices.length === 0) {
            // Café
            Storage.add('Prices', {
                id: 1,
                value: 9.80,
                product: 1,
                store: 1
            })
            Storage.add('Prices', {
                id: 2,
                value: 9.90,
                product: 1,
                store: 2
            })
            Storage.add('Prices', {
                id: 3,
                value: 10.20,
                product: 1,
                store: 3
            })
            Storage.add('Prices', {
                id: 4,
                value: 10.50,
                product: 1,
                store: 4
            })

            // Nescau
            Storage.add('Prices', {
                id: 5,
                value: 7.50,
                product: 2,
                store: 1
            })
            Storage.add('Prices', {
                id: 6,
                value: 7.75,
                product: 2,
                store: 2
            })
            Storage.add('Prices', {
                id: 7,
                value: 8.80,
                product: 2,
                store: 3
            })
            Storage.add('Prices', {
                id: 8,
                value: 7.25,
                product: 2,
                store: 4
            })
        }
        Utils.resetNavigation(this, 'TabBar')
        // setTimeout(() => {
        //     const { navigate } = this.props.navigation
        //     navigate('TabBar')
        // }, 1000)
    }
}

export default SplashScreen
