export function scrollToBottomSafari(element) {
  const step = document.body.scrollHeight / 10;
  let counter = 1 + Math.floor(element.scrollTop / step);
  const interval = setInterval(() => {
    element.scrollTo(0, (document.body.scrollHeight / 10) * counter);
    if (counter === 8) {
      element.scrollTo(0, document.body.scrollHeight);
      clearInterval(interval);
    }
    counter++;
  }, 20);
}
