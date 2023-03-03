import { newE2EPage } from '@stencil/core/testing';

describe('my-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-text></my-text>');

    const element = await page.find('my-text');
    expect(element).toHaveClass('hydrated');
  });
});
