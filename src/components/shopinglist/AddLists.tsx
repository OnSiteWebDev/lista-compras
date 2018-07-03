import * as React from 'react'
import {
    Container,
    Content,
    Button,
    Icon
} from 'native-base'
import HeaderComponent from '../../core/HeaderComponent'
import TabBarComponent from '../../core/TabBarComponent'

export interface Props {
    navigation: any
}

export interface State { }

class AddLists extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <HeaderComponent title='Listas de compras' button={
                    <Button transparent>
                        <Icon name='md-list-box' style={{ fontSize: 28 }} />
                    </Button>
                } />
                <Content></Content>
                <TabBarComponent navigation={this.props.navigation} active='Lists' />
            </Container>
        )
    }
}

export default AddLists