import * as React from 'react'
import {
    Container,
    Content,
    Button,
    Icon,
    Text,
    ActionSheet
} from 'native-base'
import HeaderComponent from '../core/HeaderComponent'
import TabBarComponent from '../core/TabBarComponent'
import ListComponent from '../core/ListComponent'
import { styles, colors } from '../assets/styles/Styles'

export interface Props {
    navigation?: any
}

export interface State { }

class Dashboard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <HeaderComponent title='Dashboard' />
                <Content padder>
                    <ListComponent table='Lists' />
                </Content>
                <TabBarComponent navigation={this.props.navigation} active='Dashboard' />
            </Container>
        )
    }
}

export default Dashboard