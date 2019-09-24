/// <reference types="@robotlegsjs/core" />

import { IEvent } from "@robotlegsjs/core";

/**
 * Augment PIXI module to recognize IEventDispatcher patch.
 */
declare module "pixi.js-legacy" {
    interface IEventDispatcher {
        addEventListener(type: string | symbol, listener: Function, context?: any): void;
        hasEventListener(type: string | symbol, listener?: Function): boolean;
        removeEventListener(type: string | symbol, listener?: Function, context?: any, once?: boolean): void;
        willTrigger(type: string | symbol): boolean;
        dispatchEvent(event: IEvent): boolean;
    }

    export interface DisplayObject extends IEventDispatcher {}
    export interface SystemRenderer extends IEventDispatcher {}

    export interface BaseTexture extends IEventDispatcher {}
    export interface Texture extends IEventDispatcher {}

    export interface Container extends DisplayObject {
        contains(child: DisplayObject): boolean;
    }

    export namespace loaders {
        export interface Loader extends IEventDispatcher {}
        export interface Resource extends IEventDispatcher {}
    }
}
