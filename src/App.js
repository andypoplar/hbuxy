import { Provider } from 'react-redux'
import 'antd-mobile/dist/antd-mobile.css'
import store from './store'
import TabBarBottom from './common/tabbar/tabbar.jsx';
import RouterConfig from './router/index.jsx';

function App() {

  return (
    <Provider store={store}>
      <div>
        <RouterConfig />
        <TabBarBottom />
      </div>
    </Provider>
  );
}

export default App;