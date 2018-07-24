
const state = {
  numeroingresado: 0,
  stack:[],
  cantidad:0
};

//const now = new Date();
const inpat = document.createElement('input');
const btnGenerar = document.createElement('button');

const brake = document.createElement('br');

root.appendChild(inpat);
root.appendChild(btnGenerar);
btnGenerar.className = 'btnGenerar';
btnGenerar.innerHTML ='ingresar';



const render = ({numeroingresado,stack}) => {
  
  btnGenerar.onclick = () =>{
    state.numeroingresado = inpat.value;
    state.cantidad +=1;
    state.stack.push(numeroingresado);
    console.log(state.cantidad);
    
    
        for(let i =0; i<state.numeroingresado; i+=1){
          const block = document.createElement('div');
          block.className = 'block';

          const column = document.createElement('div');
          column.className = 'column';      
          block.appendChild(column);
          const unidad = document.createElement('div');
          unidad.className = 'unidad';
          if(i==0||i==1){           
            column.appendChild(unidad);            
          }
          else{
            for(let x=0; x<i; x+=1){
              const unidades = document.createElement('div');
              unidades.className= 'unidad';
              column.appendChild(unidades);
            }
          }
          
              root.appendChild(block);
          
        }
    
    
    
    
    
  };
}

for(let i=0; i<=state.cantidad;i+=1){
render(state);
}

