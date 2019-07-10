## Summary

Built with the following technologies:

- React
- Create React App
- A-Frame
- Zeit Now 2.0
- Google Analytics

## Links
- https://guestexp360.com/cy (Courtyard)
- https://guestexp360.com/ff (Fairfield)
- https://guestexp360.com/fp (Four Points)
- https://guestexp360.com/shs (SpringHill Suites)

## Available Scripts

In the project directory, you can run:

### `yarn install`

Installs dependencies. Run this before using any other commands.

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn deploy`

Builds the app for production and creates a review app using
[Now 2.0](https://zeit.co/now).

The deployment configuration is specified in the `public/now.json` file.

### `yarn alias`

Aliases the review app build under the `guestexp360.com` domain.

For a production deployment, you should run the following command:

```
yarn deploy && yarn alias
```

## Author

Zachary McNellis (zacharymcnellis@gmail.com)
