import React, { useCallback } from "react";
import Button from "../../Button";
import './style.scss';

interface PagingProps {
    page: number,
    limit: number,
    total: number,
    onClick: (page: number) => void
}
 
const Paging: React.FC<PagingProps> = ({
    page = 1,
    limit,
    total = 0,
    onClick
}) => {

    const pageCounts = limit > 0 ? Math.floor(total / limit) + ((total % limit) > 0 ? 1 : 0) : 0;

    let pages = [];
    let startPage = (page - 3);
    let lastPage = 0;
    for(let i = startPage <= 0 ? 1 : startPage ; i <= pageCounts && pages.length < 7; i++ ){
        pages.push(i);
        lastPage = i;
    }

    if(lastPage < pageCounts){
        pages.push(-1)
        let lastThree = pageCounts-3
        for(let i = lastThree ; i < pageCounts && i > lastPage; i++ ){
            pages.push(i)
        }
    }

    const onPageClick = useCallback((page) => {
        onClick(page);
        document.getElementById('top-pos')?.scrollIntoView({ 
            behavior: 'smooth' 
        });
    }, [onClick]);

    return (
        <div className="paging">
            {pages.indexOf(1) === -1 && <Button type="page-btn" key="first" onClick={() => onPageClick(1)}>&lt;</Button>}
            { 
                pages.map((p) => {
                    const btnType = (p === page)? "page-btn-sel" : "page-btn";
                    if(p === -1)
                        return <Button type={btnType} key={p} onClick={() => false}>{`....`}</Button>
                    else
                        return <Button type={btnType} key={p} onClick={() => onPageClick(p)}>{p.toString()}</Button>
                }) 
            }
            {pages.indexOf(pageCounts) === -1 && <Button type="page-btn" key="last" onClick={() => onPageClick(pageCounts)}>&gt;</Button>}
        </div>
    );
}
 
export default Paging;