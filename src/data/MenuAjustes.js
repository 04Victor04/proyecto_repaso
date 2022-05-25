import FAQ from '../components/FAQ';
import Perfil from '../components/Perfil';
import QuienesSomos from '../components/QuienesSomos';

export const MenuAjustes=[
    {
        id:1,
        path:"/FAQ",
        text: "FAQ",
        component: <FAQ/>,
    
    },
    {
        id:2,
        path:"/Perfil",
        text: "Perfil",
        componentSite: <Perfil/>,
    
    },
    {
        id:3,
        path:"/QuienesSomos",
        text: "QuienesSomos",
        componentSite: <QuienesSomos/>,
    
    }
];