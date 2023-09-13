import { atom } from 'recoil';
import Component1 from "../Component1";
export const showComps = atom({
    key: 'showComps',
    default: <Component1 />
})