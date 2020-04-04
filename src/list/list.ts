import { ListData, getList, ItemData, Unsubscribe, subscribe, reserve, cancel } from './list-api';
import { bindable } from 'aurelia';

export class List {
    @bindable
    name = '';

    list: ListData | null;
    unsubscribe: Unsubscribe | null = null;

    async beforeBind() {
        await this.initList();
    }

    async initList() {
        await this.loadList();

        if (this.unsubscribe !== null) {
            this.unsubscribe();
        }

        this.unsubscribe = subscribe(this.name, () => this.loadList());
    }

    async loadList() {
        this.list = await getList(this.name);
    }

    async handleReserve(item: ItemData) {
        if (!this.list) {
            return;
        }

        await reserve(this.list.name, item.label);
    }

    async handleCancel(item: ItemData) {
        if (!this.list) {
            return;
        }

        await cancel(this.list.name, item.label);
    }
}