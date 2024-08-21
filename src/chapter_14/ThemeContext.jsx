// Context를 사용하여 테마 변경 기능 만들기

import React from "react";

const ThemeContext = React.createContext();
ThemeContext.displayName = "ThemeContext";

export default ThemeContext;