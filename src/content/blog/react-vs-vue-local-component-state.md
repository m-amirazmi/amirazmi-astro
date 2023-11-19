---
title: "React vs Vue - Local Component State"
description: ""
pubDate: "2023-11-19T05:58:44.199Z"
heroImage: "/images/blog/react-vs-vue-local-component-state.svg"
category: "tutorial"
tags: []
author: 
---
React and Vue are some of the most popular front end frameworks that makes the web application becomes Single Page Application (SPA). Those frameworks using components approach for building UI for web application. So, it is necessary to have some kind of temporary data store for each component that can store any value and update the UI and content based on the value stored.

## How Both Framework Store Temporary Data
Both in React and Vue have their own way to store local component data state but the concept pretty much the same which is to store temporary data for in the component.

### React
In React, they have 2 ways to write a component which are the Class Based component and Functional Based component. The Function Based Component becomes more popular these days after the arrival of the React Hooks including the `useState()` hooks.

First, let see how to store temporary data in Class Based component.

#### Class Based Component

```react
import React, { Component } from 'react'

export default class App extends Component {

  // This is where the temp data stored
  state = {
    input: ''
  }

  componentDidMount() {
    // This is how to save data into the state
    this.setState({
      input: 'Please insert your input'
    })
  }

  render() {
    return (
      <div>
        {/* This is how to use the state */}
        <p>{this.state.input}</p>
      </div>
    )
  }
}

```

The temporary local data for the component will be store in the state object inside the class. Then, the use of 'this' keyword is important when referencing the local state since the state is in the class object.

To store any data into the state, the `this.setState()` method need to be used as the code shown above.

#### Functional Based Component
```react
import React, { useState, useEffect } from 'react'

export const App = () => {
  // This is where the temp data stored
  const [input, setInput] = useState('')

  useEffect(() => {
    // This is how to save data into the state
    setInput('Please insert your input')
  }, [])

  return (
    <div>
      {/* This is how to use the state */}
      <p>{input}</p>
    </div>
  )
}
```

The temporary data for the functional component is being store in the `useState()` hooks. The `useState()` hooks can be used multiple times according on how many state we want in the component.

To use the state, we can directly call the variable that has being use in the `useState()` on top of our component. To update and save a new data to the state, use the `setInput` for example, to update the input state in the component.

### Vue
In Vue, the way the store temporary data quite different (just the codes are different but the concept still the same). In Vue, we are using the `data(){}` function in the component object. Let's look how to use `data()` function.

```vue
<template>
<!-- This is how to use the state -->
  <p>{{input}}</p>
</template>

<script>
export default {
  // This is where the temp data stored
  data(){
    return{
      input: ''
    }
  },
  created(){
    // This is how to save data into the state
    this.input = 'Please insert your input'
  }
}
</script>
```
By local data will be return in as object in the `data()` function inside the component object. Then, to use the state, same as the React functional component, directly call using the state variable.

However, to update the state, the `this` keyword need to be used to access the state in the component object. Simply by reassign the state using `this.[state]`, will automatically update the state into new one.

## Conclusion
Both frameworks have their own way how to store, update and manage the local component state. I believe there are more detailed explanation about state but these are all what I understand through my experience and my self study.

If there are anything missing about local component state for these frameworks, feel free to share in the comment below.

## Reference
1. React Class Component State - https://reactjs.org/docs/faq-state.html
2. React useState - https://reactjs.org/docs/hooks-state.html
3. Vue Data Function - https://vuejs.org/v2/guide/components.html

