import React from 'react'
import '../Styles/Pagination.css'
import { RiArrowRightSLine } from "react-icons/ri";

const Pagination = () => {
    return (
        <div>
            <div className='page-containers'>
                <div className="page-numbers">
                    <p>Showing<span className='num-pagination'> 1-10 </span> of <span className='num-pagination'>1000</span></p>
                </div>
                <div>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination ul_line">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">...</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Pagination
