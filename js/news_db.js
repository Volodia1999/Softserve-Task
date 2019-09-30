let useLocalStorage = false;

const isOnline = function () {
    return window.navigator.onLine;
};

function sleep(t) {
    return new Promise((resolve) => setTimeout(resolve, t));
}

class ListStorage {
    _ready = false;

    constructor(name) {
        this._name = name;
    }

    async getAll() {
    };

    async add() {
    };

    async clear() {
    };
}

//IndexedDB
class IndexedDBListStorage extends ListStorage {
    _ready = false;
    constructor(name) {
        super(name)

        const request = window.indexedDB.open('NEWS', 1);
        request.onupgradeneeded = (event) => {
            this._db = event.target.result;
            if (!this._db.objectStoreNames.contains(this._name)) {
                this._db.createObjectStore(this._name, {
                    keyPath: 'id',
                    autoIncrement: true
                });
            }
        }
        request.onerror = () => {
            console.warn('ERROR');
        };
        request.onsuccess = (event) => {
            this._ready = true;
            this._db = event.target.result;
        };
    }

    async getAll(){
        while(!this._ready){
            await sleep(50);
        }
        return new Promise((resolve, reject) => {
            let transaction = this._db.transaction([this._name], 'readwrite');
            let getData = transaction.objectStore(this._name).getAll();
            getData.onsuccess = (event) => {
                let data = getData.result;
                resolve(data);
            };
            getData.onerror = reject;
        });
    }

    async add(data){
        while(!this._ready){
            await sleep(50);
        }
        if(!data.id){
            data.id = new Date().getTime() + Math.random();
        }
        const transaction = this._db.transaction([this._name], 'readwrite');
        transaction.objectStore(this._name).add(data);
    }

    async clear(){
        while(!this._ready){
            await sleep(50);
        }
        const transaction = this._db.transaction([this._name], 'readwrite');
        transaction.objectStore(this._name).clear();
    }
}

//LocalStorage
class LocalStorageListStorage extends ListStorage {
    constructor(name) {
        super(name)
    }

    async getAll(){
        let dataArrayRaw = localStorage.getItem(this._name) || '[]';
        let dataArray = JSON.parse(dataArrayRaw);

        return dataArray;
    }

    async add(data){
        let dataArrayRaw = localStorage.getItem(this._name) || '[]';
        let dataArray = JSON.parse(dataArrayRaw);

        if(!data.id){
            data.id = new Date().getTime() + Math.random();
        }
        dataArray.push(data);

        dataArrayRaw = JSON.stringify(dataArray);
        localStorage.setItem(this._name, dataArrayRaw);
    }

    async clear(){
        localStorage.removeItem(this._name);
    }
}

class StorageManager{
    constructor(name, useLocalStorage){
        this._name = name;

        if(useLocalStorage){
            this._storage = new LocalStorageListStorage(name);
        }else{
            this._storage = new IndexedDBListStorage(name);
        }
    }

    add(data){
        this._storage.add(data);
    };

    async getData(){
        return await this._storage.getAll();
    }

    clear(){
        this._storage.clear();
    }
}

const news = new StorageManager('news', useLocalStorage);