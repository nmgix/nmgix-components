import { screen, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Alert } from "./Alert";
import { AlertProps, AlertRef, AlertStackChildProps, AvailableSchemes } from "./types";
import { AlertStack } from "./AlertStack/AlertStack";
import React, { forwardRef } from "react";

jest.useRealTimers();

describe("Alerts", () => {
  describe("Alert Component", () => {
    it("Header Alert to be in top after scroll", () => {
      const alertProps: AlertProps = {
        children: <>Текст оповещения</>,
        scheme: "success",
        type: "header",
      };

      const { container } = render(
        <div style={{ height: "150vh" }}>
          <Alert {...alertProps} />
        </div>
      );

      const alertHeaderComponent = container.querySelector(".alert-component");

      fireEvent.scroll(window, { target: { scrollY: "50vh" } });

      // expect(alertHeaderComponent).toHaveStyle("top: 0px");
      // that took me half of the day to setup environment and 5 minutes to realize that my approach was wrong
      expect(alertHeaderComponent!.getBoundingClientRect().top).toEqual(0);
    });

    it("Fixed Alert to be in top", () => {
      const alertProps: AlertProps = {
        children: <>Текст оповещения</>,
        scheme: "notification",
        type: "fixed",
      };

      const { container } = render(<Alert {...alertProps} />);

      expect(container!.getBoundingClientRect().top).toEqual(0);
      expect(container!.getBoundingClientRect().left).toEqual(0);
    });

    it("Window-Fixed Alert to be in sticky position", () => {
      const alertProps: AlertProps = {
        children: <>Текст оповещения</>,
        scheme: "notification",
        type: "window-fixed",
      };

      const { container } = render(
        <div style={{ height: "150vh" }}>
          <Alert {...alertProps} />
        </div>
      );

      fireEvent.scroll(window, { target: { scrollY: "50vh" } });

      expect(container!.getBoundingClientRect().top).toEqual(0);
    });
  });
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
      // i didn't figure out how to implement ref as in stories
      const props: { alerts: AlertProps[]; timeout: number | null } = {
        alerts: alerts,
        timeout: null,
      };

      const { container } = render(<AlertStack {...props} />);

      expect(container.firstChild!.childNodes.length).toEqual(3);
    });

    // it("Alert Stack with timer functionality", async () => {
    //   const props: { alerts: AlertProps[]; timeout: number | null } = {
    //     alerts: alerts,
    //     timeout: 3000,
    //   };

    //   const { container } = render(<AlertStack {...props} />);

    //   expect(container.firstChild!.childNodes.length).toEqual(3);

    //   // jest.setTimeout(5000);

    //   // expect(container.firstChild!.childNodes.length).toEqual(0);
    // });
  });
});
