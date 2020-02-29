import { bindable } from "aurelia";

const TestItems = [
    'First item',
    'Second item',
    'Third item',
];

export class List {
    @bindable
    name = '';

    items = TestItems;
}