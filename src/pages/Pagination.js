import React from 'react'

function Pagination({ nPages, currentPage, setCurrentPage }) {

    const nextPage = () => {
        if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
  return (
    <nav>
            <ul className='flex pagination justify-content-center'>
                <li className="border page-item">
                    <a className="page-link" 
                        onClick={prevPage} 
                        href='#'>
                        
                        Previous
                    </a>
                </li>
                <li className="border page-item">
                    <a className="page-link" 
                        onClick={nextPage}
                        href='#'>
                        
                        Next
                    </a>
                </li>
            </ul>
    </nav>
  )
}

export default Pagination