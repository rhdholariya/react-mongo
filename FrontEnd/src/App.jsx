import BrowserRouter from "./components/BrowserRouter";
import Routes from "./routes";
import { ConfigProvider } from 'antd';
import history from "./utils/history";
import Header from "./components/Header";
import 'sweetalert2/src/sweetalert2.scss';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#806145',
        },
        components: {
          Button: {
            colorSuccess: "#62bd99",
          },
        },
      }}
    >
      <BrowserRouter history={history}>
        <Header />
        <Routes />
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App