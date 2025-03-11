import { SectionContainer } from './index';
export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section container</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          minima ab cum ducimus repellendus. Unde beatae perferendis ab
          inventore, quos, architecto repellat adipisci optio facere ipsam rerum
          dicta officia veniam?
        </p>
      </div>
    ),
  },
  argTypes: {
    children: {
      type: { type: '' },
    },
  },
};
export const Template = (args) => <SectionContainer {...args} />;
