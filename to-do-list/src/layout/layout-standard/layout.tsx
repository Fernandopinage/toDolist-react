import { Outlet } from "react-router-dom"
import { Content, Footer, Header } from "../../component"

const Layout = () =>{
    return(
        <>
      <Header />
      <Content>
         <Outlet />
      </Content>
      <Footer userName='Luiz Fernando'/>
        </>
    )
}
export {Layout}