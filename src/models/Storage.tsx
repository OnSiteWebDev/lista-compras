import realm from './models'

export class Store {
    id: number
    name: string
    description?: string
}

export class Price {
    id: number
    value: number
    product: number
    store: number
}

export class Product {
    id: number
    name: string
}

export class List {
    id: number
    name: string
    month: number
    limit: number
    cost: number
}

export class ListItem {
    id: number
    list: number
    product: number
    quantity: number
}

export default class Storage {
    static add(object: string, data: any) {
        try {
            let newObject
            realm.write(() => {
                newObject = realm.create(object, data)
            })

            return newObject
        } catch (error) {
            return error
        }
    }

    static count(database: string) {
        try {
            let objects = realm.objects(database)

            return objects.length
        } catch (error) {
            return error
        }
    }

    static getAll(database: string) {
        try {
            let data = realm.objects(database)

            let objects: Array<Object> = []

            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    objects.push(data[key])
                }
            }

            return objects
        } catch (error) {
            return error
        }
    }

    static getRow(database: string, filter: string) {
        try {
            let objects: Array<Object> = realm.objects(database).filtered(filter)[0]

            return objects
        } catch (error) {
            return error
        }
    }

    static update(database: string, filter: string, newObject: any) {
        try {
            let object
            realm.write(() => {
                object = this.getRow(database, filter)
                object = newObject
            })

            return object
        } catch (error) {
            return error
        }
    }

    static filter(database: string, filter: string) {
        try {
            let data = realm.objects(database).filtered(filter)

            let objects: Array<Object> = []

            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    objects.push(data[key])
                }
            }

            return objects
        } catch (error) {
            return error
        }
    }

    static remove(database: string, filter: string) {
        try {
            realm.write(() => {
                let objects = realm.objects(database)
                let filtered: Array<Object> = objects.filtered(filter)

                realm.delete(filtered)
            })
            return 'deleted'
        } catch (error) {
            return error
        }
    }

    static removeAll(database: string) {
        try {
            realm.write(() => {
                let objects: Array<Object> = realm.objects(database)

                realm.delete(objects)
            })

            return 'deleted'
        } catch (error) {
            return error
        }
    }
}