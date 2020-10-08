import { Story, Meta } from '@storybook/react/types-6-0';

import Menu, { MenuProps } from '.';

export default {
  title: 'Menu',
  component: Menu
} as Meta;

export const Basic: Story = (args) => <Menu {...args} />;

export const MenuMobile: Story<MenuProps> = (args) => <Menu {...args} />;

MenuMobile.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  },
  viewport: {
    defaultViewport: 'mobile1'
  }
};
