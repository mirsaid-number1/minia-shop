import React from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Products from '../components/Products';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import type { RootState } from '../store';
import style from '../styles/productsOnly/ProductsOnly.module.scss';
import {changeState} from '../features/singleItemSlice';

type Props = {}

function ProductsOnly({}: Props) {
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

  function goToItem(title:string) {
    checkExistance(title);
    router.push(`/checkout/${title}`)
  }
  return (
    <section className={style.products}>
        <Navbar />
        <main className={style.main}>
            <Sidebar />
            <div className={style.container}>
                <div>
                    <Products data={images} goToItem={goToItem}/>
                </div>
            </div>
        </main>
    </section>
  )
}

export default ProductsOnly;