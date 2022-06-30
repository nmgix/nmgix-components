import { fireEvent, render } from "@testing-library/react";
import { Alert } from "../../Alert";
import { AlertProps } from "../../types";

jest.useRealTimers();

describe("Alerts/Functional", () => {
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
});
