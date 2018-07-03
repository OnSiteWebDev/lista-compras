import * as React from 'react'

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

import { modalStyles } from '../assets/styles/modalStyles'

import Modal from 'react-native-modal'

interface Props {
    itens: Array<Object>,
    visible: boolean,
    onModalHide: any
}

interface State {
    itens: Array<Object>,
    visible: boolean
}

class ModalComponent extends React.Component<Props, State> {
    constructor(props: Props, state: State) {
        super(props)

        this.state = {
            itens: this.props.itens,
            visible: this.props.visible
        }
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
            <Text
                style={modalStyles.modalText}
            >{this.state.itens}</Text>

            {this._renderButton('Ok', () => this.setState({ visible: false }))}
        </View>
    )

    render() {
        return (
            <Modal
                onModalHide={this.props.onModalHide}
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