import './colaborador.css'
import { IoCloseCircleOutline  } from "react-icons/io5";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

    function Favoritar() {
        aoFavoritar(colaborador.id)
    }

    return (
        <div className="colaborador">
            <IoCloseCircleOutline
                    className='botao-Deletar'
                    onClick={() => aoDeletar(colaborador.id)}
            />
            <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
                <img src={colaborador.imagem} alt={colaborador.nome}/>
            </div>

            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito
                        ? <FaHeart
                            onClick={Favoritar}
                            color={'#FF0000'}
                        />
                        : <FaRegHeart
                            onClick={Favoritar}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador