import Home from "../Home";
import {Route, Routes} from 'react-router-dom';

const GlobalRoute = () =>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        </>
    )
}

export default GlobalRoute;