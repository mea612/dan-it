function renderItems(info) {
    
    document.querySelector('.content').innerHTML = 
    `
        <p><strong>Continent:</strong> ${info.continent}</p>
        <p><strong>Country:</strong> ${info.country}</p>
        <p><strong>Region:</strong> ${info.regionName}</p>
        <p><strong>City:</strong> ${info.city}</p>
        <p><strong>District:</strong> ${info.district = info.district === '' ? null : info.district}</p>
    `;
}

async function getData() {
    const ipRequest = await fetch("https://api.ipify.org/?format=json");
    const ip = await ipRequest.json();
    const ipInfoRequest = await fetch(`http://ip-api.com/json/${ip.ip}?fields=continent,country,regionName,city,district`);
    const ipInfo = await ipInfoRequest.json();
    return ipInfo;
}

const ipBtn = document.querySelector('.getIP');
ipBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    document.querySelector('.content').innerHTML = 'Loading...';
    renderItems(await getData());
})
