import * as React from 'react';
import {create} from 'react-test-renderer';
import ScrollProgress from '../index';

describe('test scroll progress component', () => {
  it('snapshot scroll progress', () => {
    const container = create(<ScrollProgress />);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('target not exist', () => {
    const container = create(<ScrollProgress target="not-exist" />);
    expect(container.toJSON()).toMatchSnapshot();
  });
});
