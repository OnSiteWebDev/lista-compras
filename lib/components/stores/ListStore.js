"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const native_base_1 = require("native-base");
const HeaderComponent_1 = require("../../core/HeaderComponent");
const TabBarComponent_1 = require("../../core/TabBarComponent");
const ListComponent_1 = require("../../core/ListComponent");
class ListStore extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(native_base_1.Container, null,
            React.createElement(HeaderComponent_1.default, { title: 'Mercados', button: React.createElement(native_base_1.Button, { transparent: true, onPress: () => this.props.navigation.navigate('AddStore') },
                    React.createElement(native_base_1.Icon, { name: 'md-add', style: { fontSize: 28 } })) }),
            React.createElement(native_base_1.Content, { padder: true },
                React.createElement(ListComponent_1.default, { table: 'Stores', navigation: this.props.navigation })),
            React.createElement(TabBarComponent_1.default, { navigation: this.props.navigation, active: 'Stores' })));
    }
}
exports.default = ListStore;
//# sourceMappingURL=ListStore.js.map