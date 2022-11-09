import { render } from '@testing-library/react';

import DeepImp from './deep-imp';

describe('DeepImp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DeepImp />);
    expect(baseElement).toBeTruthy();
  });
});
