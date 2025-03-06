import { Dummy } from './index';
export default {
  title: 'Dummy',
  component: Dummy,
  argTypes: {
    children: {
      type: 'string',
    },
  },
};
export const Template = (args) => <Dummy {...args} />;
Template.args = {
  children: 'Dummy',
};
