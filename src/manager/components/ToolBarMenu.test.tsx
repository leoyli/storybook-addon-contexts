import React from 'react';
import { shallow } from 'enzyme';
import { ToolBarMenu } from './ToolBarMenu';

describe('Tests on addon-contexts component: ToolBarMenu', () => {
  it('should glue `@storybook/ui` components to produce a context menu', () => {
    // given
    const someProps = {
      icon: 'globe' as const,
      title: 'Some Context',
      active: true,
      expanded: false,
      setExpanded: jest.fn,
      optionsProps: {
        activeName: 'A',
        list: ['A', 'B'],
        onSelectOption: jest.fn,
      },
    };

    // when
    const result = shallow(<ToolBarMenu {...someProps} />);

    // then
    expect(result).toMatchInlineSnapshot(`ShallowWrapper {}`);
  });
});
