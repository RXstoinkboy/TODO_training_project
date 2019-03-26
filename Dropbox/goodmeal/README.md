# RXstoinkboy portfolio

## About

This is my first serious application build using `React` and `React-router`. Please do not be super surprised to see that it is not organised the best ever, but I tried my best.

I wanted to make it as fast as possible withoud too much addtional loading time. I optimized images using `Gimp`. Additionally, `Lazy-loading` is used for additional performance boost. Any time, when there is loading necessary, you will see appropriate little animation.

I am not designer. For this purpose I based heavily on [Faicco's Italian Restaurant Parallax](https://dribbble.com/shots/2052368-Faicco-s-Italian-Restaurant-Parallax) design by [Virgil Pana](https://dribbble.com/virgilpana), which I found on [dribbble](https://dribbble.com/). Please check it out. His designs are super awsome. I tried to recreate his design for home page. On rest of them I used my own invention. You can immediatel tell the difference :).

### Routing
For routing served by browser I used `React` router. I tried to implement some nice transition effect between each routing directory but for some reason it caused error with my `Google Map`. I still haven't found solution for it.

Server side routing fixed with `_redirects` file.

### Data flow

For state management and data flow I used only vanilla `React`. Haven't implemented `Redux` or `Context API` becasue with this project I wanted to make sure that I understand `React` data flow well enough.

### Styling and animations
For this purpose I used `styled components`, `Pose` from `Popmotion`, `React-reveal`. Each of them is great in something else. I tried to compine their powers and basically use whichever was most comfortable for me at a given moment.

Parallax effect prepared without any additional libraries. Only pure `React` and `styled-components`.

### Reservation and form
I used 'vanilla React' for form and `Flatpickr` for data picking plugin. Basically, the whole form and booking of restaurant is working app. It just has to be connected to backend, though I still can't do it. On `Netlify` form can also be connected their own form submision technology. It can be done anytime basically.

### Maps
Were prepared with awsome `Google Maps API`. I have used custom theme, marker and added a simple animation on maps load. 

I have also included a popup InfoModal within the map. This was pretty cool for me even if it is not much advanced.

### Recipes

You can browse your favorite recipes and get some usful information about them in Recipes section. It is just a very simple tool for fetching recipes.

### Preview
You can watch working version here:
[watch preview](https://goodmeal.netlify.com/)

## Config
The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage
These are instructions needed for you in order to download this repo and run it on your local machine.

### Prerequistes
In order to run this repository and modify it you need [**NodeJS**][2] and **npm package manager** installed on you computer. 

### Installing

1. Clone the repo to your local environment:
```
git clone https://github.com/RXstoinkboy/goodmeal.git
```

2. Install all dependencies used for building this project:
```
npm install
```

3. Run the local server with and start working on the project:
```
npm start
```

4. To prepare a production build:
```
npm run build
```

5. Feel free to modify the code and see he changes updated live in your browser. 

## Technology
1. [ES6][3] - used mostly 2015+ syntax in this project
2. [React][2] - JS open library to build awsome UIs.
3. [React-Router][7] - for routing in browser.
4. [styled-components][8] - library for using CSS in JS.
5. [Pose][9] - awsome library for preparing easy to use animations from Popmotion.
6. [react-reveal][10] - very easy to use library for animations.
7. [webpack][4] + [Babel][5] - JS boundler and transpiling tool.
8. [Eslint][6] - style checker for JS syntax.
9. [Flatpickr][11] - great data picker.
10. [Unsplash][12] - extremly powerful source of pictures. Many thank for their team and all authors for allowing to use it by devs.
11. [Google Maps API][13] - google maps API
12. [Food2Fork][14] - great library with tons of recipes

## License

This project is licensed under the MIT License - details in [LICENSE.md][1] file.

[1]: https://github.com/RXstoinkboy/rxstoinkboy/blob/master/LICENSE.md
[2]: https://nodejs.org/en/
[3]: https://www.ecma-international.org/default.htm
[4]: https://webpack.js.org/
[5]: https://babeljs.io/
[6]: https://eslint.org/
[7]: https://github.com/ReactTraining/react-router
[8]: https://www.styled-components.com/
[9]: https://popmotion.io/pose/
[10]: https://www.react-reveal.com/
[11]: https://flatpickr.js.org/
[12]: https://unsplash.com/
[13]: https://cloud.google.com/maps-platform/
[14]: https://www.food2fork.com/about/api

## Available Scripts

Just like in any 'create-react-app' you can use following scripts in your directory:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
