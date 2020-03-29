import { ItemData } from './list-api';
import { bindable } from "aurelia";

export class Item {
    @bindable
    item: ItemData;

    @bindable
    reserve: ({ item: ItemData }) => void;

    handleReserve() {
        if (this.reserve) {
            this.reserve({ item: this.item });
        }
    }
}