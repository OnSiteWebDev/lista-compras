"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const native_base_1 = require("native-base");
const ModalComponent_1 = require("../core/ModalComponent");
const Storage_1 = require("../models/Storage");
const AlertComponent_1 = require("../core/AlertComponent");
const LoaderComponent_1 = require("../core/LoaderComponent");
const noContent = [{
        name: 'Nenhum registro encontrado'
    }];
const BUTTONS = [
    { text: 'Editar', icon: 'md-create' },
    { text: 'Excluir', icon: 'md-trash' },
    { text: 'Fechar', icon: 'md-close' }
];
const DESTRUCTIVE_INDEX = 1;
const CANCEL_INDEX = 2;
class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        this._renderRow = (item) => (React.createElement(native_base_1.Card, null,
            React.createElement(native_base_1.CardItem, null,
                React.createElement(native_base_1.Body, null,
                    React.createElement(native_base_1.Button, { transparent: true, onPress: () => this.props.table === 'Lists' ? this.openModal(item.id) : '' },
                        React.createElement(native_base_1.Text, { style: { color: 'black', fontSize: 14 } }, item.name))),
                React.createElement(native_base_1.Right, null,
                    React.createElement(native_base_1.Button, { transparent: true, style: {
                            justifyContent: 'flex-end',
                            width: 50
                        }, onPress: () => native_base_1.ActionSheet.show({
                            options: BUTTONS,
                            cancelButtonIndex: CANCEL_INDEX,
                            destructiveButtonIndex: DESTRUCTIVE_INDEX,
                            title: ''
                        }, buttonIndex => {
                            this.clicked(buttonIndex, item.id);
                        }) },
                        React.createElement(native_base_1.Icon, { name: 'md-more', style: { color: '#8B8682', fontSize: 30 } }))))));
        this._renderNoContent = (item) => (React.createElement(native_base_1.Card, null,
            React.createElement(native_base_1.CardItem, null,
                React.createElement(native_base_1.Body, null,
                    React.createElement(native_base_1.Text, { style: { color: 'black', fontSize: 14 } }, item.name)))));
        this.state = {
            data: [],
            itens: undefined,
            isModalOpen: false,
            alert: false,
            refresh: true,
            alertMsg: '',
            alertStatus: ''
        };
    }
    componentDidMount() {
        let data;
        if (this.props.filter !== undefined) {
            data = Storage_1.default.filter(this.props.table, this.props.filter);
        }
        else {
            data = Storage_1.default.getAll(this.props.table);
        }
        setTimeout(() => {
            this.setState({
                refresh: false
            });
        }, 1000);
        this.setState({ data: data });
    }
    clicked(btn, id) {
        if (btn === '0') {
            this.props.navigation.navigate('Add' + this.props.table, { id: id });
        }
        else if (btn === '1') {
            let response = Storage_1.default.remove(this.props.table, 'id = ' + id);
            if (response === 'deleted') {
                this.props.navigation.navigate('List' + this.props.table);
            }
            else {
                this.setState({
                    alert: true,
                    alertMsg: 'Ocorreu um erro ao remover o registro',
                    alertStatus: 'error'
                });
            }
        }
    }
    openModal(item) {
        this.setState({
            isModalOpen: true
        });
    }
    render() {
        return (React.createElement(native_base_1.Root, null,
            this.state.refresh &&
                React.createElement(LoaderComponent_1.default, { visible: this.state.refresh }),
            this.state.isModalOpen &&
                React.createElement(ModalComponent_1.default, { visible: this.state.isModalOpen, itens: this.state.itens, onModalHide: () => this.setState({ isModalOpen: false }) }),
            this.state.alert &&
                React.createElement(AlertComponent_1.default, { visible: this.state.alert, status: this.state.alertStatus, message: this.state.alertMsg, onAlertHide: () => this.setState({ alert: false }) }),
            React.createElement(native_base_1.List, { dataArray: this.state.data.length === 0 ? noContent : this.state.data, renderRow: (item) => this.state.data.length === 0 ? this._renderNoContent(item) : this._renderRow(item) })));
    }
}
exports.default = ListComponent;
//# sourceMappingURL=ListComponent.js.map