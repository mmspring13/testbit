import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {AppThemeProvider} from "./providers/AppThemeProvider";
import GlobalStyle from "./common/GlobalStyle.ts";
import theme from "./common/theme.ts";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";

/**
 * Пагинация
 * таблица транз
 * фикс графика
 * шапка
 * user api
 * transaction api
 * ништяки
 */

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppThemeProvider>
      <GlobalStyle $theme={theme}  />
      <App />
    </AppThemeProvider>
  </Provider>
)
