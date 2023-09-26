// let's use our object on the click of the login button
$('#login').click(function() {

    var myFirstName = document.getElementById('myFirstName').value;
    var myLastName = document.getElementById('myLastName').value;
    var dateofBirth = document.getElementById("birthdate").value;

    //Convert my birthdate to my age
    var dob = new Date(dateofBirth);
    var month_diff = Date.now() - dob.getTime();  
    var age_dt = new Date(month_diff);    
    var year = age_dt.getUTCFullYear();
    var myAge = Math.abs(year - 1970);
 
    
    if(myFirstName === "" || myLastName === ""){
       alert('Firstname and lastname are required!');

     } else if(isNaN(myAge)){

        alert('You must declare your age!');

     } else if (myAge <=18){
        alert ('You must be +18 to apply!');

     } else{
         var loginGrtr = G$(myFirstName , myLastName, myAge);
         
         $('#logindiv').hide();

        // fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well
         loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log()          
     }
    
});
