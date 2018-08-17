## Summary

This project was forked from [Drift / Surf-Videos](https://github.com/Driftt/Surf-Videos) and fulfills the following requirements:

- [x] have a home page that lists and either paginates or infinite scrolls surf videos
- [x] allow videos to be opened in a new page to play
- [x] allow search within the category (ex: q = surf + query)
- [x] show description/title/thumbnail per video on home page

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and [material-ui v0.20.1](https://v0.material-ui.com/)

## To Test: 
1. `yarn install` or `npm install`
1. `export REACT_APP_YOUTUBE_API_KEY=AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo`
1. `yarn start` or `npm start`

## Future work:
- add tests
- add Typechecking With PropTypes
- address edge case where user reaches end of infinite load
- make app responsive for mobile screen sizes
- refactor `HomePage` and `App` container by eliminating `HomePage`. It proved not to be useful
- validate user input into Search
- apply styling to `AppBase`, `VideoDetailPage`; style fonts
- make Title text in `SearchBar` link to `HomePage`
- add `404` page when user attempts to navigate to unknown location
- limit unecessary re-renders
- configure tree-shaking for webpack bundle via dynamic imports
- address extra-credit requirements: 
  + show comments on video detail page
  + show videos from same author on detail page
  + allow for sorting and advanced filtering on home page
  + make it sexy
  + go crazy with available end points


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.