var date = document.querySelector('#birthdate');

var output = document.querySelector('.sign');

function makeRequest(url, method, formData, callback) {
    var headers;
    if(method == "GET" || !formData) {
        headers = {
            method: method
        }
    } else {
        headers = {
            method: method,
            body: formData
        }
    }
    fetch(url, headers).then((data) => {
        return data.json();
    }).then((result) => {
        callback(result);
    }).catch((err) => {
        console.log(err);
    })
}

function viewHoroscope() {
    makeRequest("./php/viewHoroscope.php", "GET", undefined, (response) => {
        if(response) {
            output.innerHTML = `Your sign is ${response[0].horoscopeSign}`;
        } 
    })
}


function saveHoroscope() {
    var requestData = new FormData();
    // Convert input year to year stated in database
    var dateValue = new Date(document.querySelector('#birthdate').value);
    dateValue.setFullYear("2019");
    var dateToSave = dateValue.toISOString().substring(0, 10);
    requestData.append("inputDate", dateToSave);
    
   makeRequest("./php/addHoroscope.php", "POST", requestData, (response) => {
        console.log(response);
  document.location.reload(true);
        viewHoroscope();
    }) 

};

function updateHoroscope() {
    var requestData = new FormData();
    // Convert input year to year stated in database
    var dateValue = new Date(document.querySelector('#birthdate').value);
    dateValue.setFullYear("2019");
    var dateToSave = dateValue.toISOString().substring(0, 10);
    requestData.append("inputDate", dateToSave);

    makeRequest("./php/updateHoroscope.php", "POST", requestData, (response) => {
        console.log(response);
        viewHoroscope();
    })
}

function deleteHoroscope() {


    makeRequest("./php/deleteHoroscope.php", "DELETE", undefined, (response) => {
        console.log(response);
        if(response) {
            viewHoroscope();
            output.innerText = 'Your horoscope was deleted';
            document.location.reload(true);
        }
    })
}

viewHoroscope();
