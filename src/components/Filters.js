import React from 'react'
import _ from "lodash";

const Filters = ({ FilterDetails, FilterName, FilterDataArray, updateFilter }) => {
    //FilterDetails -> Filter array 
    //FilterName -> name of the filter
    //FilterDataArray -> Array of object that we have to perform filter on. eg: blog , therapists 
    //callback method used to pass the update props to parent components
    const filterHandler = (e, item) => {

        let filter = _.filter(FilterDataArray, (obj) => _.indexOf(obj.Filter, item.Filter) !== -1);
        if (item === 'all') {
            filter = FilterDataArray;
        }
        updateFilter(filter);
    }
    return (
        <div className="filter">
            <span className="blog-filter-name ">{FilterName}</span>
            <li onClick={e => filterHandler(e, 'all')}><span>All</span></li>
            {FilterDetails.map((item, index) => {
                return (<li key={index} onClick={e => filterHandler(e, item)}><span>{item.name}</span></li>)
            })}
        </div>
    )
}

export default Filters