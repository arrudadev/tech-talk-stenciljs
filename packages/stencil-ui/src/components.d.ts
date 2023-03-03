/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyHeading {
        /**
          * Heading Text Content
         */
        "text": string;
    }
    interface MyText {
        /**
          * Text Text Content
         */
        "text": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyHeadingElement extends Components.MyHeading, HTMLStencilElement {
    }
    var HTMLMyHeadingElement: {
        prototype: HTMLMyHeadingElement;
        new (): HTMLMyHeadingElement;
    };
    interface HTMLMyTextElement extends Components.MyText, HTMLStencilElement {
    }
    var HTMLMyTextElement: {
        prototype: HTMLMyTextElement;
        new (): HTMLMyTextElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "my-heading": HTMLMyHeadingElement;
        "my-text": HTMLMyTextElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyHeading {
        /**
          * Heading Text Content
         */
        "text"?: string;
    }
    interface MyText {
        /**
          * Text Text Content
         */
        "text"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "my-heading": MyHeading;
        "my-text": MyText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-heading": LocalJSX.MyHeading & JSXBase.HTMLAttributes<HTMLMyHeadingElement>;
            "my-text": LocalJSX.MyText & JSXBase.HTMLAttributes<HTMLMyTextElement>;
        }
    }
}
