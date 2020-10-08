import { Story, Meta } from '@storybook/react/types-6-0';

import Highlight, { HighlightProps } from '.';
import item from './mock';

export default {
  title: 'Highlight ',
  component: Highlight
} as Meta;

export const Basic: Story<HighlightProps> = (args) => (
  <div style={{ width: '104rem' }}>
    <Highlight {...args} />
  </div>
);

Basic.args = item;

export const Mobile: Story<HighlightProps> = (args) => <Highlight {...args} />;

Mobile.args = item;

Mobile.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'mobile1'
  }
};

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <Highlight {...args} />
);

WithFloatImage.args = {
  ...item,
  floatImage: '/img/float-image.png'
};

// WithFloatImageMobile.parameters = {
//   layout: 'fullscreen',
//   viewport: {
//     defaultViewport: 'mobile1'
//   }
// };
