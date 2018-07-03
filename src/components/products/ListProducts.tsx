import * as React from 'react'
import {
    Container,
    Content,
    Button,
    Icon
} from 'native-base'
import HeaderComponent from '../../core/HeaderComponent'
import TabBarComponent from '../../core/TabBarComponent'
import ListComponent from '../../core/ListComponent'

export interface Props {
    navigation: any
}

export interface State { }

class ListProducts extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <HeaderComponent title='Produtos' button={
                    <Button transparent>
                        <Icon name='md-add' style={{ fontSize: 28 }} />
                    </Button>
                } />
                <Content padder>
                    <ListComponent table='Products' navigation={this.props.navigation} />
                </Content>
                <TabBarComponent navigation={this.props.navigation} active='Products' />
            </Container>
        )
    }
}

export default ListProducts