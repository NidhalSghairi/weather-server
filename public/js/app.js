const search =()=>{
    const adresse= document.getElementById('test').value
    const url = "/weather?adresse="+adresse
    fetch(url).then((response)=>{
        response.json().then((data)=>{
            document.getElementById('location').innerHTML = data.location
            document.getElementById('summary').innerHTML = data.forecastData
        })
    })
}