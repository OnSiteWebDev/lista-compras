"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
// import Realm from 'realm'
const Realm = require('realm');
// Mercados
class Stores {
}
Stores.schema = {
    name: 'Stores',
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string',
        description: { type: 'string', optional: true }
    }
};
// Preços
class Prices {
}
Prices.schema = {
    name: 'Prices',
    primaryKey: 'id',
    properties: {
        id: 'int',
        value: 'float',
        product: 'int',
        store: 'int'
    }
};
// Produtos
class Products {
}
Products.schema = {
    name: 'Products',
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string'
    }
};
// Lista de compras
class Lists {
}
Lists.schema = {
    name: 'Lists',
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string',
        month: 'int',
        limit: 'float',
        cost: 'float'
    }
};
// Itens da lista de compras
class ListItens {
}
ListItens.schema = {
    name: 'ListItens',
    primaryKey: 'id',
    properties: {
        id: 'int',
        list: 'int',
        product: 'int',
        quantity: 'int'
    }
};
const realm = new Realm({
    schema: [
        Stores,
        Prices,
        Products,
        Lists,
        ListItens
    ],
    schemaVersion: 1
});
exports.default = realm;
//# sourceMappingURL=models.js.map