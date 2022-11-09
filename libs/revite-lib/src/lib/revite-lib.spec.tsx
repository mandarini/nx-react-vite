import { render } from '@testing-library/react';

import ReviteLib from './revite-lib';

describe('ReviteLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviteLib />);
    expect(baseElement).toBeTruthy();
  });
});
