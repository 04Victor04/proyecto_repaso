import AdoptaGato from '../components/AdoptaGato.jsx';
import AdoptaPerro from '../components/AdoptaPerro.jsx';
import Home from '../components/Home.jsx';
import Ajustes from '../components/Ajustes.jsx';
import Curiosidades from '../components/Curiosidades.jsx';

export const MenuItems=[
    {
        id:1,
        path:"/Home",
        text: "Imágenes",
        component: Home,
    
    },
    {
        id:2,
        path:"/AdoptaPerro",
        text: "Adopta Perro",
        component: AdoptaPerro,
    
    },
    {
        id:3,
        path:"/AdoptaGato",
        text: "Adopta Gato",
        component: AdoptaGato,
    
    },{
        id:4,
        path:"/Curiosidades",
        text: "Curiosidades",
        component: Curiosidades,
    
    },
    {
        id:5,
        path:"/Ajustes",
        text: "Ajustes",
        component: Ajustes,
    
    },
    
];