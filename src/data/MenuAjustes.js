import FAQ from '../components/FAQ.jsx';
import Perfil from '../components/Perfil.jsx';
import QuienesSomos from '../components/QuienesSomos.jsx';

export const MenuAjustes=[
    {
        id:1,
        defaultRoute: false,
        path:"Perfil",
        text: "Perfil",
        componentSite: <Perfil/>,
    
    },
    {
        id:2,
        defaultRoute: false,
        path:"QuienesSomos",
        text: "QuienesSomos",
        componentSite: <QuienesSomos/>,
    
    },
    {
        id:3,
        defaultRoute:false,
        path:"FAQ",
        text: "FAQ",
        componentSite: <FAQ/>,
    
    },
];