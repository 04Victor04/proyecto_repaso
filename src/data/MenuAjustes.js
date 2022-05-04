import {FAQ} from '../components/ajustes/FAQ';
import {Perfil} from '../components/ajustes/Perfil';
import {QuienesSomos} from '../components/ajustes/QuienesSomos';

export const MenuAjustes=[
    {
        id:1,
        path:"/FAQ",
        text: "FAQ",
        component: FAQ,
    
    },
    {
        id:2,
        path:"/Perfil",
        text: "Perfil",
        component: Perfil,
    
    },
    {
        id:3,
        path:"/QuienesSomos",
        text: "QuienesSomos",
        component: QuienesSomos,
    
    }
];