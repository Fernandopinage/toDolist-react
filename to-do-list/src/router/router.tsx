import { Route, Routes } from "react-router-dom";
import { Home } from "../page";
import { About } from "../page/about";
import { Erro404, Layout } from "../layout";

const Router = ()=>{

    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="*" element={<Erro404 />} />
            </Route>
        </Routes>
    );
}
export {Router}