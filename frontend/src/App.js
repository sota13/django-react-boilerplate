import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import TheHeader  from './components/TheHeader';
import TheFooter from './components/TheFooter';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <TheHeader/>
        </Header>
        <Content className='custumPadding'>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component={RegisterScreen} />
        </Content>
        <Footer>
          <TheFooter/>
        </Footer>
    </Layout>
  </Router>
  );
}

export default App;
