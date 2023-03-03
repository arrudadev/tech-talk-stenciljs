import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-heading',
  styleUrl: 'my-heading.css',
  shadow: true,
})
export class MyHeading {
  /**
   * Heading Text Content
   */
  @Prop() text: string = '';

  render() {
    return (
      <Host>
        <h1 class="my-heading">{this.text}</h1>
      </Host>
    );
  }

}
