function day (cc,yy,mm,dd){
    return ((((cc/19)+1*cc-1)+((5*yy/4)) + ((26*(mm+1)/10)) + dd)%7)+1
  }
  function myClick(){
    var year = document.getElementById("year").value;
    var Month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var be = new Date();
    be.setDate(parseInt(day));
    be.setMonth(parseInt(Month)-1);
    be.setFullYear(parseInt(year));
    var b = be.getDay();
    if(b===0){
        alert("You were born on Sunday");
    }else if(b===1){
        alert("You were born on Monday");
    }else if(b===2){
        alert("You were born on Tuesday");
    }else if(b===3){
        alert("You were born Wednesday");
    }else if(b===4){
        alert("You were born Thursday");
    }else if(b===5){
        alert("You were born Friday");
    }else if(b===6){
        alert("Your born on Saturday");
    }
    if(year==""||year>2098){
        alert("insert a valid year");
    }else if(Month=="" ||Month>12){
        alert("Enter a valid month");
    }else if(day=="" ||day>31){
        alert("Enter a valid month");
    }else if(document.getElementById("male").checked==true && document.getElementById("female").checked==false){
        alert("Your Akan name is " + maleName[b]);
    }else if(document.getElementById("male").checked==false && document.getElementById("female").checked==true){
        alert("Your Akan name is " + femaleName[b]);
    }
}