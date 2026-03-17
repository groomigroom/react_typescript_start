npx create-react-app . --template typescript로 타입스크립스 리액트 프로젝트 만들기

React에서 빌드(Build) 모드는 개발 중인 코드를 브라우저에서 실행 가능한 최적화된 정적 파일(HTML, CSS, JS)로 변환하여 최고의 성능과 보안을 보장하기 위해 필요합니다. 불필요한 개발 도구, 검증 코드, 소스맵 등을 제거하고 코드를 압축(Minify)하여 앱 속도를 크게 향상시킵니다. 

핵심 이유 요약
성능 최적화 (Optimization): 개발 모드에서는 버그를 찾는 경고 코드 등이 포함되어 있어 무겁지만, 빌드 모드는 이를 제거하고 파일을 압축하여 로딩 시간을 대폭 단축합니다.
브라우저 호환성: 최신 JavaScript 문법을 구형 브라우저에서도 작동하도록 컴파일(Babel 등)하여 배포 가능한 형태로 변환합니다.
파일 크기 축소: 여러 모듈로 나뉜 코드를 번들링(Webpack 등)하여 하나의 파일로 묶고 크기를 줄여 네트워크 비용을 최소화합니다.
보안: 소스 코드 노출을 줄이고, 개발자 도구의 StrictMode 등 개발 전용 기능을 제외합니다. 

따라서, npm run build 명령을 통해 실제 운영 환경(Production)에 맞는 경량화된 앱을 생성하여 사용자에게 빠른 속도로 서비스를 제공할 수 있습니다

npm run deploy 내부의 빌드 자동화 (predeploy) 
대부분의 리액트 배포 가이드는 package.json 파일의 scripts 항목을 다음과 같이 설정하도록 합니다.
json
"scripts": {
  "predeploy": "npm run build", // 배포 전에 build 명령을 자동으로 실행
  "deploy": "gh-pages -d build" // build 폴더를 배포
}

#####

npm install -g serve
serve -s build의 의미?

이 명령어는 리액트 프로젝트를 실제 서비스 환경(Production)과 유사하게 로컬에서 실행해보기 위해 사용하는 명령어입니다.
보통 npm run build를 통해 생성된 결과물을 확인하기 위해 사용하며, 크게 두 부분으로 나뉩니다.
1. npm install -g serve
의미: serve라는 패키지를 전역(-g, global)으로 설치합니다.
역할: serve는 정적 파일(HTML, CSS, JS 등)을 웹 서버로 띄워주는 간단하고 강력한 도구입니다. 

2. serve -s build
의미: build 폴더의 내용을 서버로 실행하되, 싱글 페이지 애플리케이션(SPA) 설정을 적용합니다.
옵션 상세:
build: 리액트에서 npm run build를 실행하면 생성되는 폴더 이름입니다. 최적화된 배포용 파일들이 들어있습니다.
-s (Single-page helper): 리액트와 같은 SPA에서 경로를 이동(Routing)할 때, 브라우저가 특정 주소를 찾지 못하면 다시 index.html로 연결해주는 옵션입니다. 
왜 사용하나요?
리액트 개발 중에는 npm start를 쓰지만, 이는 개발 편의를 위한 서버일 뿐입니다. 실제로 사용자에게 서비스할 때는 빌드된 파일이 정상적으로 작동하는지 확인해야 하는데, 이때 가장 간편하게 서버를 띄워주는 방법이 이 명령어입니다. 
더 궁금하신 점이나 빌드 과정에서 발생한 오류가 있으신가요?



결론부터 말씀드리면, GitHub Pages로 배포할 때는 serve 명령어가 전혀 필요하지 않습니다.
그 이유는 serve와 GitHub Pages의 역할이 다르기 때문입니다.
1. serve가 필요 없는 이유
serve: 내 컴퓨터(Local)를 임시 서버로 만들어 빌드된 파일을 확인하는 도구입니다.
GitHub Pages: GitHub에서 제공하는 실제 웹 호스팅 서비스입니다.
GitHub Pages 자체가 서버 역할을 수행하므로, 별도의 서버 실행 도구인 serve를 설치하거나 실행할 필요가 없습니다.

#####

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
