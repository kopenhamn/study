window.onload = () => {
    document.getElementById('btn').onclick = () => {
        let promise = new Promise((resolve, reject) => {
            setTimeout(
                () => {
                    let xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function() {
                        if(this.readyState == 4 && this.status == 200) {
                            document.getElementById('root').innerHTML = this.response;
                            resolve(this.status)
                        } else if (this.readyState == 4 && this.status != 200) {
                            reject(this.status)
                        }
                    };
                    xhttp.open('GET', 'data.json', true);
                    xhttp.send()
                },
                3000
            )
        });
        promise.then(
            result => {
                alert('Fulfiled: ' + result)
            },

            error => {
                alert('Rejected: ' + error)
            }
        )

    }
}
