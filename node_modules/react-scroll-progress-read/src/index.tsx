import * as React from "react";
import { fixed, getScrollPage, outerHeight } from "./utils";

interface IScrollProgressProps {
  /** background of container */
  backgroundColor?: string,
  /** color of bar */
  barColor?: string,
  /** height of progress bar */
  height?: string,
  /** ID of target container */
  target?: string,
  /** ref of container */
  refTarget?: React.RefObject<HTMLElement>
}

// for update width
const upSize = (cb: FrameRequestCallback) => window.requestAnimationFrame(cb);

const ScrollProgressRead: React.FC<IScrollProgressProps> = (
  {
    backgroundColor,
    height,
    barColor,
    target,
    refTarget
  }
) => {
  let containerByID: HTMLElement | null;

  // update bar width
  const [scrolled, setScrolled] = React.useState("0%");
  // listen scroll
  React.useEffect(
    () => {
      // find element by ID
      containerByID = target ? document.getElementById(target) : null;
      // update on mount
      updatePos();
      window.addEventListener("scroll", updatePos);
      return () => window.removeEventListener("scroll", updatePos);
    },
    []
  );

  // update width with scroll position
  const updatePos = () => {
    // if ref use it or use container by ID
    const targetContainer = refTarget
      ? refTarget.current
      : // or use container ID
        containerByID ? containerByID : null;

    let elementHeight = 0;
    let startTop = 0;
    // scroll
    const scrollPx = getScrollPage();
    // if targeted element
    if (targetContainer) {
      // element height
      elementHeight = outerHeight(targetContainer) -
        document.documentElement.clientHeight;
      startTop = targetContainer.offsetTop;
    } else {
      // window height
      elementHeight = document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    }
    // remove difference between top window and element
    const _t = fixed(scrollPx - startTop);

    // if before element position when target is element
    if (scrollPx < startTop) {
      return upSize(() => setScrolled("0%"));
    }
    // if after element end
    if (_t > elementHeight) {
      return upSize(() => setScrolled("100%"));
    }
    // position scroll
    const _p = fixed(_t / elementHeight);
    // percentage for css
    const pos = `${fixed(_p * 100)}%`;
    // update scroll
    upSize(() => setScrolled(pos));
  };
  // style for container
  const containerStyle = {
    background: backgroundColor,
    height,
    width: "100vw"
  };
  // style for bar
  const barStyle = {
    height,
    background: barColor,
    width: scrolled
  };
  return (
    <div style={containerStyle}>
      <div style={barStyle} />
    </div>
  );
};

ScrollProgressRead.defaultProps = {
  backgroundColor: "#CCC",
  height: "5px",
  barColor: "#e91e63"
};

export default React.memo(ScrollProgressRead);
