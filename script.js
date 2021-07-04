let clicks = 0;

button.onclick = start;

function start() {
    button.onclick = () => counter.textContent = clicks++;
}