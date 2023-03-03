import { newE2EPage } from '@stencil/core/testing';

describe('my-heading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-heading></my-heading>');

    const element = await page.find('my-heading');
    expect(element).toHaveClass('hydrated');
  });
});
