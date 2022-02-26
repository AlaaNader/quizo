





$(function() {
    
  $("#start").on("click",function(){
     nquestion = $("#nquestion").val();
     radiobutton  = $('input[type="radio"]:checked');
     category = $("#category").val();
    if(radiobutton.length!=0 && Number(nquestion)!=0 && Number(nquestion)<=20 && Number(nquestion)>0 &&(category==27 || category==21 || category==23)){ // using length because radiobutton  = $('input[type="radio"]:checked'); returns obhect has an attribute called length 
      
        fetch(`https://opentdb.com/api.php?amount=${nquestion}&category=${category}&difficulty=${radiobutton[0].getAttribute("id")}`)
        .then(s=>s.json()).then( data=>{
             localStorage.setItem("questions",JSON.stringify(data.results));
             window.location.assign("questionPage.html"); 
        }
);
}
else{
    if(( Number(nquestion)>20 || Number(nquestion)<0 ) && radiobutton.length!=0 && (category==27 || category==21 || category==23)){
        alert("please commit to the right range")
    }
    else{
    alert("please fill data")
        }} 
}

);
  
});




 

  
