import React,{useState,useEffect} from 'react'
import style from '../styles/sidebar/Sidebar.module.scss';
import {useRouter} from 'next/router'
import Link from 'next/link'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
type Props = {}

function useStyles(){
    return {
        asideToggleHide:{
            transition:'all 0.5s ease-in-out',
            transform:'translateX(-100%)'
        },
        asideToggleShow:{
            transition:'all 0.5s ease-in-out',
            transform:'translate(0%)'
        }
    }
}

function useWindowSize() {
    type windowType = {
        width:number,
        height:number
    }
    const [windowSize, setWindowSize] = useState<windowType>({
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

function Sidebar({}: Props) {
    let [toggle,setToggle] = useState<boolean>(true);
    let router = useRouter();
    let styles = useStyles();
    let size = useWindowSize();

  return (<>
    {!toggle ? <div onClick={() => setToggle(!toggle)} className={style.exit}></div> : null}
    {size.width > 900 ? <aside className={style.sidebar}>
        <ul className={style.lists}>
            <li className={router.pathname == '/' ? style.active : style.ordenary}>
                <Link href={'/'}>
                    <CottageOutlinedIcon/> Главная
                </Link>
            </li>
            <li className={router.pathname == '/orders' ? style.active : style.ordenary}>
                <Link href={'/orders'}>
                    <TextSnippetOutlinedIcon /> Заказы
                </Link>
            </li>
            <li className={router.pathname == '/products' ? style.active : style.ordenary}>
                <Link href={'/products'}>
                    <Inventory2OutlinedIcon /> Товары
                </Link>
            </li>
            <li className={router.pathname == '/reviews' ? style.active : style.ordenary}>
                <Link href={'/reviews'}>
                    <StarOutlineRoundedIcon /> Отзывы
                </Link>
            </li>
            <li className={router.pathname.includes('/checkout') ? style.active : style.ordenary}>
                <Link href={'/checkout'}>
                    <LocalGroceryStoreRoundedIcon /> Оформить заказ
                </Link>
            </li>
        </ul>
    </aside> : <aside className={style.sidebar} style={toggle ? styles.asideToggleHide : styles.asideToggleShow}>
        <ul className={style.lists}>
            <li className={router.pathname == '/' ? style.active : style.ordenary}>
                <Link href={'/'}>
                    <CottageOutlinedIcon/> Главная
                </Link>
            </li>
            <li className={router.pathname == '/orders' ? style.active : style.ordenary}>
                <Link href={'/orders'}>
                    <TextSnippetOutlinedIcon /> Заказы
                </Link>
            </li>
            <li className={router.pathname == '/products' ? style.active : style.ordenary}>
                <Link href={'/products'}>
                    <Inventory2OutlinedIcon /> Товары
                </Link>
            </li>
            <li className={router.pathname == '/reviews' ? style.active : style.ordenary}>
                <Link href={'/reviews'}>
                    <StarOutlineRoundedIcon /> Отзывы
                </Link>
            </li>
            <li className={router.pathname == '/checkout' ? style.active : style.ordenary}>
                <Link href={'/checkout'}>
                    <LocalGroceryStoreRoundedIcon /> Оформить заказ
                </Link>
            </li>
        </ul>
    </aside>}
    <button onClick={() => setToggle(!toggle)} className={style.open_sidebar}>{!toggle ? <ArrowBackRoundedIcon className={style.openarrow}/> : <ArrowForwardRoundedIcon className={style.openarrow}/>}</button>
    </>
  )
}

export default Sidebar