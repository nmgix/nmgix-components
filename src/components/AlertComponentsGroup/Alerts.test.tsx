import { screen, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Alert } from "./Alert";
import { AlertProps, AlertRef, AvailableSchemes } from "./types";
import { AlertStack } from "./AlertStack/AlertStack";
import { forwardRef } from "react";

jest.mock("react", () => {
  const actualModule = jest.requireActual("react");
  return {
    ...actualModule,
    useRefMock: jest.fn(),
  };
});

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
      expect(alertHeaderComponent!.getBoundingClientRect().top).toBe(0);
    });

    it("Fixed Alert to be in top", () => {
      const alertProps: AlertProps = {
        children: <>Текст оповещения</>,
        scheme: "notification",
        type: "fixed",
      };

      const { container } = render(<Alert {...alertProps} />);

      expect(container!.getBoundingClientRect().top).toBe(0);
      expect(container!.getBoundingClientRect().left).toBe(0);
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

      expect(container!.getBoundingClientRect().top).toBe(0);
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
    const mockRef: { current: AlertRef } = { current: { addAlert: (alert: AlertProps) => {}, removeAlert: () => {} } };

    it("Alert Stack no timer functionality", () => {
      // const { container } = render(<AlertStack alerts={alerts} timeout={null} />);

      const Component = forwardRef<AlertRef>((props, ref) => (
        <AlertStack alerts={alerts} timeout={null} ref={mockRef} />
      ));
      const { container } = render(<Component />);

      expect(container.firstChild!.childNodes.length).toBe(3);

      // const randomNum = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);
      // const availableSchemes = Object.keys(AvailableSchemes).filter(
      //   (key) => !isNaN(Number(AvailableSchemes[key as keyof typeof AvailableSchemes]))
      // );

      // mockRef.current?.addAlert({
      //   children: <>Текст уведомления</>,
      //   scheme: availableSchemes[randomNum(0, availableSchemes.length)] as keyof typeof AvailableSchemes,
      //   type: "fixed",
      // });

      // console.log(container.firstChild!.childNodes.length);

      // expect(container.firstChild!.childNodes.length).toBe(4);
    });
  });
});
