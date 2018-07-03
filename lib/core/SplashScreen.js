"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const Storage_1 = require("../models/Storage");
const native_base_1 = require("native-base");
const Utils_1 = require("./Utils");
class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0.2
        };
    }
    render() {
        return (React.createElement(react_native_1.View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4682B4' } },
            React.createElement(react_native_1.View, { style: { flex: 0.75, alignItems: 'center', justifyContent: 'center' } },
                React.createElement(native_base_1.Thumbnail, { source: require('../assets/images/icon.png'), style: { width: 150, height: 150 } })),
            React.createElement(react_native_1.View, { style: { flex: 0.35 } },
                React.createElement(native_base_1.Spinner, { color: '#FFFFFF', size: 80 }))));
    }
    componentDidMount() {
        let stores = Storage_1.default.getAll('Stores');
        if (stores.length === 0) {
            Storage_1.default.add('Stores', {
                id: 1,
                name: 'Nacional',
                description: 'Mercado Nacional'
            });
            Storage_1.default.add('Stores', {
                id: 2,
                name: 'Atual',
                description: 'Mercado Atual'
            });
            Storage_1.default.add('Stores', {
                id: 3,
                name: 'Paulinho',
                description: 'Mercado Paulinho'
            });
            Storage_1.default.add('Stores', {
                id: 4,
                name: 'Índio',
                description: 'Mercado Índio'
            });
        }
        let products = Storage_1.default.getAll('Products');
        if (products.length === 0) {
            Storage_1.default.add('Products', {
                id: 1,
                name: 'Café'
            });
            Storage_1.default.add('Products', {
                id: 2,
                name: 'Nescau'
            });
        }
        let prices = Storage_1.default.getAll('Prices');
        if (prices.length === 0) {
            // Café
            Storage_1.default.add('Prices', {
                id: 1,
                value: 9.80,
                product: 1,
                store: 1
            });
            Storage_1.default.add('Prices', {
                id: 2,
                value: 9.90,
                product: 1,
                store: 2
            });
            Storage_1.default.add('Prices', {
                id: 3,
                value: 10.20,
                product: 1,
                store: 3
            });
            Storage_1.default.add('Prices', {
                id: 4,
                value: 10.50,
                product: 1,
                store: 4
            });
            // Nescau
            Storage_1.default.add('Prices', {
                id: 5,
                value: 7.50,
                product: 2,
                store: 1
            });
            Storage_1.default.add('Prices', {
                id: 6,
                value: 7.75,
                product: 2,
                store: 2
            });
            Storage_1.default.add('Prices', {
                id: 7,
                value: 8.80,
                product: 2,
                store: 3
            });
            Storage_1.default.add('Prices', {
                id: 8,
                value: 7.25,
                product: 2,
                store: 4
            });
        }
        Utils_1.default.resetNavigation(this, 'TabBar');
        // setTimeout(() => {
        //     const { navigate } = this.props.navigation
        //     navigate('TabBar')
        // }, 1000)
    }
}
exports.default = SplashScreen;
//# sourceMappingURL=SplashScreen.js.map