//https://api.mercadolibre.com/sites/MLB -> url api por pais (Brasil)


let url= 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1403';
let categorias = [];


async function requisicao() {
  let req = await fetch(url);
  let req_json = await req.json();
  console.log(req_json); //para testar o visualizar o retorno
  categorias.push(req_json);

  for (let i = 0; i < categorias[0].results.length; i++) {
   console.log(categorias[0].results[i]); //para ver categoria por categoria, desacopladas

  }
}


requisicao()