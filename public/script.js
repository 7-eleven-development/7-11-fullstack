async function fetchGasValue() {
    try {
        const res = await fetch('/api/airQuality');  
        const data = await res.json();
        document.getElementById('gas-value').textContent = `Gas Value: ${data.gasValue}`; 
    } catch (err) {
        document.getElementById('gas-value').textContent = 'Failed to load value';
        console.error(err);
    }
}

fetchGasValue();
setInterval(fetchGasValue, 5000);
