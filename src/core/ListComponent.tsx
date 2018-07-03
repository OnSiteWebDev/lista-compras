import * as React from 'react'
import {
    TouchableHighlight
} from 'react-native'
import {
    Root,
    List,
    Card,
    CardItem,
    Body,
    Right,
    Content,
    Text,
    Button,
    Icon,
    ActionSheet
} from 'native-base'
import ModalComponent from '../core/ModalComponent'
import Storage from '../models/Storage'
import { colors, modalStyles } from '../assets/styles/Styles'
import AlertComponent from '../core/AlertComponent'
import LoaderComponent from '../core/LoaderComponent'

export interface Props {
    table: string,
    filter?: string,
    navigation?: any
}

export interface State {
    data: Array<Object>,
    itens: Array<Object>,
    isModalOpen: boolean,
    alert: boolean,
    alertStatus: string,
    alertMsg: string,
    refresh: boolean
}

const noContent = [{
    name: 'Nenhum registro encontrado'
}]

const BUTTONS = [
    { text: 'Editar', icon: 'md-create' },
    { text: 'Excluir', icon: 'md-trash' },
    { text: 'Fechar', icon: 'md-close' }
]
const DESTRUCTIVE_INDEX = 1
const CANCEL_INDEX = 2

class ListComponent extends React.Component<Props, State> {
    actionSheet: any

    constructor(props) {
        super(props)

        this.state = {
            data: [],
            itens: undefined,
            isModalOpen: false,
            alert: false,
            refresh: true,
            alertMsg: '',
            alertStatus: ''
        }
    }

    componentDidMount() {
        let data: Array<Object>
        if (this.props.filter !== undefined) {
            data = Storage.filter(this.props.table, this.props.filter)
        } else {
            data = Storage.getAll(this.props.table)
        }

        setTimeout(() => {
            this.setState({
                refresh: false
            })
        }, 1000)

        this.setState({ data: data })
    }

    clicked(btn, id) {
        if (btn === '0') {
            this.props.navigation.navigate('Add' + this.props.table, { id: id })
        } else if (btn === '1') {
            let response = Storage.remove(this.props.table, 'id = ' + id)

            if (response === 'deleted') {
                this.props.navigation.navigate('List' + this.props.table)
            } else {
                this.setState({
                    alert: true,
                    alertMsg: 'Ocorreu um erro ao remover o registro',
                    alertStatus: 'error'
                })
            }
        }
    }

    _renderRow = (item) => (
        <Card>
            <CardItem>
                <Body>
                    <Button
                        transparent
                        onPress={() =>
                            this.props.table === 'Lists' ? this.openModal(item.id) : ''
                        }
                    >
                        <Text style={{ color: 'black', fontSize: 14 }}>{item.name}</Text>
                    </Button>
                </Body>
                <Right>
                    <Button
                        transparent
                        style={{
                            justifyContent: 'flex-end',
                            width: 50
                        }}
                        onPress={() =>
                            ActionSheet.show(
                                {
                                    options: BUTTONS,
                                    cancelButtonIndex: CANCEL_INDEX,
                                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                    title: ''
                                },
                                buttonIndex => {
                                    this.clicked(buttonIndex, item.id)
                                }
                            )}
                    >
                        <Icon name='md-more' style={{ color: '#8B8682', fontSize: 30 }} />
                    </Button>
                </Right>
            </CardItem>
        </Card>
    )

    _renderNoContent = (item) => (
        <Card>
            <CardItem>
                <Body>
                    <Text style={{ color: 'black', fontSize: 14 }}>{item.name}</Text>
                </Body>
            </CardItem>
        </Card>
    )

    openModal(item) {
        this.setState({
            isModalOpen: true
        })
    }

    render() {
        return (
            <Root>
                {this.state.refresh &&
                    <LoaderComponent visible={this.state.refresh} />
                }
                {this.state.isModalOpen &&
                    <ModalComponent
                        visible={this.state.isModalOpen}
                        itens={this.state.itens}
                        onModalHide={() => this.setState({ isModalOpen: false })}
                    />
                }
                {this.state.alert &&
                    <AlertComponent
                        visible={this.state.alert}
                        status={this.state.alertStatus}
                        message={this.state.alertMsg}
                        onAlertHide={() => this.setState({ alert: false })}
                    />
                }
                <List
                    dataArray={this.state.data.length === 0 ? noContent : this.state.data}
                    renderRow={(item) => this.state.data.length === 0 ? this._renderNoContent(item) : this._renderRow(item)}
                ></List>
            </Root>
        )
    }
}

export default ListComponent
