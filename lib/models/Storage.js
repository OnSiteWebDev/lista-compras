"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
class Store {
}
exports.Store = Store;
class Price {
}
exports.Price = Price;
class Product {
}
exports.Product = Product;
class List {
}
exports.List = List;
class ListItem {
}
exports.ListItem = ListItem;
class Storage {
    static add(object, data) {
        try {
            let newObject;
            models_1.default.write(() => {
                newObject = models_1.default.create(object, data);
            });
            return newObject;
        }
        catch (error) {
            return error;
        }
    }
    static count(database) {
        try {
            let objects = models_1.default.objects(database);
            return objects.length;
        }
        catch (error) {
            return error;
        }
    }
    static getAll(database) {
        try {
            let data = models_1.default.objects(database);
            let objects = [];
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    objects.push(data[key]);
                }
            }
            return objects;
        }
        catch (error) {
            return error;
        }
    }
    static getRow(database, filter) {
        try {
            let objects = models_1.default.objects(database).filtered(filter)[0];
            return objects;
        }
        catch (error) {
            return error;
        }
    }
    static update(database, filter, newObject) {
        try {
            let object;
            models_1.default.write(() => {
                object = this.getRow(database, filter);
                object = newObject;
            });
            return object;
        }
        catch (error) {
            return error;
        }
    }
    static filter(database, filter) {
        try {
            let data = models_1.default.objects(database).filtered(filter);
            let objects = [];
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    objects.push(data[key]);
                }
            }
            return objects;
        }
        catch (error) {
            return error;
        }
    }
    static remove(database, filter) {
        try {
            models_1.default.write(() => {
                let objects = models_1.default.objects(database);
                let filtered = objects.filtered(filter);
                models_1.default.delete(filtered);
            });
            return 'deleted';
        }
        catch (error) {
            return error;
        }
    }
    static removeAll(database) {
        try {
            models_1.default.write(() => {
                let objects = models_1.default.objects(database);
                models_1.default.delete(objects);
            });
            return 'deleted';
        }
        catch (error) {
            return error;
        }
    }
}
exports.default = Storage;
//# sourceMappingURL=Storage.js.map