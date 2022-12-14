import ehUmCPF from "./valida-cpf";
import ehMaiordeIdade from "./valida-idade";
const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid",evento => evento.preventDefault() );
})

function verificaCampo(campo) {
    if(campo.name == "cpf" && campo.value.lenght >= 11 ){
        ehUmCPF(campo);
    }
    if(campo.name == "aniversario" && campo.value != "" ){
        ehMaiordeIdade(campo);
    }
}