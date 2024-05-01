import './App.css'
import { Header } from './component'
import { Content } from './component/content/content'
import { Footer } from './component/footer/footer'


function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer userName='Luiz Fernando'/>
    </>
  )
}

export default App
