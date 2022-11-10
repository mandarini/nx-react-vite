import { render } from '@testing-library/react';

import Reactlibrarybud from './reactlibrarybud';

describe('Reactlibrarybud', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactlibrarybud />);
    expect(baseElement).toBeTruthy();
  });
});
