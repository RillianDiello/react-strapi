import { TextComponent } from './index';
export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
    sed qui consequatur ratione cum saepe quae, impedit sequi incidunt
    beatae omnis nesciunt exercitationem est alias rem debitis temporibus eos.
    Molestias.`,
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
};
export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />;
    </div>
  );
};
