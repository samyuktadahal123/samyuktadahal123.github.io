function setTheme(theme) {
    document.body.className = theme;
    document.getElementById('current-mode').textContent = theme.CharAt(0).toUpperCase()+theme.slice(1);
}

//set initial theme on load
window.onload=function(){
    setTheme('default');
};