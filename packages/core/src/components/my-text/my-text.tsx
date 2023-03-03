import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-text',
  styleUrl: 'my-text.css',
  shadow: true,
})
export class MyText {
  /**
   * Text Text Content
   */
  @Prop() text: string = '';

  render() {
    return (
      <Host>
        <p class="my-text">{this.text}</p>
      </Host>
    );
  }

}
