import React from 'react';

const Thead = ({headerGroups}) => {
  return (
    <thead className="thead-dark">
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(col => (
            <th {...col.getHeaderProps(col.getSortByToggleProps())}>
              {col.render('Header')}
              <span>{col.isSorted ? (col.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default Thead;
