const cheaper=document.querySelector(".cheap")
const ischea=document.querySelector('.cheaper')
const url = 'http://localhost:3000/item';


const getingtodo = async () => {
    const url = 'http://localhost:3000/item';
    const res = await fetch(url);
    const todos = await res.json();
  
    let template = '';
  
    todos.forEach(todo => {
      template += `
      <div class="todos">
      <p>name:${todo.name}:</p>
      <p><small>price:${todo.price} </small></p>
      </div>
     `;
    });
    ischea.innerHTML = template;
  };
  let cart = JSON.parse(localStorage.getItem("CART")) || [];
  const isCheap = async () => {
    
    const res = await fetch(url);
    const todos = await res.json();
  
    let template = '';
  
    todos.forEach(todo => {
        const items = todos.find((todo) => todo.price <=100 );
        cart.push({
            ...item,
            : 1,
          });
        }
    });
    cheaper.innerHTML = template;
  };
  
 
  


  
  window.addEventListener('DOMContentLoaded', () => isCheap());
  window.addEventListener('DOMContentLoaded', () => getingtodo());
  
                                                                                                                                                                                             