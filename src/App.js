import './App.css';
import TableOfContent from "./components/toc/TableOfContent";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Router, useHistory} from "react-router-dom";
import ChosenMovie from "./components/chosen/ChosenMovie";


function App() {

  return (

      <BrowserRouter>
          <div className= "app">
              <Route path="/" exact component={TableOfContent}/>
              <Route path="/:id" exact component={ChosenMovie}/>
          </div>
      </BrowserRouter>
  );
}

export default App;
