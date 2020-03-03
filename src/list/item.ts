import { bindable } from "aurelia";

export class Item {
    @bindable
    label = '';

    @bindable
    reserve: ({ item: string }) => void;

    handleReserve() {
        if (this.reserve) {
            this.reserve({ item: this.label });
        }
    }
}