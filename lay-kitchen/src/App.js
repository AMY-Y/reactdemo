import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import Admin from './admin'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Search from './pages/Search'
import NoMatch from './pages/NoMatch'
import Bake from './pages/Bake'
import Breakfast from './pages/Breakfast'
import Fish from './pages/Fish'
import Noodles from './pages/Noodles'
import Soup from './pages/Soup'
import Staple from './pages/Staple'
import Vegetarian from './pages/Vegetarian'
import Meal from './pages/Ordinary/meal'
import Quick from './pages/Ordinary/quick'
import Beef from './pages/Meat/beef'
import Chicken from './pages/Meat/chicken'
import Duck from './pages/Meat/duck'
import Mutton from './pages/Meat/mutton'
import Pock from './pages/Meat/pock'
import Fruites from './pages/Vegetables/fruits'
import Leaves from './pages/Vegetables/leaves'
import Mushrooms from './pages/Vegetables/mushrooms'
import Roots from './pages/Vegetables/roots'

class App extends Component{
  render(){
    return (
      <Router>
        <Admin>
          <Switch>
            <Route 
            path='/common'
            render={()=>(
              <Route path='/common/detail/:id' component={Detail}/>
            )}
            />
            <Route path='/search' component={Search}/>
            <Route path='/topic' component={NoMatch}/>
            <Route path='/menu' component={NoMatch}/>
            <Route path='/collections' component={NoMatch}/>
            <Route path='/user' component={NoMatch}/>
            <Route path='/tags' component={NoMatch}/>
            <Route path='/' 
            render={()=>(
              <Switch>
                <Route path='/home' component={Home}></Route>
                <Route path='/ordinary/quick' component={Quick}/>
                <Route path='/ordinary/meal' component={Meal}/>
                <Route path='/breakfast' component={Breakfast}/>
                <Route path='/meat/pock' component={Pock}/>
                <Route path='/meat/chicken' component={Chicken}/>
                <Route path='/meat/duck' component={Duck}/>
                <Route path='/meat/beef' component={Beef}/>
                <Route path='/meat/mutton' component={Mutton}/>
                <Route path='/fish' component={Fish}/>
                <Route path='/vegetable/fruites' component={Fruites}/>
                <Route path='/vegetable/roots' component={Roots}/>
                <Route path='/vegetable/mushrooms' component={Mushrooms}/>
                <Route path='/vegetable/leaves' component={Leaves}/>
                <Route path='/soup' component={Soup}/>
                <Route path='/bake' component={Bake}/>
                <Route path='/staple' component={Staple}/>
                <Route path='/noodles' component={Noodles}/>
                <Route path='/vegetarian' component={Vegetarian}/>
                <Redirect path='home'/>


              </Switch>
            )}/>
          </Switch>
        </Admin>
      </Router>
      
    )
  }
}

export default App;
