import { atom, RecoilState, SetterOrUpdater } from "recoil";
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist()
export const languageAtom = atom({
  key: "language",
 
  default: false,
  effects_UNSTABLE: [persistAtom],
});
``