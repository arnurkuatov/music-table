import React from 'react';
import FilterView from './view';

const Filter = ({ filters }) => {
  return (
    <div className="filter">
      {filters.map((filter, idx) => {
        const { column: { Header } } = filter.props;

        return (
          <div className="row" key={idx}>
            <div className="col">
              <h5>{Header}</h5>
              <FilterView column={filter.props.column}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
