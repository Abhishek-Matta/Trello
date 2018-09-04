import { Subject } from 'rxjs';
export declare class NgDragDropService {
    dragData: any;
    dragData2: any;
    scope: string | Array<string>;
    onDragStart: Subject<any>;
    onDragEnd: Subject<any>;
    constructor();
}
