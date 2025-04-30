import { GridTwoColumns } from './index';
export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    title: 'grid two columns',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    srcImg: 'assets/images/javascript.jpg',
    background: false,
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
};
export const Template = (args) => <GridTwoColumns {...args} />;
