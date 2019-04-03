window.onload = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let resp = this.response;
            document.getElementById('root').innerHTML = resp
        }
    };
    xhttp.open('GET', 'test.json', true);
    xhttp.send()
}
