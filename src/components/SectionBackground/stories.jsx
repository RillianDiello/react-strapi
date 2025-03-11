import { SectionBackground } from './index';
export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consectetur, sapien sit amet iaculis suscipit, nisl turpis varius
          libero, quis bibendum purus metus eu enim. Sed nec bibendum purus.
          Donec eget nunc nec nunc tincidunt aliquam. Sed nec bibendum purus.
          Donec eget nunc nec nunc tincidunt aliquam.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
};
export const Template = (args) => <SectionBackground {...args} />;
