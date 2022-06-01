import FAQ from '../components/FAQ.jsx';
import Perfil from '../components/Perfil.jsx';
import QuienesSomos from '../components/QuienesSomos.jsx';

export const MenuAjustes=[
    {
        id:1,
        path:"/Perfil",
        text: "Perfil",
        componentSite: Perfil,
    
    },
    {
        id:2,
        path:"/QuienesSomos",
        text: "QuienesSomos",
        component: <QuienesSomos/>,
    
    },
    {
        id:3,
        path:"/FAQ",
        text: "FAQ",
        componentSite: <FAQ/>,
    
    },
];