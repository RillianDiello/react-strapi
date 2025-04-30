import { GridTwoColumns } from './index';
import mock from './mock';
export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: mock,
  argTypes: {
    children: {
      type: 'string',
    },
  },
};
export const Template = (args) => <GridTwoColumns {...args} />;
