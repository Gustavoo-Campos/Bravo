

const toggleTheme = document.getElementById('theme');
const user = document.getElementById('user');
const equipe = document.getElementById('equipe');
const rootHtml = document.documentElement; 

function changeTheme(){
    /*toggleTheme.classList.toggle('dark-theme');*/
   const currentTheme = rootHtml.getAttribute('data-theme');

if (currentTheme === 'dark') {
    rootHtml.setAttribute('data-theme', 'light');
   toggleTheme.innerHTML = '<img src="../img/sol.svg" alt="Light Theme">';
   user.innerHTML = '<img src="../img/user-dark.svg" alt="Light Theme">';
   
   equipe.innerHTML = '<img class="equipe__dark" src="../img/quipe__home__light.svg" alt="Light Theme">';
   
}   else {
    rootHtml.setAttribute('data-theme', 'dark');
    toggleTheme.innerHTML = '<img src="../img/moon.svg" alt="Dark Theme">';
    user.innerHTML = '<img src="../img/user.svg" alt="Light Theme">';
    
    equipe.innerHTML = '<img class="equipe__dark" src="../img/equipe__home__dark.svg" alt="Dark Theme">';
  
}
}

toggleTheme.addEventListener('click', changeTheme);



















