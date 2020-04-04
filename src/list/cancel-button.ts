import { bindable, inject } from "aurelia";

@inject(Element)
export class CancelButton {
    constructor(private element: Element) { }

    handleClick() {
        const event = new CustomEvent('cancel');
        this.element.dispatchEvent(event);
    }
}