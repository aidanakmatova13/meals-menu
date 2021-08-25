import Meals from "./Meals";
import MealDetails from "./MealDetails";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./Header";

function App() {
  return (
      <>
      <Header/>
    <Router>
      <Route exact path='/'><Meals/></Route>
      <Route path='/meal/:id'><MealDetails/></Route>
    </Router>
      </>
  );
}

export default App;