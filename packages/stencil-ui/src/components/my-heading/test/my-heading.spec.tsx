import { newSpecPage } from '@stencil/core/testing';
import { MyHeading } from '../my-heading';

describe('my-heading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyHeading],
      html: `<my-heading></my-heading>`,
    });
    expect(page.root).toEqualHtml(`
      <my-heading>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-heading>
    `);
  });
});
