## FullStack ERRM Boilerplate (Express+React+Redux+MongoDB)

To run:

    $npm i
    $npm run server
    Head over to http://localhost:3000


Welcome To Redux
1. Project structure
    
        Root
        |
        |_models
        |
        |_Public
        |
        |_routes
        |
        |_________src
        |           |
        |           |_actions
        |           |       |_index.js
        |           |
        |           |_Components
        |           |          |_Component
        |           |               |_Component.js <---state-as---props---<--|
        |           |_css           |_ComponentContainer.js(redux-connect)-->|
        |           |
        |           |_reducers
        |           |       | ....n.js
        |           |       |_index.js
        |           |
        |           |_Store
        |           |     |_index.js
        |           |
        |           |_App.js
        |           |_index.js
        |           |_MyAppContainer.js(redux-connect|props to App.js)
        |
        |_views
        |
        |_server.js

2.  `$npm i redux`
3.  Create Store
4.  Create Rducers and combineReducers

         The only way to change the state by seding a signal to the store.
         This signal is an Action
5.  Crate Actions

        Dispatching an action is the process of sending out the signal

## Welcome to react-redux

1.  $`npm i react-redux `
2.  To demonstrate how react-redux works lets build simple Todo app.

        Components:
        1. Todo, list all the Todos
        2. AddTodoForm, adding new Todos

        Most important method you'll work with is connect.

        connect? yes unsurprisingly it connects a react component
        with the redux store.

        The fundamental things to know.
        1. mapStateToProps function
        2. mapDispatchToProps function

3. To start off connecting Redux with React we're going to use Provider.

        Provider is the high order component comming from react-redux

        Provider wraps up your React application and make it ware of the
        entire Redux's Store.

4. Wrap react rentry point with Provider.

        In my case entry point src/index.js

5.  * Render MyAppContainer instead App
    * MyAppContainer connect to state and pass the same to App as props


## Welcome to Redux-DevTools

$`npm -S--dev redux-logger reduxdev-tools-log-monitor redux-devtools-dock-monitor redux-devtools`

        Why dev tools ?
        Well that will show us whats happening with our app state
        you can track and minitor your app state.

