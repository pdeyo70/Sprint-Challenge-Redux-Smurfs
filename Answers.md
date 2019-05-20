1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Object.assign(), Array.map(), and Array.concat(), are three methods that do not produce side effects.

We use the class method with the extends keyword to extend object functionality.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects that send data to the store.

Reducers are functions that take two arguments, the current state and the action, and return a new state.

The store is an object that holds and maintains the application's state.

The store is the single source of truth because it supplies the state for the entire application to access.


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is available to the whole application where component state is local to the component.

4.  What is middleware?

Middleware is code that is interposed between the actions and the reducers; it can intercept and change actions based on current state.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

'redux-thunk' allows us to make asycnronous calls between the action and reducer stages of the redux cycle. It can dispatch different 'action-creators' based on provided conditions.

6.  Which `react-redux` method links up our `components` with our `redux store`?

The connect() method links components to the store.
