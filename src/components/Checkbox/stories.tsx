import { Story, Meta } from '@storybook/react/types-6-0';

import Checkbox, { CheckboxProps } from '.';

export default {
  title: 'Checkbox ',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta;

export const Basic: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        isChecked
        name="category"
        {...args}
        label="Action"
        labelFor="action"
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        {...args}
        label="Adventure"
        labelFor="adventure"
      />
    </div>

    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        {...args}
        label="Strategy"
        labelFor="strategy"
      />
    </div>
  </>
);
