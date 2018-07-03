import * as React from 'react'
import { View } from 'react-native'
import {
    Container,
    Content,
    Button,
    Icon,
    Text,
    Form,
    Item,
    Input,
    Label
} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import HeaderComponent from '../../core/HeaderComponent'
import TabBarComponent from '../../core/TabBarComponent'
import Storage, { Store } from '../../models/Storage'

export interface Props {
    navigation: any
}

export interface State {
    name: string,
    description: string,
    required: boolean
}

class AddStores extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        if (this.props.navigation.state.params.id !== undefined) {
            const { id } = this.props.navigation.state.params

            let store: Store = Storage.getRow('Stores', 'id = ' + id)
            this.state = {
                name: store.name,
                description: store.description,
                required: false
            }
        } else {
            this.state = {
                name: '',
                description: '',
                required: false
            }
        }
    }

    save() {
        if (this.state.name === '') {
            this.setState({ required: true })
            return false
        }

        let store: Store = new Store()

        store.id = Storage.getAll('Stores').length + 1
        store.name = this.state.name
        store.description = this.state.description

        let newStore: Store = Storage.add('Stores', store)

        if (newStore !== undefined) {
            this.props.navigation.navigate('ListStores')
        }

    }

    render() {
        return (
            <Container>
                <HeaderComponent title='Listas de compras' button={
                    <Button transparent onPress={() => this.props.navigation.navigate('ListStore')}>
                        <Icon name='md-list-box' style={{ fontSize: 28 }} />
                    </Button>
                } />
                <Content padder>
                    <Form>
                        {this.state.required ?
                            <Item floatingLabel error>
                                <Label>Nome</Label>

                                <Input value={this.state.name} onChangeText={(name) => this.setState({ name })} />
                            </Item> :
                            <Item floatingLabel>
                                <Label>Nome</Label>

                                <Input value={this.state.name} onChangeText={(name) => this.setState({ name })} />
                            </Item>
                        }
                        <Item floatingLabel last>
                            <Label>Descrição</Label>
                            <Input value={this.state.description} onChangeText={(description) => this.setState({ description })} />
                        </Item>
                        <Button full info rounded style={{ marginTop: 20 }}
                            onPress={() => this.save()}
                        >
                            <Text>Salvar</Text>
                        </Button>
                    </Form>
                </Content>
                <TabBarComponent navigation={this.props.navigation} active='Stores' />
            </Container>
        )
    }
}

export default AddStores