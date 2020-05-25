(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{395:function(module,exports,__webpack_require__){__webpack_require__(396),__webpack_require__(542),__webpack_require__(543),module.exports=__webpack_require__(813)},460:function(module,exports){},543:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(0);var _storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(123),_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(386),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(169);__webpack_require__(809);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_2__.withA11y),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs)},813:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(123);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(815)],module)}.call(this,__webpack_require__(814)(module))},815:function(module,exports,__webpack_require__){var map={"./AppNavbar.stories.js":837};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=815},837:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"loggedOut",(function(){return loggedOut})),__webpack_require__.d(__webpack_exports__,"loggedIn",(function(){return loggedIn}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(169),next_link=(__webpack_require__(90),__webpack_require__(178)),link_default=__webpack_require__.n(next_link),Container=__webpack_require__(392),Navbar=__webpack_require__(127),NavDropdown=__webpack_require__(239),Nav=__webpack_require__(128),Button=__webpack_require__(175),Image=__webpack_require__(393),_ref=(react_default.a.createElement,react_default.a.createElement(link_default.a,{href:"/",passHref:!0},react_default.a.createElement(Navbar.a.Brand,null,"Free From Class"))),_ref2=react_default.a.createElement(Navbar.a.Toggle,null),_ref3=react_default.a.createElement(link_default.a,{href:"/my-schedule",passHref:!0},react_default.a.createElement(Nav.a.Link,null,"My Schedule")),_ref4=react_default.a.createElement(link_default.a,{href:"/groups-management",passHref:!0},react_default.a.createElement(Nav.a.Link,null,"Groups Management")),_ref5=react_default.a.createElement(NavDropdown.a.Item,{className:"text-danger",href:"/api/logout"},"Logout"),_ref6=react_default.a.createElement(Button.a,{"data-cy":"login",href:"/api/login"},"Login");function AppNavbar(props){var user=props.user;return react_default.a.createElement(Navbar.a,{expand:"lg",className:"nav"},react_default.a.createElement(Container.a,null,_ref,_ref2,react_default.a.createElement(Navbar.a.Collapse,{className:"justify-content-end"},react_default.a.createElement(Nav.a,{className:"mr-auto"},user&&_ref3,user&&_ref4),react_default.a.createElement(Nav.a,null,user?react_default.a.createElement(NavDropdown.a,{title:react_default.a.createElement(react_default.a.Fragment,null,"Hi, ",user.name,react_default.a.createElement(Image.a,{className:"ml-2",src:user.picture,width:24,height:24}))},_ref5):_ref6))))}AppNavbar.displayName="AppNavbar",AppNavbar.__docgenInfo={description:"",methods:[],displayName:"AppNavbar"};var components_AppNavbar=AppNavbar;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/AppNavbar.js"]={name:"AppNavbar",docgenInfo:AppNavbar.__docgenInfo,path:"components/AppNavbar.js"});react_default.a.createElement,__webpack_require__(382).withSource;var addSourceDecorator=__webpack_require__(382).addSource,__SOURCE_PREFIX__="/home/claremboyle/Documents/GitHub/cs48/project-s2-t2-free/stories",__STORY__='import React from "react";\nimport { select, text } from "@storybook/addon-knobs";\nimport AppNavbar from "../components/AppNavbar";\n\nexport default {\n  title: "AppNavbar",\n  component: AppNavbar,\n};\n\nexport const loggedOut = () => {\n  return <AppNavbar />;\n};\n\nexport const loggedIn = () => {\n  const name = text("Name", "Phill Conrad");\n  const user = { name };\n  return <AppNavbar user={user} />;\n};\n',__ADDS_MAP__={"appnavbar--logged-out":{startLoc:{col:25,line:10},endLoc:{col:1,line:12},startBody:{col:25,line:10},endBody:{col:1,line:12}},"appnavbar--logged-in":{startLoc:{col:24,line:14},endLoc:{col:1,line:18},startBody:{col:24,line:14},endBody:{col:1,line:18}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={},AppNavbar_stories_ref=(__webpack_exports__.default={parameters:{storySource:{source:'import React from "react";\nimport { select, text } from "@storybook/addon-knobs";\nimport AppNavbar from "../components/AppNavbar";\n\nexport default {\n  title: "AppNavbar",\n  component: AppNavbar,\n};\n\nexport const loggedOut = () => {\n  return <AppNavbar />;\n};\n\nexport const loggedIn = () => {\n  const name = text("Name", "Phill Conrad");\n  const user = { name };\n  return <AppNavbar user={user} />;\n};\n',locationsMap:{"appnavbar--logged-out":{startLoc:{col:25,line:10},endLoc:{col:1,line:12},startBody:{col:25,line:10},endBody:{col:1,line:12}},"appnavbar--logged-in":{startLoc:{col:24,line:14},endLoc:{col:1,line:18},startBody:{col:24,line:14},endBody:{col:1,line:18}}}}},title:"AppNavbar",component:components_AppNavbar},react_default.a.createElement(components_AppNavbar,null)),loggedOut=addSourceDecorator((function(){return AppNavbar_stories_ref}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/AppNavbar.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),loggedIn=addSourceDecorator((function(){var name=Object(dist.text)("Name","Phill Conrad");return react_default.a.createElement(components_AppNavbar,{user:{name:name}})}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/AppNavbar.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})}},[[395,1,2]]]);
//# sourceMappingURL=main.36c03380f0c5a94f165b.bundle.js.map