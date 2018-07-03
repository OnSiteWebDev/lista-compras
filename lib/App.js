"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
Object.defineProperty(exports, "__esModule", { value: true });
const SplashScreen_1 = require("./core/SplashScreen");
const react_navigation_1 = require("react-navigation");
const Dashboard_1 = require("./components/Dashboard");
// Stores
const AddStores_1 = require("./components/stores/AddStores");
const ListStores_1 = require("./components/stores/ListStores");
// Products
const AddProducts_1 = require("./components/products/AddProducts");
const ListProducts_1 = require("./components/products/ListProducts");
// Lists
const AddLists_1 = require("./components/shopinglist/AddLists");
const ListLists_1 = require("./components/shopinglist/ListLists");
exports.storeStack = react_navigation_1.StackNavigator({
    AddStores: {
        screen: AddStores_1.default
    },
    ListStores: {
        screen: ListStores_1.default
    }
}, {
    initialRouteName: 'ListStores',
    navigationOptions: {
        header: null
    }
});
exports.productStack = react_navigation_1.StackNavigator({
    AddProducts: {
        screen: AddProducts_1.default
    },
    ListProducts: {
        screen: ListProducts_1.default
    }
}, {
    initialRouteName: 'ListProducts',
    navigationOptions: {
        header: null
    }
});
exports.shopingListStack = react_navigation_1.StackNavigator({
    ListLists: {
        screen: ListLists_1.default
    },
    AddLists: {
        screen: AddLists_1.default
    }
}, {
    initialRouteName: 'ListLists',
    navigationOptions: {
        header: null
    }
});
exports.tabStack = react_navigation_1.StackNavigator({
    Home: {
        screen: Dashboard_1.default
    },
    ShoppingList: {
        screen: exports.shopingListStack
    },
    Product: {
        screen: exports.productStack
    },
    Store: {
        screen: exports.storeStack
    }
}, {
    initialRouteName: 'Home',
    navigationOptions: {
        header: null
    }
});
const appNavigator = react_navigation_1.StackNavigator({
    Splash: {
        screen: SplashScreen_1.default
    },
    TabBar: {
        screen: exports.tabStack
    }
}, {
    initialRouteName: 'Splash',
    navigationOptions: {
        header: null
    }
});
exports.default = appNavigator;
//# sourceMappingURL=App.js.map