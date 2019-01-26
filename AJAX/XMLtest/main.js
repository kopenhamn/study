document.getElementById('btn').onclick = function() {
    let xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var table = '<tr><th>Artist</th><th>Price</th></tr><br>';
            let xmlTable = this.responseXML.getElementsByTagName('CD');
            for(let i = 0; i < xmlTable.length; i++) {
                var artist = xmlTable[i].getElementsByTagName('ARTIST')[0].childNodes[0].nodeValue;
                var price = xmlTable[i].getElementsByTagName('PRICE')[0].childNodes[0].nodeValue;
                table += '<tr><td>' + artist + '</td>' + '<td>' + price + '</td></tr><br>';
            }

            document.getElementById('table').innerHTML = table;
        }
    }
    xhttp.open('GET', 'xTest.xml', true);
    xhttp.send();
}
