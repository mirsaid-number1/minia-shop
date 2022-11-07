import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {useSelector} from 'react-redux';
import style from '../../styles/product/Product.module.scss';
import Navbar from '../../components/Navbar';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Sidebar from '../../components/Sidebar';
import buy from '../../images/Buy.png';
import exchange from '../../images/exchange.png';
import greenPercent from '../../images/greenPercent.png';
import orangePercent from '../../images/orangePercent.png';
import surprise from '../../images/surprise.png';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import Confetti from 'react-confetti';


function Product({}) {
    const router = useRouter();
    const {productName} = router.query;
    let product = useSelector((state) => state.product);
    let [longivity,setLongivity] = useState(3);
    let [continueSeeMore,setContinueSeeMore] = useState(false);
    let [finished,setFinished] = useState(false);
    let sizes = useWindowSize();
    
    function useWindowSize() {

      const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
      });
    
      useEffect(() => {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }, []);
      return windowSize;
    }

    useEffect(() => {
      if(finished){
        setTimeout(() => {setFinished(false)},5000);
        alert('Вы успешно совершили покупку');
      } 
      return () => {
      }
    },[finished])
    console.log(product);
    let breakPoints = [
      {width:1,itemsToShow:1}
    ]
  return (<div>
    {finished ? 
      <Confetti 
        width={sizes.width}
        height={sizes.height}
        gravity={0.05}
        numberOfPieces={800}
      /> : null
    }      
    <section className={style.product}>
      <Navbar />
      <main className={style.main}>
        <Sidebar />
        <div className={style.container}>
          <span className={style.directory}><Link href={'/'} className={style.prev}>Заявки</Link> <ArrowForwardIosRoundedIcon className={style.arrow}/> <Link href={'/checkout'} className={style.prev}>Оформить заказ</Link> <ArrowForwardIosRoundedIcon className={style.arrow}/> <span className={style.current}>{productName}</span></span>
          <div className={style.device_container}>
            <h2>{productName}</h2>
            <div className={style.marketLogo}>
              <Image src={buy} alt='market'/>
            </div>
            <div className={style.aboutDevice}>
              <div className={style.carusel}>
                    <Carousel enableAutoPlay={true} initialActiveIndex={0} autoPlaySpeed={15000} breakPoints={breakPoints}>
                        {product.imgsCollection.map((image,index) => (
                          <Item className={style.carusel_card} key={index}>
                            <Image src={image} alt="img" key={index}/>
                          </Item>) 
                      )}
                    </Carousel>

                    <div className={style.carusel_labels}>
                      {product.exchange ? <span className={style.label_exchange}><Image src={exchange} alt={'exchange'}/></span> : null}
                      {product.prize ? <span className={style.label_surprise}><Image src={surprise} alt={'surprise'}/></span> : null}
                      {product.discountForPhone ? <span className={style.label_orangePercent}><Image src={orangePercent} alt={'orangePercent'}/></span> : null}
                      {product.discountForIphone ? <span className={style.label_greenPercent}><Image src={greenPercent} alt={'greenPercent'} /></span> : null}
                    </div>
              </div>
                  
              <div className={style.details_part}>
                  <section className={style.sectionOne}>
                    <span className={style.header_desc}>Цена телефона</span>
                    <span className={style.header_val}>{product.real_price} сум </span>
                  </section>

                  <section className={style.sectionTwo}>
                    <div className={style.surcharge}>
                      <div className={style.surcharge_headings}>
                        <span className={style.header_desc}>Общая цена (с наценкой)</span>
                        <span className={style.header_val}>{product.real_price + (Math.round(product.real_price * product.surcharge / 100) * longivity)}</span>
                      </div>
                      <span className={style.only_surcharge}>
                        <span className={style.surcharge_overall}>{Math.round(product.real_price * product.surcharge / 100) * longivity} сум</span>
                        <span className={style.surcharge_longivity}>x{longivity}</span>
                      </span>

                    </div>
                    <div className={style.longivity_set}>
                      <span className={longivity == 3 ? style.active_long : style.passive_long} onClick={() => setLongivity(3)}>3 мес</span>
                      <span className={longivity == 6 ? style.active_long : style.passive_long} onClick={() => setLongivity(6)}>6 мес</span>
                      <span className={longivity == 12 ? style.active_long : style.passive_long} onClick={() => setLongivity(12)}>12 мес</span>
                      <span className={longivity == 24 ? style.active_long : style.passive_long} onClick={() => setLongivity(24)}>24 мес</span>
                    </div>
                    <span className={style.surcharge_value}>
                    Наценка:<b>{product.surcharge}%</b></span>
                  </section>

                  <section className={style.sectionThree}>
                    <span className={style.header_desc}>Общие характеристики</span>
                    <span className={style.header_text}>
                      Тип: моноблок (классический) <br />
                      Стандарт: 2G, 3G, 4G (LTE), 5G <br />
                      Операционная система: iOS 14 <br />
                    </span>  
                    <div className={style.continue} onClick={() => setContinueSeeMore(!continueSeeMore)}>
                      <span>Показать все</span>
                      <span>{continueSeeMore ? <KeyboardArrowDownTwoToneIcon /> : <KeyboardArrowRightTwoToneIcon />}</span>
                    </div>
                  </section>

              </div>
            </div>
            <div className={style.stocks}>
              <h3>Акции</h3>
              <div className={style.stock}>
                <div className={style.first_layer}>
                  <span className={style.label_exchange}><Image src={exchange} alt={'exchange'}/></span>
                  <span className={style.texts}>
                    <span className={style.stock_text}>Обменяй свой старый айфон и получи скидку на новый</span><br />
                    <span className={style.stock_mini_text}>- 400 000 сум</span>
                  </span>
                </div>
                  <input type="checkbox" name="exchange" id="exchange" className={style.checkbox}/>
              </div>
              <div className={style.stock}>
                <div className={style.first_layer}>
                  <span className={style.label_surprise}><Image src={surprise} alt={'surprise'}/></span>
                  <span className={style.texts}>
                    <span className={style.stock_text}>Наушники в подарок</span><br />
                    <span className={style.stock_mini_text}>Apple EarPods</span>
                  </span>
                </div>
                  <input type="checkbox" name="surprise" id="surprise"/>
              </div>
              <div className={style.stock}>
                <div className={style.first_layer}>
                  <span className={style.label_orangePercent}><Image src={orangePercent} alt={'orangePercent'}/></span>
                  <span className={style.texts}>
                    <span className={style.stock_text}>Скидка 20% на смартфоны</span><br />
                    <span className={style.stock_mini_text}>- 10 000 сум</span>
                  </span>
                </div>
                  <input type="checkbox" name="orangePercent" id="orangePercent" />
              </div>  
              <div className={style.stock}>
                <div className={style.first_layer}>
                  <span className={style.label_greenPercent}><Image src={greenPercent} alt={'greenPercent'} /></span>
                  <span className={style.texts}>
                    <span className={style.stock_text}>Скидка на айфоны <br /> IMEI 012345678901234</span> <br />
                    <span className={style.stock_mini_text}>- 10 000 сум</span>
                  </span>
                </div>  
                  <input type="checkbox" name="greenPercent" id="greenPercent" />
              </div>
            </div>
            <div className={style.add_card}>
              <button onClick={() => setFinished(true)}>Добавить в корзину</button>
            </div>
          </div>
        </div>
      </main>
    </section>
  </div>)
}
const Item = styled.div`
position:relative;
`

export default Product