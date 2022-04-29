import React from "react";

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*",
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
};

export const decorators = [
  (Story) => (
    <div
      style={{
        margin: "3em",
      }}
    >
      <Story />
    </div>
  ),
];
