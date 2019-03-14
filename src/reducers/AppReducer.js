import { 
    MODIFICA_ADICIONA_CONTATO_EMAIL,
    ADICIONA_CONTATO_ERRO,
    ADICIONA_CONTATO_SUCESSO,
    MODIFICA_MENSAGEM,
    ENVIA_MENSAGEM_SUCESSO,
    DELETANDO_CONTA
} from '../actions/types';

const INITIAL_STATE = {
    adiciona_contato_email: '',
    cadastro_resultado_txt_erro: '',
    cadastro_resultado_inclusao: '',
    mensagem: '',
    loadingDeletaConta: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type) {
        case MODIFICA_ADICIONA_CONTATO_EMAIL:
            return { ...state, adiciona_contato_email: action.payload }
        case ADICIONA_CONTATO_ERRO:
            return { ...state, cadastro_resultado_txt_erro: action.payload }
        case ADICIONA_CONTATO_SUCESSO:
            return { ...state, cadastro_resultado_inclusao: action.payload, adiciona_contato_email: '' }           
        case MODIFICA_MENSAGEM:
            return { ...state, mensagem: action.payload }
        case ENVIA_MENSAGEM_SUCESSO:
            return { ...state, mensagem: '' }            
        case DELETANDO_CONTA:
            return {...state, loadingDeletaConta: true}
        default:
            return state;
    }
}