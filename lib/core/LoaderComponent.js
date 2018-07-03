"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const native_base_1 = require("native-base");
const react_native_modal_1 = require("react-native-modal");
class LoaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props;
    }
    render() {
        return (React.createElement(native_base_1.Container, null,
            React.createElement(native_base_1.Content, null,
                React.createElement(react_native_modal_1.default, { isVisible: this.state.visible },
                    React.createElement(native_base_1.Spinner, { color: 'white' })))));
    }
}
exports.styles = react_native_1.StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
exports.default = LoaderComponent;
//# sourceMappingURL=LoaderComponent.js.map