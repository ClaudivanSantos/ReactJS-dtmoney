import { GlobalStyle } from "./styles/global";
import { Header } from './components/Header/Header'
import { Dashboard } from "./components/Dashboard/Dashboard";

export function App() {
  return ( 
  <>
    <Header />
    <Dashboard />
    <GlobalStyle />
  </>
  )
 
}

