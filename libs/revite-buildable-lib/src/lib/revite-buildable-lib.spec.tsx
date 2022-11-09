import { render } from '@testing-library/react';

import ReviteBuildableLib from './revite-buildable-lib';

describe('ReviteBuildableLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviteBuildableLib />);
    expect(baseElement).toBeTruthy();
  });
});
