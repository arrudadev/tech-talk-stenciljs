import { newE2EPage } from '@stencil/core/testing';

describe('my-text-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-text-input></my-text-input>');

    const element = await page.find('my-text-input');
    expect(element).toHaveClass('hydrated');
  });
});
