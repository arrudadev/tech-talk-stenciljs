import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-text-input',
  styleUrl: 'my-text-input.css',
  shadow: true,
})
export class MyTextInput {
  @Prop() placeholder?: string
  @Prop() value?: string

  @Event() changeInput?: EventEmitter<string>

  render() {
    return (
      <Host>
        <input
          class="my-input"
          type="text"
          value={this.value}
          placeholder={this.placeholder}
          onInput={(event) => this.changeInput.emit((event.target as HTMLInputElement).value)} />
      </Host>
    );
  }

}
