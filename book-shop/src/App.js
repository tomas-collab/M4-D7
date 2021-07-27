import './App.css';
import BookList from './components/BookList';
import MyBadge from './components/MyBadge';
import WarningSign from './components/WarningSign';
import CommentForm from './components/CommentForm';
import Comments from './components/comments';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'


function App() {
  return (
    <Router>
  <Switch>
      <Route path='/Details/:asin' >
        <Comments/>
        <CommentForm/>
      </Route>
      <Route path='/'>
        <BookList/>
      </Route>

   
  </Switch>
  </Router>
 

    
  );
}

export default App;