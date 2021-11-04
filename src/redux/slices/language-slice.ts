import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCALES } from "lang/locales";

export type LangState = Readonly<{
  value: string;
}>;

const STORAGE_KEY = "language";
let lang = localStorage.getItem(STORAGE_KEY);
if (!lang) {
  lang = LOCALES.ENGLISH;
}

const initialState: LangState = {
  value: lang,
};

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    changeLang: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      localStorage.setItem(STORAGE_KEY, state.value);
    },
  },
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;
