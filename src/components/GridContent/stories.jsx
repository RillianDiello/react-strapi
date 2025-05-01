import { GridContent } from './index';
import mock from './mock';

export default {
  title: 'GridContent',
  component: GridContent,
  args: mock,
};
export const Template = (args) => <GridContent {...args} />;
