function fetchDataAndDisplay(delay) {
    fetch("http://localhost:3000/delay/"+delay)
        .then(response => response.text())
        .then(data => display(data))
        .catch(error => console.error('Error:', error));
}

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


// delayed by 2 second
fetchDataAndDisplay(2)

syncdisplay("sync display # 1");

// delayed by 5 second
fetchDataAndDisplay(5);

syncdisplay("sync display # 2");
syncdisplay("sync display # 3");

// delayed by 1 second
fetchDataAndDisplay(1);

syncdisplay("sync display # 4");
syncdisplay("sync display # 5");
syncdisplay("sync display # 6");

// delayed by 3 second
fetchDataAndDisplay(3);

syncdisplay("sync display # 7");
syncdisplay("sync display # 8");
