
let funcao =   
{
  criaElemento(tag, parentesco, tipo) 
  {
    let pai;
    let elemento = document.createElement(tag);
    
    if (tipo === "querySelector") 
    {
      pai = document.querySelector(parentesco);
    }
    else if (tipo === "id") 
    {
      pai = document.getElementById(parentesco);
    }
    else if (tipo === "className") 
    {
      pai = document.getElementsByClassName(parentesco);
      pai.add(elemento);
      return elemento;
    }
    
    pai.appendChild(elemento);
    return elemento;
  },

  requisicao(url, arr) 
  {
    let req = fetch(url);
    let req_json = req.json();
    arr.push(req_json);
    console.log(arr);
  }
  
}

function recharge(event) {
  
  if (event.target.value.trim() !== ""){
    console.log("recharge: " + event.target.value)
    document.getElementById("sel2").disabled = false
  }else{
    document.getElementById("sel2").disabled = true
  }
}

export {funcao,recharge};