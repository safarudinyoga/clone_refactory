import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home'
import Login from './Login'
import Courses from './Courses'
import ListCourses from './ListCourses'

const App = props => {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route strict exact path="/" component={Home} />
          <Route strict exact path="/login" component={Login} />
          <Route strict exact path="/courses" component={Courses} />
          <Route strict exact path="/list-courses" component={ListCourses} />
        </Switch>
      </BrowserRouter>
    </main>
  )
}

App.propTypes = {

}

export default App
