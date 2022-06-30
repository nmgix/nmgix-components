import { AlertProps, AlertRef } from "../types";
import { AlertStack, AlertStackChild } from "../AlertStack/AlertStack";
import { mount } from "enzyme";
import React, { Ref } from "react";

jest.useRealTimers();

describe("Alerts/Unit", () => {
  describe("Alert Stack Component", () => {
    let alerts: AlertProps[] = [
      {
        children: <>Добавлен товар</>,
        scheme: "success",
        type: "fixed",
      },
      {
        children: <>Добавлен товар</>,
        scheme: "success",
        type: "fixed",
      },
      {
        children: <>Добавлен товар</>,
        scheme: "success",
        type: "fixed",
      },
    ];

    it("Alert Stack with no timer functionality", () => {
      //didnt figure out how to  write these tests ofr checkingg ref
      var ref = React.createRef<AlertRef>();
      const props: { alerts: AlertProps[]; timeout: number | null; ref: Ref<AlertRef> } = {
        alerts: alerts,
        timeout: null,
        ref,
      };

      const wrapper = mount<typeof AlertStack>(<AlertStack {...props} />);
      expect(wrapper.find(AlertStackChild)).toHaveLength(3);

      //   ref.current?.addAlert({
      //     children: <>Добавлен товар</>,
      //     scheme: "success",
      //     type: "fixed",
      //   });

      console.log(wrapper.debug());

      //   expect(wrapper.find(AlertStackChild)).toHaveLength(4);
    });
  });
});
