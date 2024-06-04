const pressLogin = document.getElementById("chkLogin");


pressLogin.addEventListener('click', function(){
    const usr = document.getElementById('unam').value;
    const pas = document.getElementById('pass').value;

    const creds = {
        usr: usr,
        pas: pas
    };

    fetch('Your-server-endpoint',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
    }).then(response => {
        if(response.ok){
            //Data is sent to server, wait for validation
            alert('DataSent');
        } else {
            //Data not sent, Check for connection issue
            alert('Error, Retry', response.status);
        }
    }) 
});