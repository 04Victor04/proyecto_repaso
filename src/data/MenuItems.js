import AdoptaGato from '../components/AdoptaGato.jsx';
import AdoptaPerro from '../components/AdoptaPerro.jsx';
import Home from '../components/Home.jsx';
import Ajustes from '../components/Ajustes.jsx';
import Login from '../components/Login.jsx';
import Curiosidades from '../components/Curiosidades.jsx';

export const MenuItems=[
    {
        id:1,
        path:"/",
        defaultRoute:true,
        text: "Login",
        componentSite: <Login/>,
    
    },
    {
        id:2,
        path:"/Home",
        defaultRoute:false,
        text: "Imágenes",
        componentSite: <Home/>,
    
    },
    {
        id:3,
        path:"/AdoptaPerro",
        defaultRoute:false,
        text: "Adopta Perro",
        componentSite: <AdoptaPerro/>,
    
    },
    {
        id:4,
        path:"/AdoptaGato",
        defaultRoute:false,
        text: "Adopta Gato",
        componentSite: <AdoptaGato/>,
    
    },{
        id:5,
        path:"/Curiosidades",
        defaultRoute:false,
        text: "Curiosidades",
        componentSite: <Curiosidades/>,
    
    },
    {
        id:6,
        path:"/Ajustes",
        defaultRoute:false,
        text: "Ajustes",
        componentSite: <Ajustes/>,
    
    },
    
];
export default MenuItems;