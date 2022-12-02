import React from "react"
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import HomePage from './HomePage'
import SearchPage from './SearchPage'
function App() {
  /*
  const [data, setData] = React.useState([{}])
  React.useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  */
  return (
    <Router>
      <div className="content">
        <Switch>
          <Route path="/" 
            element={<HomePage/>}
          />

          <Route path="/search"
            element={<SearchPage/>}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App
