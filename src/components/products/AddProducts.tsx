import * as React from 'react'
import {
    Container,
    Content,
    Button,
    Icon,
    Form,
    Item,
    Label,
    Input,
    Text
} from 'native-base'
import HeaderComponent from '../../core/HeaderComponent'
import TabBarComponent from '../../core/TabBarComponent'
import Storage, { Product } from '../../models/Storage'

export interface Props {
    navigation: any
}

export interface State {
    name: string,
    required: boolean
}

class AddProducts extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        if (this.props.navigation.state.params.id !== undefined) {
            const { id } = this.props.navigation.state.params

            let store: Product = Storage.getRow('Products', 'id = ' + id)
            this.state = {
                name: store.name,
                required: false
            }
        } else {
            this.state = {
                name: '',
                required: false
            }
        }
    }

    save() {
        if (this.state.name === '') {
            this.setState({ required: true })
            return false
        }

        let product: Product = new Product()

        product.id = Storage.getAll('Products').length + 1
        product.name = this.state.name

        let newProduct: Product = Storage.add('Products', product)

        if (newProduct !== undefined) {
            this.props.navigation.navigate('ListProducts')
        }

    }

    render() {
        return (
            <Container>
                <HeaderComponent title='Produtos' button={
                    <Button transparent>
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
                        <Button full info rounded style={{ marginTop: 20 }}
                            onPress={() => this.save()}
                        >
                            <Text>Salvar</Text>
                        </Button>
                    </Form>
                </Content>
                <TabBarComponent navigation={this.props.navigation} active='Products' />
            </Container>
        )
    }
}

export default AddProducts