import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AlertStack } from "./AlertStack";
import { useEffect, useRef } from "react";
import { AlertRef, AvailableSchemes } from "../types";

export default {
  title: "Generic/Alerts/Alert Stack",
  component: AlertStack,
} as ComponentMeta<typeof AlertStack>;

const GenericAlertStack: ComponentStory<typeof AlertStack> = (args) => {
  const stackRef = useRef<AlertRef>(null);

  const addRandom = () => {
    const randomNum = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);
    const availableSchemes = Object.keys(AvailableSchemes).filter(
      (key) => !isNaN(Number(AvailableSchemes[key as keyof typeof AvailableSchemes]))
    );

    if (stackRef.current) {
      stackRef.current?.addAlert({
        children: <>Текст уведомления</>,
        scheme: availableSchemes[randomNum(0, availableSchemes.length)] as keyof typeof AvailableSchemes,
        type: "Fixed",
      });
    }
  };

  return (
    <div>
      <button onClick={addRandom}>Добавить 1 элемент</button>
      <AlertStack alerts={args.alerts} timeout={args.timeout} ref={stackRef} />
    </div>
  );
};

export const DefaultAlertStack = GenericAlertStack.bind({});
DefaultAlertStack.args = {
  alerts: [
    {
      children: <>Добавлен товар</>,
      scheme: "success",
      type: "Fixed",
    },
    {
      children: <>Добавлен товар</>,
      scheme: "success",
      type: "Fixed",
    },
    {
      children: <>Добавлен товар</>,
      scheme: "success",
      type: "Fixed",
    },
  ],
  timeout: null,
};

export const TimeoutAlertStack = GenericAlertStack.bind({});
TimeoutAlertStack.args = {
  alerts: [
    {
      children: <>Добавлен товар</>,
      scheme: "success",
      type: "Fixed",
    },
    {
      children: <>Добавлен товар</>,
      scheme: "success",
      type: "Fixed",
    },
    {
      children: <>Добавлен товар</>,
      scheme: "success",
      type: "Fixed",
    },
  ],
  timeout: 3000,
};
