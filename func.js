let CaixaDeConversa = document.getElementsByClassName('ConversarPessoas');

for (let i = 0; i < CaixaDeConversa.length; i++){
    CaixaDeConversa[i].addEventListener('click', () => {
        let j = 0;
        while(j < CaixaDeConversa.length){
            CaixaDeConversa[j++].classList.remove('ativo');
        }
        CaixaDeConversa[i].classList.add('ativo');
    })
}
