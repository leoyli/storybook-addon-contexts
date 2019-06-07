import React from 'react';
import { shallow } from 'enzyme';
import { ToolBarMenuOptions } from './ToolBarMenuOptions';
import { OPT_OUT } from '../../shared/constants';

describe('Tests on addon-contexts component: ToolBarMenuOptions', () => {
  it('should glue TooltipLinkList and set the active item correspondingly', () => {
    // given
    const list = [OPT_OUT, 'A', 'B'];
    const activeName = 'B';

    // when
    const result = shallow(
      <ToolBarMenuOptions activeName={activeName} list={list} onSelectOption={jest.fn} />
    );

    // then
    expect(result.props().links.length).toBe(list.length);
    expect(result.props().links.find((link: any) => link.title === activeName).active).toBe(true);
    expect(result).toMatchInlineSnapshot(`ShallowWrapper {}`);
  });
});
