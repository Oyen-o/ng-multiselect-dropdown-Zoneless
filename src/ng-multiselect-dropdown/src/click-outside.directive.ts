import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
    selector: '[clickOutside]',
    standalone: false
})
export class ClickOutsideDirective {
    constructor(private _elementRef: ElementRef) {
    }

    @Output()
    public clickOutside = new EventEmitter<MouseEvent>();

    @HostListener('document:click', ['$event', '$event.target'])
    public onClick(event: MouseEvent, targetElement: HTMLElement): void {
        if (!targetElement) {
            return;
        }

        const clickedOutside = !this._elementRef.nativeElement.contains(targetElement);
        console.log("clickedoutside",clickedOutside,this._elementRef.nativeElement);
        if (clickedOutside) {
            this.clickOutside.emit(event);
        }
    }
}
