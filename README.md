# About
You can find a demo version of this template [right here](https://sahayes-blog-template.netlify.app/). It is tailored for those looking to generate a blog using markdown. This was created using [Create React App](https://github.com/facebook/create-react-app), [styled-components](https://styled-components.com/), and deployed with [Netlify](https://netlify.com).

## Setup

Assuming that you have the necesary dependancies to start a React app:

* Run `yarn install`.
* Run `yarn start` to start the app.
* Edit the file `src/Data.js` in order to customize the content of your site.

### New Blog Post
* Insert your `{post-name-here}.md` file inside the `posts` folder.
* Edit the file `src/Posts.js` adding the necessary information, including your markdown file location, to generate your post. The `route` and page will be generated based on what's inside `Posts.js`.

Once started, open [http://localhost:3000](http://localhost:3000) to view it in the browser.
