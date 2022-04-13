

import PrimerComponenteClase from '../components/PrimerComponenteClase.jsx';
import PrimerComponente from '../components/PrimerComponente.jsx';
import AdoptaGato from '../components/AdoptaGato.jsx';
import AdoptaPerro from '../components/AdoptaPerro.jsx';
import Home from '../components/Home.jsx';

export const MenuItems=[
    {
        id:1,
        path:"/",
        text: "Imagenes",
        component: Home
    
    },
    {
        id:2,
        path:"/AdoptaPerro",
        text: "Adopta Perro",
        component: AdoptaPerro
    
    },
    {
        id:3,
        path:"/AdoptaGato",
        text: "Adopta Gato",
        componentSite: AdoptaGato
    
    },
    
];