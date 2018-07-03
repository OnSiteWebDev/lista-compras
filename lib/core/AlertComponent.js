"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const native_base_1 = require("native-base");
const modalStyles_1 = require("../assets/styles/modalStyles");
const react_native_modal_1 = require("react-native-modal");
class ModalComponent extends React.Component {
    constructor(props, state) {
        super(props);
        this._renderButton = (text, onPress) => (React.createElement(react_native_1.TouchableOpacity, { onPress: onPress, style: modalStyles_1.modalStyles.bottomModal },
            React.createElement(react_native_1.View, { style: modalStyles_1.modalStyles.button },
                React.createElement(react_native_1.Text, { style: { color: 'white' } }, text))));
        this._renderModalContent = () => (React.createElement(react_native_1.View, { style: modalStyles_1.modalStyles.modalContent },
            React.createElement(native_base_1.Icon, { name: this.state.icon, style: { color: this.state.iconColor } }),
            React.createElement(react_native_1.Text, { style: modalStyles_1.modalStyles.modalText }, this.state.message),
            this._renderButton('Ok', () => this.setState({ visible: false }))));
        this.state = {
            icon: undefined,
            iconColor: undefined,
            message: this.props.message,
            visible: this.props.visible
        };
    }
    componentWillMount() {
        const icons = {
            'success': 'md-checkmark-circle-outline',
            'error': 'md-close-circle',
            'warning': 'md-information-circle'
        };
        const colors = {
            'success': '#8BC34A',
            'error': '#FF5354',
            'warning': '#FFCC4D'
        };
        this.setState({
            icon: icons[this.props.status],
            iconColor: colors[this.props.status]
        });
    }
    render() {
        return (React.createElement(react_native_modal_1.default, { onModalHide: this.props.onAlertHide, isVisible: this.state.visible, animationIn: 'slideInLeft', animationOut: 'slideOutRight' }, this._renderModalContent()));
    }
}
exports.default = ModalComponent;
//# sourceMappingURL=AlertComponent.js.map