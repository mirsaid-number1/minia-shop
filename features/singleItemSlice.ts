import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {ProductAction} from './productSlice';
import firstImage from '../images/phone1.jpg';
import secondImage from '../images/phone2.jpg';
import thirdImage from '../images/phone3.jpg';
import airpodsImage from '../images/airpods1.png';

const initialState: ProductAction = {
        id:1,
        title:"Смартфон Samsung Galaxy 9 128 Gb Slim Box черный",
        url:firstImage,
        description: "Тип: моноблок (классический) Стандарт: 2G, 3G, 4G (LTE), 5G Операционная система: iOS 14",
        real_price:6_000_000,
        surcharge:5,
        exchange:true,
        prize:true,
        discountForPhone:true,
        discountForIphone:false,
        imgsCollection:[firstImage,secondImage,thirdImage,airpodsImage,secondImage],
};

export const SingleItemSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        changeState(state,action:PayloadAction<ProductAction>) {
            state.id = action.payload.id;
            state.title = action.payload.title;
            state.url = action.payload.url;
            state.description = action.payload.description;
            state.real_price = action.payload.real_price;
            state.surcharge = action.payload.surcharge;
            state.exchange = action.payload.exchange;
            state.prize = action.payload.prize;
            state.discountForPhone = action.payload.discountForPhone;
            state.discountForIphone = action.payload.discountForIphone;
            state.imgsCollection = action.payload.imgsCollection;
        }
    }
})


export const {changeState} = SingleItemSlice.actions;
export default SingleItemSlice.reducer;
