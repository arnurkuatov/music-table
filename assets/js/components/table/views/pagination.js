import React from 'react';

const Pagination = ({
    canPreviousPage,
    previousPage,
    pageOptions,
    pageIndex,
    gotoPage,
    canNextPage,
    nextPage,
  }) => {
  return (
    <nav aria-label="Table navigation">
      <ul className="pagination">
        <li className={`page-item ${!canPreviousPage ? ' disabled' : ''}`}>
          <a className="page-link" onClick={() => previousPage()}>&laquo;</a>
        </li>
        {pageOptions.map(p => (
          <li className={`page-item ${pageIndex === p ? ' active' : ''}`}>
            <a className="page-link" onClick={() => gotoPage(p)}>{p + 1}</a>
          </li>
        ))}
        <li className={`page-item ${!canNextPage ? ' disabled' : ''}`}>
          <a className="page-link" onClick={() => nextPage()}>&raquo;</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
