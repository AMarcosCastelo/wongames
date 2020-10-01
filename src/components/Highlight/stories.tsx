import { Story, Meta } from '@storybook/react/types-6-0';

import Highlight, { HighlightProps } from '.';

export default {
  title: 'Highlight ',
  component: Highlight
} as Meta;

export const Basic: Story<HighlightProps> = (args) => (
  <div style={{ width: '104rem' }}>
    <Highlight {...args} />
  </div>
);

Basic.args = {
  title: "Read Dead it's back",
  subtitle: "Come see John's new adventures",
  backgroundImage: '/img/read-dead-img.jpg',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2'
};

export const Mobile: Story<HighlightProps> = (args) => <Highlight {...args} />;

Mobile.args = {
  title: "Read Dead it's back",
  subtitle: "Come see John's new adventures",
  backgroundImage: '/img/read-dead-img.jpg',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2'
};

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
  title: "Read Dead it's back",
  subtitle: "Come see John's new adventures",
  backgroundImage: '/img/read-dead-img.jpg',
  floatImage: '/img/float-image.png',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2'
};

// WithFloatImageMobile.parameters = {
//   layout: 'fullscreen',
//   viewport: {
//     defaultViewport: 'mobile1'
//   }
// };
