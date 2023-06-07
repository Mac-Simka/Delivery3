import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {store} = useContext(Context)
    const pageCount = Math.ceil(store.totalCount / 9)
    const pages=[]

    for(let i = 0; i<pageCount; i++){
        pages.push(i+1)
    }

    return (
        <Pagination className='mt-2'>
            {pages.map(page=>
                <Pagination.Item
                    key={page}
                    active={store.page === page}
                    onClick={()=>store.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;