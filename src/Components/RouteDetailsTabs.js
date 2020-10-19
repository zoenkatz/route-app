import React, {useContext} from 'react';
import RouteDetailsContext from "../RouteDetailsContext";

const RouteDetailsTabs = () => {
    const {state, dispatch} = useContext(RouteDetailsContext);
    return (
        <div className="route-tabs">
            <div className={`route-tabs ${state.activeTab === 'request' ? 'active' : ''}`}
                 onClick={() => dispatch({type: 'SET_ACTIVE_TAB', payload: {activeTab: 'request'}})}>Request</div>
            <div className={`route-tabs ${state.activeTab === 'response' ? 'active' : ''}`}
                 onClick={() => dispatch({type: 'SET_ACTIVE_TAB', payload: {activeTab: 'response'}})}>Response</div>
        </div>
    )
};

export default RouteDetailsTabs;
