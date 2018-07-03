"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const native_base_1 = require("native-base");
const Storage_1 = require("../models/Storage");
const Styles_1 = require("../assets/styles/Styles");
class TabBarComponent extends React.Component {
    constructor(props) {
        super(props);
        let stores = Storage_1.default.getAll('Stores');
        let lists = Storage_1.default.getAll('Lists');
        let products = Storage_1.default.getAll('Products');
        this.state = {
            stores: stores,
            lists: lists,
            products: products,
            active: 'string'
        };
    }
    render() {
        const { navigate } = this.props.navigation;
        return (React.createElement(native_base_1.Footer, null,
            React.createElement(native_base_1.FooterTab, null,
                this.props.active === 'Dashboard' ?
                    React.createElement(native_base_1.Button, { vertical: true, active: true, info: true, onPress: () => navigate('Home') },
                        React.createElement(native_base_1.Icon, { name: 'md-stats' }),
                        React.createElement(native_base_1.Text, { style: Styles_1.styles.TabText }, "Dashboard"))
                    :
                        React.createElement(native_base_1.Button, { vertical: true, onPress: () => navigate('Home') },
                            React.createElement(native_base_1.Icon, { name: 'md-stats' }),
                            React.createElement(native_base_1.Text, { style: Styles_1.styles.TabText }, "Dashboard")),
                this.props.active === 'Stores' ?
                    React.createElement(native_base_1.Button, { vertical: true, active: true, info: true, badge: true, onPress: () => navigate('Store') },
                        React.createElement(native_base_1.Badge, null,
                            React.createElement(native_base_1.Text, null, this.state.stores.length)),
                        React.createElement(native_base_1.Icon, { name: 'md-cart' }),
                        React.createElement(native_base_1.Text, { style: Styles_1.styles.TabText }, "Mercados"))
                    :
                        React.createElement(native_base_1.Button, { vertical: true, badge: true, onPress: () => navigate('Store') },
                            React.createElement(native_base_1.Badge, null,
                                React.createElement(native_base_1.Text, null, this.state.stores.length)),
                            React.createElement(native_base_1.Icon, { name: 'md-cart' }),
                            React.createElement(native_base_1.Text, { style: Styles_1.styles.TabText }, "Mercados")),
                this.props.active === 'Products' ?
                    React.createElement(native_base_1.Button, { vertical: true, active: true, info: true, badge: true, onPress: () => navigate('Product') },
                        React.createElement(native_base_1.Badge, null,
                            React.createElement(native_base_1.Text, null, this.state.products.length)),
                        React.createElement(native_base_1.Icon, { name: 'md-nutrition' }),
                        React.createElement(native_base_1.Text, { style: Styles_1.styles.TabText }, "Produtos"))
                    :
                        React.createElement(native_base_1.Button, { vertical: true, badge: true, onPress: () => navigate('Product') },
                            React.createElement(native_base_1.Badge, null,
                                React.createElement(native_base_1.Text, null, this.state.products.length)),
                            React.createElement(native_base_1.Icon, { name: 'md-nutrition' }),
                            React.createElement(native_base_1.Text, { style: Styles_1.styles.TabText }, "Produtos")),
                this.props.active === 'Lists' ?
                    React.createElement(native_base_1.Button, { vertical: true, active: true, info: true, badge: true, onPress: () => navigate('ShoppingList') },
                        React.createElement(native_base_1.Badge, null,
                            React.createElement(native_base_1.Text, null, this.state.lists.length)),
                        React.createElement(native_base_1.Icon, { name: 'md-basket' }),
                        React.createElement(native_base_1.Text, { style: Styles_1.styles.TabText }, "Listas"))
                    :
                        React.createElement(native_base_1.Button, { vertical: true, badge: true, onPress: () => navigate('ShoppingList') },
                            React.createElement(native_base_1.Badge, null,
                                React.createElement(native_base_1.Text, null, this.state.lists.length)),
                            React.createElement(native_base_1.Icon, { name: 'md-basket' }),
                            React.createElement(native_base_1.Text, { style: Styles_1.styles.TabText }, "Listas")))));
    }
}
exports.default = TabBarComponent;
//# sourceMappingURL=TabBarComponent.js.map