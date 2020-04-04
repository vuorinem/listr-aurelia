import { ListData, getList, ItemData } from './list-api';
import { bindable } from 'aurelia';

export class List {
    @bindable
    name = '';

    list: ListData | null;

    async beforeBind() {
        this.list = await getList(this.name);
    }

    handleReserve(item: ItemData) {
        alert(`Reserved '${item.label}'`);
    }

    handleCancel(item: ItemData) {
        alert(`Cancelled '${item.label}'`);
    }
}