import React, {useContext, useMemo} from 'react';
import RouteDetailsContext from "../RouteDetailsContext";

const RouteDetailsTabs = () => {
    const {state, dispatch} = useContext(RouteDetailsContext);
    const {activeTab} = state;

    return useMemo(() => {
        return (
            <div className="route-tabs">
                <div className={`route-tabs ${activeTab === 'request' ? 'active' : ''}`}
                     onClick={() => dispatch({type: 'SET_ACTIVE_TAB', payload: {activeTab: 'request'}})}>Request
                </div>
                <div className={`route-tabs ${activeTab === 'response' ? 'active' : ''}`}
                     onClick={() => dispatch({type: 'SET_ACTIVE_TAB', payload: {activeTab: 'response'}})}>Response
                </div>
            </div>
        )
    }, [dispatch, activeTab]);
};

export default RouteDetailsTabs;
