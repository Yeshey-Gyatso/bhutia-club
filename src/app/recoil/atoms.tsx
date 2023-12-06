import { atom } from "recoil";

const localStorageEffect = (key: string) => ({setSelf, onSet}) => {
 const savedValue = localStorage.getItem(key)
 if (savedValue != null) {
   setSelf(JSON.parse(savedValue));
 }
 onSet((newValue: any, _: any, isReset: any) => {
   isReset
     ? localStorage.removeItem(key)
     : localStorage.setItem(key, JSON.stringify(newValue));
 });
};

export const languageAtom = atom({
 key:"language",
 default:false,
 effects_UNSTABLE: [localStorageEffect('language')],
});
