import { cva } from "class-variance-authority";

const config = {
  button: {
    baseClassnames: "text-white px-8 py-2 rounded-sm",
    variants: () =>
      cva(config.button.baseClassnames, {
        variants: {
          intent: {
            primary: "bg-red-600",
            secondary: "bg-blue-600",
          },
          size: {
            small: "w-8",
            medium: "w-16",
            large: "w-32",
          },
        },
        compoundVariants: [
          {
            intent: "primary",
            size: "small",
            class: "rounded-2xl",
          },
          {
            intent: "secondary",
            size: "large",
            class: "rounded-4xl",
          },
        ],
      }),
  },
};
