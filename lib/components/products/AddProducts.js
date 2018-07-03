"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const native_base_1 = require("native-base");
const HeaderComponent_1 = require("../../core/HeaderComponent");
const TabBarComponent_1 = require("../../core/TabBarComponent");
const Storage_1 = require("../../models/Storage");
class AddProducts extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.navigation.state.params.id !== undefined) {
            const { id } = this.props.navigation.state.params;
            let store = Storage_1.default.getRow('Products', 'id = ' + id);
            this.state = {
                name: store.name,
                required: false
            };
        }
        else {
            this.state = {
                name: '',
                required: false
            };
        }
    }
    save() {
        if (this.state.name === '') {
            this.setState({ required: true });
            return false;
        }
        let product = new Storage_1.Product();
        product.id = Storage_1.default.getAll('Products').length + 1;
        product.name = this.state.name;
        let newProduct = Storage_1.default.add('Products', product);
        if (newProduct !== undefined) {
            this.props.navigation.navigate('ListProducts');
        }
    }
    render() {
        return (React.createElement(native_base_1.Container, null,
            React.createElement(HeaderComponent_1.default, { title: 'Produtos', button: React.createElement(native_base_1.Button, { transparent: true },
                    React.createElement(native_base_1.Icon, { name: 'md-list-box', style: { fontSize: 28 } })) }),
            React.createElement(native_base_1.Content, { padder: true },
                React.createElement(native_base_1.Form, null,
                    this.state.required ?
                        React.createElement(native_base_1.Item, { floatingLabel: true, error: true },
                            React.createElement(native_base_1.Label, null, "Nome"),
                            React.createElement(native_base_1.Input, { value: this.state.name, onChangeText: (name) => this.setState({ name }) })) :
                        React.createElement(native_base_1.Item, { floatingLabel: true },
                            React.createElement(native_base_1.Label, null, "Nome"),
                            React.createElement(native_base_1.Input, { value: this.state.name, onChangeText: (name) => this.setState({ name }) })),
                    React.createElement(native_base_1.Button, { full: true, info: true, rounded: true, style: { marginTop: 20 }, onPress: () => this.save() },
                        React.createElement(native_base_1.Text, null, "Salvar")))),
            React.createElement(TabBarComponent_1.default, { navigation: this.props.navigation, active: 'Products' })));
    }
}
exports.default = AddProducts;
//# sourceMappingURL=AddProducts.js.map