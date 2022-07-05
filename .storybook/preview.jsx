import React from "react";
import "../styles/index.scss";

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
  viewMode: "docs",
  options: {
    storySort: {
      order: [
        "Welcome",
        "Button按钮",
        "第四章作业：Alert 组件",
        "第六章：Menu",
        "第六章作业：Tabs",
        "第七章：Icon 组件",
        "第九章：Input",
        "AutoComplete 组件",
        "第九章作业：Select",
        "第十章：Upload",
      ],
    },
  },
};

export const decorators = [
  (Story) => (
    <div
      style={{
        margin: "4px",
      }}
    >
      <Story />
    </div>
  ),
];
