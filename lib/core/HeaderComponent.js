"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const native_base_1 = require("native-base");
class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title || 'Dashboard'
        };
    }
    render() {
        return (React.createElement(native_base_1.Header, null,
            React.createElement(native_base_1.Left, null,
                React.createElement(native_base_1.Thumbnail, { source: require('../assets/images/icon.png'), style: { width: 40, height: 40 } })),
            React.createElement(native_base_1.Body, { style: { alignItems: 'center' } },
                React.createElement(native_base_1.Title, null, this.props.title)),
            React.createElement(native_base_1.Right, null, this.props.button !== undefined ? this.props.button : React.createElement(native_base_1.Text, null))));
    }
}
exports.default = HeaderComponent;
//# sourceMappingURL=HeaderComponent.js.map