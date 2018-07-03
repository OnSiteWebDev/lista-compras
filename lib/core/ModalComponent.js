"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const modalStyles_1 = require("../assets/styles/modalStyles");
const react_native_modal_1 = require("react-native-modal");
class ModalComponent extends React.Component {
    constructor(props, state) {
        super(props);
        this._renderButton = (text, onPress) => (React.createElement(react_native_1.TouchableOpacity, { onPress: onPress, style: modalStyles_1.modalStyles.bottomModal },
            React.createElement(react_native_1.View, { style: modalStyles_1.modalStyles.button },
                React.createElement(react_native_1.Text, { style: { color: 'white' } }, text))));
        this._renderModalContent = () => (React.createElement(react_native_1.View, { style: modalStyles_1.modalStyles.modalContent },
            React.createElement(react_native_1.Text, { style: modalStyles_1.modalStyles.modalText }, this.state.itens),
            this._renderButton('Ok', () => this.setState({ visible: false }))));
        this.state = {
            itens: this.props.itens,
            visible: this.props.visible
        };
    }
    render() {
        return (React.createElement(react_native_modal_1.default, { onModalHide: this.props.onModalHide, isVisible: this.state.visible, animationIn: 'slideInLeft', animationOut: 'slideOutRight' }, this._renderModalContent()));
    }
}
exports.default = ModalComponent;
//# sourceMappingURL=ModalComponent.js.map