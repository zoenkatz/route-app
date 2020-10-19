import React, {useContext} from 'react';
import {DebounceInput} from "react-debounce-input";
import RouteDetailsContext from "../RouteDetailsContext";

const RouteDetailsFilter = () => {
    const {state, dispatch} = useContext(RouteDetailsContext);

    return (
        <div className="route-filter">
            <div className="route-filter-fill">
                <div className="route-filter-search">
                    <DebounceInput type="search"
                                   list="last-queries"
                                   placeholder="Search"
                                   id="route-search"
                                   name="q"
                                   onFocus={(event) => event.target.placeholder = ""}
                                   onBlur={(event) => event.target.placeholder = "Search"}
                                   value={state.query}
                                   minLength={1}
                                   debounceTimeout={300}
                                   onChange={(event) => {
                                       dispatch({type: 'SET_SEARCH_QUERY', payload: {query: event.target.value}})
                                   }}
                    />
                </div>
                <div className="route-filter-PII">
                    <input type="checkbox" name="checkbox-pii" checked={state.isPIIOnly} onChange={(event) => dispatch({
                        type: 'PII_ONLY',
                        payload: {isPIIOnly: !!event.target.checked}
                    })}/>
                    <label>Show PII only</label>
                </div>
                <div className="route-filter-apply">
                    <button>APPLY</button>
                </div>
            </div>
            <div className="route-filter-reset">
                <input type="button" name="reset-filter" value="Reset Filter"
                       onClick={() => dispatch({type: 'RESET_FILTER', payload: {isPIIOnly: false, query: ''}})}/>
            </div>
        </div>
    );
}

export default RouteDetailsFilter;
