# Assignment 3 - Replicating a Classic Experiment  

## The Experiment
Link: https://kjmj.github.io/03-Experiment/#/

We designed a simple experiment to determine if bar, stacked bar, or pie charts are the best. The user will be shown a graph with two marked bars/slices. Then, they have to determine which percent the smaller bar/slice is of the larger bar/slice. For example, if the smaller chart is half the size of the larger chart, the user should enter '50'.

Some technical things - there was always one bar/slice in-between the two marked bars/slices, and we chose to exclude any sort of axis's from the charts. The bar chart was rendered upside down, and the stacked bar chart had only one bar. 




## Results

Here is the confidence interval for the three charts. We will talk in more detail about our findings below.

![Confidence Intervals](Experiment-R/Confidence%20Intervals.png)

### Bar
![Bar Chart](assets/bar.png)
- Min: 1.12
- Max: 2.06
- Average Error: 1.571

We thought that bar charts would perform the best, and in our experiment, it did. The bar chart had the lowest error, which is likely due to the fact that it is easiest for people to line up the bar heights.


### Pie
![Pie Chart](assets/pie.png)
- Min: 1.76
- Max: 2.89
- Average Error: 2.339

In second place is the pie chart. It had a higher average error than the bar chart at 2.339. Pie charts can be decieving, and while they may be good for representing a few categories, they don't always give the most accurate representation of your data.

### Stacked Bar
![Stacked Bar Chart](assets/stacked-bar.png)
- Min: 2.23
- Max: 3.33
- Average Error: 2.811

The worst graph type that we tested was the stacked bar chart, with an average error of 2.811. For many people, it was hard to compare the stacked bars since you can't really line the top of the bars up easilly. We generally wouldnt reccomend the use of the stacked bar chart.

## Technical Achievements
1. We used react.js to create our website. This was a learning experience for both of us, but it served as a good intro to these component based frameworks.
2. We ensure that user input is a valid number between 0 and 100, and don't let them continue to the next graph unless their input is good

## Design Achievements
1. We implemented a navbar, which was tougher than expected. GitHub pages didnt play well with our original implementation, so we ended up using a [HashRouter](https://reacttraining.com/react-router/web/api/HashRouter)

## Project Setup

From the root directory:

`yarn install`

Install all dependencies for this project

`yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Other Scripts

You can also run these scripts from the root directory:

`yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

`predeploy`

Build the app for deployment. Run before `deploy`

`deploy`

Deploys the latest build to github pages. Note that the gh-pages branch is deployed, and not master