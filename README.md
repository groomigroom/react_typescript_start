npx create-react-app . --template typescript로 타입스크립스 리액트 프로젝트 만들기

React에서 빌드(Build) 모드는 개발 중인 코드를 브라우저에서 실행 가능한 최적화된 정적 파일(HTML, CSS, JS)로 변환하여 최고의 성능과 보안을 보장하기 위해 필요합니다. 불필요한 개발 도구, 검증 코드, 소스맵 등을 제거하고 코드를 압축(Minify)하여 앱 속도를 크게 향상시킵니다. 

핵심 이유 요약
성능 최적화 (Optimization): 개발 모드에서는 버그를 찾는 경고 코드 등이 포함되어 있어 무겁지만, 빌드 모드는 이를 제거하고 파일을 압축하여 로딩 시간을 대폭 단축합니다.
브라우저 호환성: 최신 JavaScript 문법을 구형 브라우저에서도 작동하도록 컴파일(Babel 등)하여 배포 가능한 형태로 변환합니다.
파일 크기 축소: 여러 모듈로 나뉜 코드를 번들링(Webpack 등)하여 하나의 파일로 묶고 크기를 줄여 네트워크 비용을 최소화합니다.
보안: 소스 코드 노출을 줄이고, 개발자 도구의 StrictMode 등 개발 전용 기능을 제외합니다. 

따라서, npm run build 명령을 통해 실제 운영 환경(Production)에 맞는 경량화된 앱을 생성하여 사용자에게 빠른 속도로 서비스를 제공할 수 있습니다

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
