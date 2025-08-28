function openNav() {
    document.getElementById("navHamg").style.width = "70%";

    const botonAbrir = document.getElementById('botonNavAbrirImg');
    botonAbrir.style.visibility = 'hidden';
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("navHamg").style.width = "0%";
    
    setTimeout(() => {
        const botonAbrir = document.getElementById('botonNavAbrirImg');
    botonAbrir.style.visibility = 'visible';
      }, "200");
        
}

