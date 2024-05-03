import './App.css'
import { Footer, Header } from './component'
import { Content } from './component/content/content'
import { Home } from './page'



function App() {
  return (
    <>
      <Header />
      <Content>
      <Home />
      </Content>
      <Footer userName='Luiz Fernando'/>
    </>
  )
}

export default App
