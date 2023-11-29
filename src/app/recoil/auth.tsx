import { atom } from "recoil";

export const authAtom = atom({
    key:"adminSignedIn",
    default:false,
})