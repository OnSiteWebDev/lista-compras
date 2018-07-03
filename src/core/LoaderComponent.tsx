import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Header, Content, Spinner } from 'native-base'
import Modal from 'react-native-modal'

interface Props {
    visible: boolean
}

interface State {
    visible: boolean
}

class LoaderComponent extends React.Component<Props, State> {
    constructor(props) {
        super(props)

        this.state = this.props
    }

    render() {
        return (
            <Container>
                <Content>
                    <Modal
                        isVisible={this.state.visible}
                    >

                        <Spinner color='white' />

                    </Modal>
                </Content>
            </Container>
        )
    }
}

export const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default LoaderComponent