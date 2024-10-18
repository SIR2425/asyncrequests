// delayed by 2 second
fetch("http://localhost:3000/delay/2")
    .then(response => response.text())
    .then(data => display(data))
    .catch(error => console.error('Error:', error));
    
syncdisplay("sync display # 1");

// delayed by 5 second
fetch("http://localhost:3000/delay/5")
    .then(response => response.text())
    .then(data => display(data))
    .catch(error => console.error('Error:', error));

syncdisplay("sync display # 2");
syncdisplay("sync display # 3");

// delayed by 1 second
fetch("http://localhost:3000/delay/1")
    .then(response => response.text())
    .then(data => display(data))
    .catch(error => console.error('Error:', error));

syncdisplay("sync display # 4");


syncdisplay("sync display # 5");
syncdisplay("sync display # 6");


// delayed by 3 second
fetch("http://localhost:3000/delay/3")
    .then(response => response.text())
    .then(data => display(data))
    .catch(error => console.error('Error:', error));


syncdisplay("sync display # 7");
syncdisplay("sync display # 8");

function display(data) {
    const divoutput = document.getElementById('output');
    newp = document.createElement('p');
    newp.innerHTML = data;
    divoutput.appendChild(newp);
}

function syncdisplay(data) {
    const divoutput = document.getElementById('output');
    newp = document.createElement('p');
    newp.innerHTML = data;
    divoutput.appendChild(newp);
}


