import React, {useContext, useMemo} from 'react';
import RouteDetailsContext from "../RouteDetailsContext";

const RouteDetailsHeader = () => {
    const {state} = useContext(RouteDetailsContext);
    const {method, path, api} = state;
    return useMemo(() => {
        return (
            <div className="route-header">
                <div className="route-header-request">
                    <div className="route-header-request-type">
                        {method.toUpperCase()}
                    </div>
                    <div className="route-header-request-path">
                        {path}
                    </div>
                </div>
                <div className="route-header-navigator">
                    <div>{`All APIs > ${api} > ${path}`}</div>
                </div>
            </div>
        )
    }, [method, api, path]);
};

export default RouteDetailsHeader;
