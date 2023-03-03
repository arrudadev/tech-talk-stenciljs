import { newSpecPage } from '@stencil/core/testing';
import { MyText } from '../my-text';

describe('my-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyText],
      html: `<my-text></my-text>`,
    });
    expect(page.root).toEqualHtml(`
      <my-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-text>
    `);
  });
});
