import AuthActionTypes from "../../routes/auth/actions/type/auth";
import enLang from "../../lngProvider/entries/en-US";

const initialState = {
  themeType: "THEME_TYPE_LITE",
  width: window.innerWidth,
  navStyle: "NAV_STYLE_FIXED",
  pathname: "",
  locale: {
    languageId: "english",
    locale: "en",
    name: "English",
    icon: "us",
  },
  layoutType: "LAYOUT_TYPE_FULL",
  navCollapsed: false,
  themeColor: "THEME_COLOR",
};

export default (state = initialState, action: any) => state;
