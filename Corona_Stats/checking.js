//FOR SIGN IN
function mail_check_sign(){
validate = signi.mail.value.search("@gmail.com");
namee = signi.username.value.search("\\w");
pass = signi.password.value.search("\\w");

if(validate==-1)
{
    alert("NOT VALID MAIL ID");
}
else if(namee==-1)
{
    alert("PLEASE ENTER A NAME");
}
else if(pass==-1)
{
    alert("ENTER THE PASSWORD");
}
else{
    window.open("home.html","_parent");
}
}

//FOR LOG IN
function check_log()
{
    n = log.username.value.search("\\w");
    pass = log.password.value.search("\\w");

    if(n==-1)
    {alert("ENTER USERNAME");}
    else if(pass==-1)
    {alert("ENTER PASSWORD");}
    else{window.open("home.html","_parent");}
}

//FOR BILLING
function checkout()
{
    var full_name = billing.fname.value.search("\\w");
    var mail = billing.email.value.search("@gmail.com");
    var adr = billing.adr.value.search("\\w");
    var city = billing.city.value.search("\\w");
    var zip = document.getElementById("zip").value;
    var state = billing.state.value.search("\\w");
    var cname = billing.cname.value.search("\\w");
    var ccnum = document.getElementById('ccnum').value;
    var pattern = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/i;
    var expmonth = document.getElementById('expmonth').value;
    months=['january','february','march','april','may','june','july','august','september','october','november','december'];
    var cvv = document.getElementById('cvv').value;
    var expyear = document.getElementById('expyear').value;

    if(full_name==-1)
    {alert('ENTER YOUR NAME');}

    else if(mail ==-1)
    {alert('ENTER CORRECT MAIL ID');}

    
    else if(adr ==-1)
    {alert('ENTER YOUR ADDRESS');}

    
    else if(city ==-1)
    {alert('ENTER YOUR CITY');}
    
    else if(state ==-1)
    {alert('ENTER YOUR STATE');}

    else if(Number(zip)==NaN || zip.length!=6)
    {alert('ENTER VALID ZIP CODE');}
    
    else if(cname ==-1)
    {alert('ENTER YOUR NAME ON CARD');}


    else if(ccnum.search(pattern)==-1)
    {alert('ENTER CORRECT CREDIT CARD NUMBER');}


    else if(!months.includes(expmonth.toLowerCase()))
    {alert('ENTER VALID MONTH');}

    
    else if(Number(cvv)==NaN || cvv.length!=3)
    {alert('INVALID CVV');}

    
    else if(Number(expyear)==NaN || expyear.length!=4)
    {alert('INVALID YEAR');}

    else{alert('YOUR CREDENTIALS HAVE BEEN VERIFIED! YOU CAN PLACE YOUR ORDER NOW');}

}