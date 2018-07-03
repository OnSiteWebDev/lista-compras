import * as React from 'react'

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { Icon } from 'native-base'
import { modalStyles } from '../assets/styles/modalStyles'

import Modal from 'react-native-modal'

interface Props {
    status: string,
    message: string,
    visible: boolean,
    onAlertHide: any
}

interface State {
    icon: any,
    iconColor: any,
    message: string,
    visible: boolean
}

class ModalComponent extends React.Component<Props, State> {
    constructor(props: Props, state: State) {
        super(props)

        this.state = {
            icon: undefined,
            iconColor: undefined,
            message: this.props.message,
            visible: this.props.visible
        }
    }

    componentWillMount() {
        const icons = {
            'success': 'md-checkmark-circle-outline',
            'error': 'md-close-circle',
            'warning': 'md-information-circle'
        }

        const colors = {
            'success': '#8BC34A',
            'error': '#FF5354',
            'warning': '#FFCC4D'
        }

        this.setState({
            icon: icons[this.props.status],
            iconColor: colors[this.props.status]
        })
    }

    _renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress} style={modalStyles.bottomModal}>
            <View style={modalStyles.button}>
                <Text style={{ color: 'white' }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )

    _renderModalContent = () => (
        <View style={modalStyles.modalContent}>
            <Icon name={this.state.icon} style={{ color: this.state.iconColor }} />
            <Text
                style={modalStyles.modalText}
            >{this.state.message}</Text>

            {this._renderButton('Ok', () => this.setState({ visible: false }))}
        </View>
    )

    render() {
        return (
            <Modal
                onModalHide={this.props.onAlertHide}
                isVisible={this.state.visible}
                animationIn={'slideInLeft'}
                animationOut={'slideOutRight'}
            >
                {this._renderModalContent()}
            </Modal>
        )
    }
}

export default ModalComponent