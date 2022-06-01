import AdoptaGato from '../components/AdoptaGato.jsx';
import AdoptaPerro from '../components/AdoptaPerro.jsx';
import Home from '../components/Home.jsx';
import Ajustes from '../components/Ajustes.jsx';
import Curiosidades from '../components/Curiosidades.jsx';

export const MenuItems=[
    {
        id:1,
        path:"/Home",
        defaultRoute:false,
        text: "Imágenes",
        componentSite: <Home/>,
    
    },
    {
        id:2,
        path:"/AdoptaPerro",
        defaultRoute:false,
        text: "Adopta Perro",
        componentSite: <AdoptaPerro/>,
    
    },
    {
        id:3,
        path:"/AdoptaGato",
        defaultRoute:false,
        text: "Adopta Gato",
        componentSite: <AdoptaGato/>,
    
    },{
        id:4,
        path:"/Curiosidades",
        defaultRoute:false,
        text: "Curiosidades",
        componentSite: <Curiosidades/>,
    
    },
    {
        id:5,
        path:"/Ajustes",
        defaultRoute:false,
        text: "Ajustes",
        componentSite: <Ajustes/>,
    
    },
    
];
export default MenuItems;