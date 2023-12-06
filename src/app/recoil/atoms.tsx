import { atom, RecoilState, SetterOrUpdater } from "recoil";

const localStorageEffect = (key: string) => ({ setSelf, onSet }: { setSelf: SetterOrUpdater<any>; onSet: (newValue: any) => void }) => {
  // Check if localStorage is available
  if (typeof localStorage !== 'undefined') {
    const savedValue = localStorage.getItem(key);

    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    });
  }
};

export const languageAtom = atom({
  key: "language",
  default: false,
  effects_UNSTABLE: [localStorageEffect('language')],
});
``