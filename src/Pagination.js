import React from 'react'
import './index.css';

export default function Pagination({ gotoNextPage, gotoPrevPage}) {
    return (
        <div>
            {gotoPrevPage && <button onClick={gotoPrevPage} className="load-more" >Previous</button>}
            {gotoNextPage && <button onClick={gotoNextPage} className="load-more" >Next</button>}
        </div>
    )
}
