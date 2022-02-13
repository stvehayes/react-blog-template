## React Component for show progress bar connected with the scroll.

When you scroll on the page, the bar indicate the progression on the page.

Doc : [https://react-scroll-progress-read.faramazpat.now.sh/](https://react-scroll-progress-read.faramazpat.now.sh/)

npm package : [https://www.npmjs.com/package/react-scroll-progress-read](https://www.npmjs.com/package/react-scroll-progress-read)

### React version required

Version 16.8 for use React Hook

### For include in your project

```jsx
import ScrollProgressRead from 'react-scroll-progress-read';

...
render() {
  <div>
  <ScrollProgressRead />
  ....
  </div>
}
```

### Props config

By default, the bar take the window height. If you want target an html element, you must indicate the ID of the element in props with "target"

You can change parameter with the props :

- backgroundColor (string) : color of the container
- barColor (string) : color of the bar
- height (string) : height of the component.
- target (string) : ID of html element
- refTarget (React.RefObject) : reference to react element

The props aren't required.

if not ref target, the component use target ID and if target is undefined, the component use the document.

```jsx
import ScrollProgressRead from 'react-scroll-progress-read';

...
render() {
  <div>
  <ScrollProgressRead
    backgroundColor="#CCC"
    barColor="#FFCC00"
    height="5px"
    target="read-container"
    refTarget={refContainer}
  />
  ....
  </div>
}
```
