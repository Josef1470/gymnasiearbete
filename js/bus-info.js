document.getElementById("SL-form").addEventListener("submit", function(){
    event.preventDefault();

    var siteID2 = document.getElementById("siteID2").value;


    var URL_change = "https://cors-anywhere.herokuapp.com/https://api.sl.se/api2/realtimedeparturesV4.json?key=6910d12798ae4f9b89648ca8d508e93a&siteid=" + siteID2 + "&timewindow=60";


fetch(URL_change)
.then(res => res.json())
.then(data => {


    // BUSS
let bus = data.ResponseData.Buses;
myString = "";


if (bus[0].DisplayTime == "Nu") { 
  myString += `Buss mot ${bus[0].Destination} avgår ${bus[0].DisplayTime} <br> <br>`;
}

else { 
  myString += `Buss mot ${bus[0].Destination} avgår om ${bus[0].DisplayTime} <br> <br>`;
}


if (bus[1].DisplayTime == "Nu") { 
  myString += `Buss mot ${bus[1].Destination} avgår ${bus[1].DisplayTime} <br> <br>`;
}

else {
  myString += `\nBuss mot ${bus[1].Destination} avgår om ${bus[1].DisplayTime} <br> <br>`;
}




for (let i = 2; i < 8; i++) {
  myString += `Buss mot ${bus[i].Destination} avgår om ${bus[i].DisplayTime} <br> <br>`;
}
  

document.getElementById("avgangstider-buss").innerHTML = myString;
});
});