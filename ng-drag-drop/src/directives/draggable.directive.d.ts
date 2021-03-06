import { ElementRef, EventEmitter, OnInit, Renderer2, NgZone, OnDestroy } from '@angular/core';
import { NgDragDropService } from '../services/ng-drag-drop.service';
export declare class Draggable implements OnInit, OnDestroy {
    protected el: ElementRef;
    private renderer;
    private ng2DragDropService;
    private zone;
    /**
     * The data that will be avaliable to the droppable directive on its `onDrop()` event.
     */
    dragData: any;
    dragData2: any;
    /**
     * The selector that defines the drag Handle.
     * If defined drag will only be allowed if dragged from the selector element.
     */
    dragHandle: string;
    /**
     * Currently not used
     */
    dragEffect: string;
    /**
     * Defines compatible drag drop pairs. Values must match both in draggable and droppable.dropScope.
     */
    dragScope: string | Array<string>;
    /**
     * The CSS class applied to a draggable element. If a dragHandle is defined then its applied to that handle
     * element only. By default it is used to change the mouse over pointer.
     */
    dragHandleClass: string;
    /**
     * CSS class applied on the source draggable element while being dragged.
     */
    dragClass: string;
    /**
     * CSS class applied on the drag ghost when being dragged.
     */
    dragTransitClass: string;
    /**
     * The url to image that will be used as custom drag image when the draggable is being dragged.
     */
    dragImage: string;
    /**
     * Defines if drag is enabled. `true` by default.
     */
    dragEnabled: boolean;
    /**
     * Event fired when Drag is started
     */
    onDragStart: EventEmitter<any>;
    /**
     * Event fired while the element is being dragged
     */
    onDrag: EventEmitter<any>;
    /**
     * Event fired when drag ends
     */
    onDragEnd: EventEmitter<any>;
    /**
     * @private
     * Keeps track of mouse over element that is used to determine drag handles
     */
    mouseDownElement: any;
    /**
     * @private
     * Backing field for the dragEnabled property
     */
    _dragEnabled: boolean;
    /**
     * @private
     * Backing field for the dragImage property
     */
    _dragImage: string;
    /**
     * @private
     * Image element for the dragImage
     */
    dragImageElement: HTMLImageElement;
    /**
     * @private
     * Function for unbinding the drag listener
     */
    unbindDragListener: Function;
    constructor(el: ElementRef, renderer: Renderer2, ng2DragDropService: NgDragDropService, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    dragStart(e: any): void;
    drag(e: any): void;
    dragEnd(e: any): void;
    mousedown(e: any): void;
    private allowDrag();
    private applyDragHandleClass();
    private getDragHandleElement();
    unbindDragListeners(): void;
}
