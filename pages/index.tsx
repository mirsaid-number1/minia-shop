import React, { useRef } from 'react'
import style from '../styles/home/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import type { RootState } from '../store';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
// small images
import exchange from '../images/exchange.png';
import greenPercent from '../images/greenPercent.png';
import orangePercent from '../images/orangePercent.png';
import surprise from '../images/surprise.png';

export default function Home() {
  let count = useSelector((state:RootState) => state.counter.value);
  let dispatch = useDispatch();
  let numberRef = useRef<HTMLInputElement>(null);

  return (
    <section className={style.home}>
      <Navbar />
      <main className={style.main}>
        <Sidebar />
        <div className={style.container}>
          <span className={style.directory}><Link href={'/'} className={style.current}>Главная</Link></span>
          <Link href={'/checkout'}>
            <div className={style.card_field}>
              <h2>Перейти на страницу оформления заказа</h2>
              <div className={style.card_groups}>
                <div className={style.card_group} data-index="0" data-status="active">
                  <div className={style.little_card}>
                    <Image src={exchange} alt="changing"/>
                  </div>
                  <div className={style.big_card}>

                  </div>
                  <div className={style.little_card}>
                    <Image src={surprise} alt="surprise"/>
                  </div>
                  <div className={style.big_card}>

                  </div>
                  <div className={style.little_card}>
                    <Image src={greenPercent} alt="greenPercent"/>
                  </div>
                  <div className={style.big_card}>

                  </div>
                  <div className={style.little_card}>
                    <Image src={orangePercent} alt="orangePercent"/>
                  </div>
                  <div className={style.big_card}>

                  </div>
                </div>
                <div className={style.card_group} data-index="1" data-status="unknown">
                  <div className={style.little_card}>

                  </div>
                  <div className={style.big_card}>

                  </div>
                  <div className={style.little_card}>

                  </div>
                  <div className={style.big_card}>

                  </div>
                  <div className={style.little_card}>

                  </div>
                  <div className={style.big_card}>

                  </div>
                  <div className={style.little_card}>

                  </div>
                  <div className={style.big_card}>

                  </div>
                </div>
                <div className={style.card_group} data-index="2" data-status="unknown">
                  <div className={style.little_card}>

                  </div>
                  <div className={style.big_card}>

                  </div>
                  <div className={style.little_card}>

                  </div>
                  <div className={style.big_card}>

                  </div>
                  <div className={style.little_card}>

                  </div>
                  <div className={style.big_card}>

                  </div>
                  <div className={style.little_card}>

                  </div>
                  <div className={style.big_card}>

                  </div>
                </div>          
              </div>
            </div>
          </Link>
        </div>
      </main>
    </section>
  )
}
