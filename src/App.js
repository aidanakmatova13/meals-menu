import Meals from "./Meals";
import MealDetails from "./MealDetails";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
      <>
    <Router>
      <Route exact path='/'><Meals/></Route>
      <Route path='/meal/:id'><MealDetails/></Route>
    </Router>
      </>
  );
}

export default App;