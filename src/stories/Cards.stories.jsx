import Cards from "./Cards";

export default {
  title: "Experimental/Cards",
  Component: Cards,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
      defaultValue: "primary",
    },
    color: {
      options: ["green", "yellow"],
      control: { type: "radio" },
      defaultValue: "green",
    },
    display: {
      options: ["flex", "block", "inline-block", "inline-flex"],
      control: { type: "radio" },
      defaultValue: "flex",
    },
  },
};

const Template = (args, { argTypes }) => {
  return (
    <div>
      <Cards color={args.color} display={args.display}></Cards>
    </div>
  );
};

export const Primary = Template.bind({});
