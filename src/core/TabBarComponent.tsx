import * as React from 'react'
import {
    Footer,
    FooterTab,
    Button,
    Icon,
    Text,
    Badge
} from 'native-base'

import Storage, {
    Store,
    List,
    Product
} from '../models/Storage'

import { colors, styles } from '../assets/styles/Styles'

export interface Props {
    navigation: any,
    active: string
}

export interface State {
    stores: Array<Store>,
    lists: Array<List>,
    products: Array<Product>,
    active: string
}

class TabBarComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        let stores = Storage.getAll('Stores')
        let lists = Storage.getAll('Lists')
        let products = Storage.getAll('Products')

        this.state = {
            stores: stores,
            lists: lists,
            products: products,
            active: 'string'
        }
    }

    render() {
        const { navigate } = this.props.navigation

        return (
            <Footer>
                <FooterTab>
                    {this.props.active === 'Dashboard' ?
                        <Button vertical active info onPress={() => navigate('Home')}>
                            <Icon name='md-stats' />
                            <Text style={styles.TabText}>Dashboard</Text>
                        </Button>
                        :
                        <Button vertical onPress={() => navigate('Home')}>
                            <Icon name='md-stats' />
                            <Text style={styles.TabText}>Dashboard</Text>
                        </Button>
                    }

                    {this.props.active === 'Stores' ?
                        <Button vertical active info badge onPress={() => navigate('Store')}>
                            <Badge>
                                <Text>{this.state.stores.length}</Text>
                            </Badge>
                            <Icon name='md-cart' />
                            <Text style={styles.TabText}>Mercados</Text>
                        </Button>
                        :
                        <Button vertical badge onPress={() => navigate('Store')}>
                            <Badge>
                                <Text>{this.state.stores.length}</Text>
                            </Badge>
                            <Icon name='md-cart' />
                            <Text style={styles.TabText}>Mercados</Text>
                        </Button>
                    }

                    {this.props.active === 'Products' ?
                        <Button vertical active info badge onPress={() => navigate('Product')}>
                            <Badge>
                                <Text>{this.state.products.length}</Text>
                            </Badge>
                            <Icon name='md-nutrition' />
                            <Text style={styles.TabText}>Produtos</Text>
                        </Button>
                        :
                        <Button vertical badge onPress={() => navigate('Product')}>
                            <Badge>
                                <Text>{this.state.products.length}</Text>
                            </Badge>
                            <Icon name='md-nutrition' />
                            <Text style={styles.TabText}>Produtos</Text>
                        </Button>
                    }

                    {this.props.active === 'Lists' ?
                        <Button vertical active info badge onPress={() => navigate('ShoppingList')}>
                            <Badge>
                                <Text>{this.state.lists.length}</Text>
                            </Badge>
                            <Icon name='md-basket' />
                            <Text style={styles.TabText}>Listas</Text>
                        </Button>
                        :
                        <Button vertical badge onPress={() => navigate('ShoppingList')}>
                            <Badge>
                                <Text>{this.state.lists.length}</Text>
                            </Badge>
                            <Icon name='md-basket' />
                            <Text style={styles.TabText}>Listas</Text>
                        </Button>
                    }
                </FooterTab>
            </Footer>
        )
    }
}

export default TabBarComponent