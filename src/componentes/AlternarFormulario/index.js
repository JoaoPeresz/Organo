import './alternarFormulario.css'
import { IoRemoveCircle } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import {useState} from "react";

function AlternarFormulario ({mudandoForm}) {

    const [icone, setIcone] = useState(false)

function mudandoFormEIcon(){
    setIcone(!icone)
    mudandoForm(icone)
}

    return(
     <div className='botao-alternar'>
         {icone
             ?<IoIosAddCircle onClick={mudandoFormEIcon}/>
             :<IoRemoveCircle onClick={mudandoFormEIcon}/>
         }
     </div>
    )
}

export default AlternarFormulario