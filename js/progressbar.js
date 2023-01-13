const filled = document.querySelector('.filled');

function update() {
    filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
    requestAnimationFrame(update);
}

update();

//show nav bar
function menu_pop() {
    document.getElementById('toggle_links').style.display="block";
    document.getElementById('toggle_links').style.animation="toggle_up 0.4s forwards 0s linear";
    document.getElementById('toggle-btn').style.display="none";
    document.getElementById('close-btn').style.display="block";
    
}

//hide nav bar
function menu_close() {
    document.getElementById('toggle_links').style.display="none";
    document.getElementById('toggle-btn').style.display="flex";
    document.getElementById('close-btn').style.display="none";
}
