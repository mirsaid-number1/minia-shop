import React,{useEffect, useState} from 'react'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import {changeState} from '../../features/singleItemSlice';
import { useRouter } from 'next/router';
import type { RootState } from '../../store';
import style from '../../styles/checkout_page/Checkout.module.scss'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Products from '../../components/Products'


type Props = {}

/**
  id:number,
    title:string,
    url:string,
    description:string,
    real_price:number,
    surcharge:number,
    exchange:boolean,
    prize:boolean;
    discountForPhone:boolean,
    discountForIphone:boolean,
    imgsCollection: Array<string>
     **/


function Checkout({}: Props) {
  let images = useSelector((state:RootState) => state.products);
  let dispatch = useDispatch();
  let router = useRouter();

  function checkExistance(accepted:string) {
    for(let i = 0; i < images.length; i++) {
      if(images[i].title.includes(accepted)) {
        dispatch(changeState(images[i]));
        return images[i];
      }
    }
    return false
  }

  function searchForItem(e:any) {
    e.preventDefault();
    let accepted:string = e.target[0].value;
    if(checkExistance(accepted)) router.push(`/checkout/${accepted}`);
    else alert('please, make sure that you have entered correct product name existing in our platform.');
  }
  function goToItem(title:string) {
    checkExistance(title);
    router.push(`/checkout/${title}`)
  }
  return (
    <section className={style.checkout}>
        <Navbar />
        <main className={style.main}>
            <Sidebar />
          <div className={style.container}>
            <span className={style.directory}><Link href={'/'} className={style.prev}>Заявки</Link> <ArrowForwardIosRoundedIcon className={style.arrow}/> <Link href={'/checkout'} className={style.current}>Оформить заказ</Link></span>
            <h2 className={style.header}>Оформить заказ</h2>
            <form className={style.search_form} onSubmit={searchForItem}>
              <input type="text" name='search' list='names' id='search' className={style.search_input} placeholder="Поиск по названию товара"/>
              <button className={style.search_btn} type="submit">
                <SearchRoundedIcon />
              </button>
              <datalist id="names">
                    <option value="Смартфон Apple iPhone 11">Смартфон Apple iPhone 11</option>
                    <option value="Смартфон Samsung Galaxy 9">Смартфон Samsung Galaxy 9</option>
                    <option value="Наушники Apple Airpods">Наушники Apple Airpods</option>
                    <option value="Samsung Galaxy Z Folder">Samsung Galaxy Z Folder</option>
              </datalist>
            </form>
            <h3>Все товары (121)</h3>
            <div>
              <Products data={images} goToItem={goToItem}/>
            </div>
          </div>
        </main>
    </section>
  )
}

export default Checkout