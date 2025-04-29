

const toggleTheme = document.getElementById('theme');

const rootHtml = document.documentElement; 



function changeTheme(){
    /*toggleTheme.classList.toggle('dark-theme');*/

   const currentTheme = rootHtml.getAttribute('data-theme');

if (currentTheme === 'dark') {
    rootHtml.setAttribute('data-theme', 'light');
   toggleTheme.innerHTML = '<img src="../img/sol.svg" alt="Light Theme">';

   

}   else {
    rootHtml.setAttribute('data-theme', 'dark');
    toggleTheme.innerHTML = '<img src="../img/moon.svg" alt="Dark Theme">';
  

}
}

toggleTheme.addEventListener('click', changeTheme);



















