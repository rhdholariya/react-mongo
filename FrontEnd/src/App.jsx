import BrowserRouter from "./components/BrowserRouter";
import Routes from "./routes"
import { ConfigProvider } from 'antd';
import history from "./utils/history";

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
        <Routes />
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App