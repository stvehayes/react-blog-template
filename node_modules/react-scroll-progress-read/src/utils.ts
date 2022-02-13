/**
 * get the scroll of page
 * @return {number}
 */
export const getScrollPage = (): number => {
  let docScrollTop = 0;
  if (document.documentElement && document.documentElement !== null) {
    docScrollTop = document.documentElement.scrollTop;
  }
  return window.pageYOffset || docScrollTop;
};

/**
 * round number
 *
 * @param number - number
 * @return {number}
 */
export const fixed = (number: number, to = 5) => Number(number.toFixed(to));

/**
 * get height of element
 *
 * @param el - html element
 * @return {number}
 */
export const outerHeight = (el: HTMLElement): number => {
  let height = el.offsetHeight;

  const style = window.getComputedStyle(el);
  const { marginBottom, marginTop } = style;
  if (marginBottom && marginTop) {
    height += parseInt(marginTop, 10) + parseInt(marginBottom, 10);
  }
  return height;
};
