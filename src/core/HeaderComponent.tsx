import * as React from 'react'
import {
    Container,
    Header,
    Button,
    Icon,
    Title,
    Left,
    Right,
    Body,
    Thumbnail,
    Text
} from 'native-base'

import Storage, {
    Store,
    List,
    Product
} from '../models/Storage'

import { colors, styles } from '../assets/styles/Styles'

export interface Props {
    navigation?: any,
    title: string,
    button?: any
}

export interface State {
    title: string
}

class HeaderComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            title: this.props.title || 'Dashboard'
        }
    }

    render() {
        return (
            <Header>
                <Left>
                    <Thumbnail source={require('../assets/images/icon.png')} style={{ width: 40, height: 40 }} />
                </Left>
                <Body style={{ alignItems: 'center' }}>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right>
                    {this.props.button !== undefined ? this.props.button : <Text></Text>}
                </Right>
            </Header>
        )
    }
}

export default HeaderComponent