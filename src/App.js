import React, {useContext, useReducer} from 'react';
import RouteDetailsContext from './RouteDetailsContext';
import RouteDetailsReducer from './RouteDetailsReducer';
import RouteDetailsTabs from './Components/RouteDetailsTabs';
import RouteDetailsHeader from './Components/RouteDetailsHeader';
import RouteDetailsFilter from './Components/RouteDetailsFilter';
import RouteDetailsTable from './Components/RouteDetailsTable';
import './App.scss';

function App() {
  const initialState = useContext(RouteDetailsContext);
  const [state, dispatch] = useReducer(RouteDetailsReducer, initialState, undefined);
  return (
      <RouteDetailsContext.Provider value={{state, dispatch}}>
        <div className="App">
          <RouteDetailsHeader/>
          <RouteDetailsTabs/>
          <div className="route-body">
            <RouteDetailsFilter/>
            <RouteDetailsTable/>
          </div>
        </div>
      </RouteDetailsContext.Provider>
  );
}

export default App;
