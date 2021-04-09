function GFC(id){
    let gooder = document.getElementById('good').checked;
    let cheaper = document.getElementById('cheap').checked;
    let faster = document.getElementById('fast').checked;

     if (id === 'good'){
         if (cheaper && faster){
             cheaper = false;
         }
     }else if (id === 'cheap'){
         if (gooder && faster){
          gooder = false;
         }
     }else if (id === 'fast'){
         if (gooder && cheaper){
           cheaper= false;
         }
     }
     document.getElementById('good').checked = gooder;
     document.getElementById('cheap').checked = cheaper;
     document.getElementById('fast').checked = faster;
}