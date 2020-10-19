import React, {useContext} from 'react';
import RouteDetailsContext from "../RouteDetailsContext";

const RouteDetailsHeader = () => {
    const {state} = useContext(RouteDetailsContext);
    return (
        <div className="route-header">
            <div className="route-header-request">
                <div className="route-header-request-type">
                    {state.method.toUpperCase()}
                </div>
                <div className="route-header-request-path">
                    {state.path}
                </div>
            </div>
            <div className="route-header-navigator">
                <div>{`All APIs > ${state.api} > ${state.path}`}</div>
            </div>
        </div>
    )
};

export default RouteDetailsHeader;
