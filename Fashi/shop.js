const slider = document.getElementById('range');
const output = document.getElementById('price-tag');
output.innerHTML = `Range $ ${slider.value}`;

slider.oninput = function() {
    output.innerHTML = `Range: $ ${this.value}`;
}