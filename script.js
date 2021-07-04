let clicks = 1;

button.onclick = start;

function start() {
    button.onclick = () => counter.textContent = clicks++;
}