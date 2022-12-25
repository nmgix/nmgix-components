import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { createRef } from "react";
import { PopupRef, PopupStack } from "./PopupStack/PopupStack";

export default {
  title: "Generic/Popups",
  component: PopupStack,
} as ComponentMeta<typeof PopupStack>;

const GenericPopupStack: ComponentStory<typeof PopupStack> = () => {
  const popupRef = createRef<PopupRef>();

  const ExampleForm: React.FC = () => {
    return <div>Im form</div>;
  };

  return (
    <>
      <button onClick={() => popupRef.current!.createPopup(<ExampleForm />)}>Add popup</button>
      <PopupStack ref={popupRef} />
    </>
  );
};

export const DefaulPopupStack = GenericPopupStack.bind({});
