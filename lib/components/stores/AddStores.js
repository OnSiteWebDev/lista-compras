"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const native_base_1 = require("native-base");
const HeaderComponent_1 = require("../../core/HeaderComponent");
const TabBarComponent_1 = require("../../core/TabBarComponent");
const Storage_1 = require("../../models/Storage");
class AddStores extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.navigation.state.params.id !== undefined) {
            const { id } = this.props.navigation.state.params;
            let store = Storage_1.default.getRow('Stores', 'id = ' + id);
            this.state = {
                name: store.name,
                description: store.description,
                required: false
            };
        }
        else {
            this.state = {
                name: '',
                description: '',
                required: false
            };
        }
    }
    save() {
        if (this.state.name === '') {
            this.setState({ required: true });
            return false;
        }
        let store = new Storage_1.Store();
        store.id = Storage_1.default.getAll('Stores').length + 1;
        store.name = this.state.name;
        store.description = this.state.description;
        let newStore = Storage_1.default.add('Stores', store);
        if (newStore !== undefined) {
            this.props.navigation.navigate('ListStores');
        }
    }
    render() {
        return (React.createElement(native_base_1.Container, null,
            React.createElement(HeaderComponent_1.default, { title: 'Listas de compras', button: React.createElement(native_base_1.Button, { transparent: true, onPress: () => this.props.navigation.navigate('ListStore') },
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
                    React.createElement(native_base_1.Item, { floatingLabel: true, last: true },
                        React.createElement(native_base_1.Label, null, "Descri\u00E7\u00E3o"),
                        React.createElement(native_base_1.Input, { value: this.state.description, onChangeText: (description) => this.setState({ description }) })),
                    React.createElement(native_base_1.Button, { full: true, info: true, rounded: true, style: { marginTop: 20 }, onPress: () => this.save() },
                        React.createElement(native_base_1.Text, null, "Salvar")))),
            React.createElement(TabBarComponent_1.default, { navigation: this.props.navigation, active: 'Stores' })));
    }
}
exports.default = AddStores;
//# sourceMappingURL=AddStores.js.map