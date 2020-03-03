import { bindable, inject } from "aurelia";

@inject(Element)
export class ReserveButton {
    constructor(private element: Element) { }

    handleClick() {
        const event = new CustomEvent('reserve');
        this.element.dispatchEvent(event);
    }
}