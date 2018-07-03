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
import Storage, { Store } from '../../models/Storage'

export interface Props {
    navigation: any
}

export interface State { }

class ListStores extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <HeaderComponent title='Mercados' button={
                    <Button transparent onPress={ () =>
                        this.props.navigation.navigate('AddStore')
                    }>
                        <Icon name='md-add' style={{ fontSize: 28 }} />
                    </Button>
                } />
                <Content padder>
                    <ListComponent table='Stores' navigation={this.props.navigation} />
                </Content>
                <TabBarComponent navigation={this.props.navigation} active='Stores' />
            </Container>
        )
    }
}

export default ListStores