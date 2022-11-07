import React from 'react'
import {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import Image from 'next/image';
import style from '../styles/products/Products.module.scss';
import exchange from '../images/exchange.png';
import greenPercent from '../images/greenPercent.png';
import orangePercent from '../images/orangePercent.png';
import surprise from '../images/surprise.png';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import ArrowBackIosTwoToneIcon from '@mui/icons-material/ArrowBackIosTwoTone';
import {ProductAction} from '../features/productSlice'
// import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';

type Props = {
    data:Array<ProductAction>
    goToItem:(title:string) => void
}

function Products({data,goToItem}: Props) {
    const [currentItems, setCurrentItems] = useState<Array<ProductAction>>([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    },[itemOffset,itemsPerPage,data])

    const handlePageClick = (event:any) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    }
  return (
    <>
        <section className={style.products}>
            {currentItems?.map(product => {
                return (
                    <div key={product.id} className={style.product} onClick={() => goToItem(product.title)}>
                        <div className={style.img_part}>
                            <Image 
                                src={product.url}
                                alt={product.id + ''}
                                className={style.image}
                            />
                            <div className={style.labels}>
                                {product.exchange ? <span className={style.label_exchange}><Image src={exchange} alt={'exchange'}/></span> : null}
                                {product.prize ? <span className={style.label_surprise}><Image src={surprise} alt={'surprise'}/></span> : null}
                                {product.discountForPhone ? <span className={style.label_orangePercent}><Image src={orangePercent} alt={'orangePercent'}/></span> : null}
                                {product.discountForIphone ? <span className={style.label_greenPercent}><Image src={greenPercent} alt={'greenPercent'} /></span> : null}
                            </div>
                        </div>
                        <div className={style.details_part}>
                            <p className={style.name}>{product.title.slice(0,19)}...</p>
                            <p className={style.real_price}>{product.real_price} сум </p>
                            <p className={style.add_price}>
                                <b>от {24 * Math.round(product.real_price * product.surcharge / 100)} сум</b> x24
                            </p>
                        </div>
                    </div>
                );
            })}
        </section>
        
        <ReactPaginate 
            breakLabel='...'
            previousLabel={<ArrowBackIosTwoToneIcon fontSize={"large"}/>}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            containerClassName={style.pagination}
            nextLabel={<ArrowForwardIosTwoToneIcon fontSize={"large"}/>}
            pageLinkClassName={style.page_num}
            previousLinkClassName={style.page_prev}
            nextLinkClassName={style.page_next}
            activeLinkClassName={style.page_active}
         />
    </>
  )
}

export default Products