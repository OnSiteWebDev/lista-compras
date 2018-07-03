/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react'
import {
    Button,
    Icon,
    Text
} from 'native-base'
import { styles } from './assets/styles/Styles'

import SplashScreen from './core/SplashScreen'
import { StackNavigator, TabNavigator } from 'react-navigation'

import Dashboard from './components/Dashboard'

// Stores
import AddStores from './components/stores/AddStores'
import ListStores from './components/stores/ListStores'

// Products
import AddProducts from './components/products/AddProducts'
import ListProducts from './components/products/ListProducts'

// Lists
import AddLists from './components/shopinglist/AddLists'
import ListLists from './components/shopinglist/ListLists'

import TabBarComponent from './core/TabBarComponent'
import HeaderComponent from './core/HeaderComponent'

export const storeStack = StackNavigator({
    AddStores: {
        screen: AddStores
    },
    ListStores: {
        screen: ListStores
    }
}, {
        initialRouteName: 'ListStores',
        navigationOptions: {
            header: null
        }
    })

export const productStack = StackNavigator({
    AddProducts: {
        screen: AddProducts
    },
    ListProducts: {
        screen: ListProducts
    }
}, {
        initialRouteName: 'ListProducts',
        navigationOptions: {
            header: null
        }
    })

export const shopingListStack = StackNavigator({
    ListLists: {
        screen: ListLists
    },
    AddLists: {
        screen: AddLists
    }
}, {
        initialRouteName: 'ListLists',
        navigationOptions: {
            header: null
        }
    })

export const tabStack = StackNavigator({
    Home: {
        screen: Dashboard
    },
    ShoppingList: {
        screen: shopingListStack
    },
    Product: {
        screen: productStack
    }
    ,
    Store: {
        screen: storeStack
    }
}, {
        initialRouteName: 'Home',
        navigationOptions: {
            header: null
        }
    })

const appNavigator = StackNavigator({
    Splash: {
        screen: SplashScreen
    },
    TabBar: {
        screen: tabStack
    }
}, {
        initialRouteName: 'Splash',
        navigationOptions: {
            header: null
        }
    })

export default appNavigator