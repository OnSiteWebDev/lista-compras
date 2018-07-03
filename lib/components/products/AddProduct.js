"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const native_base_1 = require("native-base");
const HeaderComponent_1 = require("../../core/HeaderComponent");
const TabBarComponent_1 = require("../../core/TabBarComponent");
class AddProducts extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(native_base_1.Container, null,
            React.createElement(HeaderComponent_1.default, { title: 'Produtos', button: React.createElement(native_base_1.Button, { transparent: true },
                    React.createElement(native_base_1.Icon, { name: 'md-list-box', style: { fontSize: 28 } })) }),
            React.createElement(native_base_1.Content, null),
            React.createElement(TabBarComponent_1.default, { navigation: this.props.navigation, active: 'Products' })));
    }
}
exports.default = AddProducts;
//# sourceMappingURL=AddProduct.js.map