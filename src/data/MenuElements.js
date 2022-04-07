

import PrimerComponenteClase from '../components/PrimerComponenteClase.jsx';
import PrimerComponente from '../components/PrimerComponente.jsx';


const MenuElements=[
    {
        path:"/",
        text: "Inicio",
        defaultRoute:true,
        componentSite: <PrimerComponente/>
    
    },
    {
        path:"/juana",
        text: "Juana",
        defaultRoute:false,
        componentSite: <PrimerComponenteClase nombre="juana" apellidos="garcia" color="green" />
    
    },
    {
        path:"/luis",
        text: "Luis",
        defaultRoute:false,
        componentSite:  <PrimerComponenteClase nombre="luis" apellidos="garcia" color="blue" />
    
    },
    {
        path:"/pepe",
        text: "Pepe",
        defaultRoute:false,
        componentSite:  <PrimerComponenteClase nombre="pepe" apellidos="garcia" color="red" />
    
    }
];
export default MenuElements;