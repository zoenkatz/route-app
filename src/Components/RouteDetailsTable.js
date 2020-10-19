import React, {useContext, useMemo} from 'react';
import RouteDetailsContext from "../RouteDetailsContext";

const RouteDetailsTable = () => {
    const {state} = useContext(RouteDetailsContext);
    const {isPIIOnly, activeTab, query} = state;
    return useMemo(() => {
        return (
            <div className="route-table">
                <div className="route-table-header">
                    <div className="route-name">NAME</div>
                    <div className="route-pii">PII</div>
                    <div className="route-masking">MASKING</div>
                    <div className="route-type">TYPE</div>
                </div>
                <div className="route-table-body">
                    {Object.keys(state[state.activeTab]).map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="route-table-body-category">
                                    <div className="route-table-body-category-icon"></div>
                                    <div className="route-table-body-category-title">{item}</div>
                                </div>
                                <div className="route-table-body-category-rows">
                                    {state[state.activeTab][item].filter(requestItem => {
                                        return ((requestItem.name.toLowerCase().indexOf(state.query.toLowerCase()) > -1 || requestItem.type.toLowerCase().indexOf(state.query.toLowerCase()) > -1)
                                            && (!!state.isPIIOnly ? !!requestItem.pii : true))
                                    }).map((requestItem, index) => {
                                        return (
                                            <div key={index}>
                                                <div className="route-table-body-category-row">
                                                    <div className="name-cell">{requestItem.name}</div>
                                                    <div
                                                        className={`pii-cell ${!!requestItem.pii ? 'active' : ''}`}>PII
                                                    </div>
                                                    <div
                                                        className={`masked-cell ${!!requestItem.masked ? 'active' : ''}`}>MASKED
                                                    </div>
                                                    <div className="type-cell">{requestItem.type}</div>
                                                </div>
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    },[isPIIOnly, activeTab, query])
};

export default RouteDetailsTable;
