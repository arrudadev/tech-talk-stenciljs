import { newSpecPage } from '@stencil/core/testing';
import { MyTextInput } from '../my-text-input';

describe('my-text-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyTextInput],
      html: `<my-text-input></my-text-input>`,
    });
    expect(page.root).toEqualHtml(`
      <my-text-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-text-input>
    `);
  });
});
