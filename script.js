//https://api.mercadolibre.com/sites -> url api universal
//https://api.mercadolibre.com/sites/MLB -> url api por pais (Brasil)
//https://api.mercadolibre.com/sites/MLA/search?category=MLA1055
//https://developers.mercadolivre.com.br/pt_br/itens-e-buscas



import { funcao, recharge } from '/funcoes.js';

let api = 'https://api.mercadolibre.com/sites/MLB';
let categorias = [];

let sel1 = document.getElementById("sel1")


async function requisicao() {
  let req = await fetch(api);
  let req_json = await req.json();
  //console.log(req_json);
  categorias.push(req_json);
  let opt;
  for (let i = 0; i < categorias[0].categories.length; i++) {
    //console.log(categorias[0].categories[i].name);
    opt = funcao.criaElemento("option", "sel1", "id");
    opt.innerText = categorias[0].categories[i].name;
  }
  opt = document.getElementById("sel1");
  opt.disabled = false;


}



sel1.onclick = recharge;


(() => {

  requisicao();

})();





// utilizar o addeventlistener com change do click para carregar os próximos selects, se o select anterior for vazio, ele fica bloqueado  