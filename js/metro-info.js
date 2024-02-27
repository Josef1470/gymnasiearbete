document.getElementById("SL-form").addEventListener("submit", function(){
    event.preventDefault();

    var siteID = document.getElementById("siteID").value;
    var siteID2 = document.getElementById("siteID2").value;


    var URL_change = "https://cors-anywhere.herokuapp.com/https://api.sl.se/api2/realtimedeparturesV4.json?key=6910d12798ae4f9b89648ca8d508e93a&siteid=1002&timewindow=60";


fetch(URL_change)
.then(res => res.json())
.then(data => {


    // BUSS
let metro = data.ResponseData.Metros;
myString = "";


if (metro[0].DisplayTime == "Nu") { 
  myString += `Tåg mot ${metro[0].Destination} avgår ${metro[0].DisplayTime} <br> <br>`;
}

else { 
  myString += `Tåg mot ${metro[0].Destination} avgår om ${metro[0].DisplayTime} <br> <br>`;
}


if (metro[1].DisplayTime == "Nu") { 
  myString += `Tåg mot ${metro[1].Destination} avgår ${metro[1].DisplayTime} <br> <br>`;
}

else {
  myString += `\nTåg mot ${metro[1].Destination} avgår om ${metro[1].DisplayTime} <br> <br>`;
}




for (let i = 2; i < 8; i++) {
  myString += `Tåg mot ${metro[i].Destination} avgår om ${metro[i].DisplayTime} <br> <br>`;
}
  

document.getElementById("avgangstider-tag").innerHTML = myString;

});
});
