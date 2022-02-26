
var data = JSON.parse(localStorage.getItem("questions"));
console.log(data)
var congrats = document.querySelector(".congrats");
var ballons = document.querySelectorAll(".ballons");

all =[];
radiobutton = [];
 deleteComma = data.forEach((x) => {
    all = [...all,x.correct_answer];
    console.log(all) ;
    var incorrectAnswers = x.incorrect_answers.map((c)=>{
        return `<label for=${c}>${c}<input type="radio" name='${x.question}' id=${(c)} /></label>` }); 
        
    document.getElementById("questions").appendChild(document.createElement("div")).innerHTML =  
   ` <div id="question"> ${x.question} </div>
   <div id="answers">
   <label for=${x.correct_answer}>${x.correct_answer}<input type="radio" name='${x.question}' id=${(x.correct_answer)} /></label> 
      ${incorrectAnswers.join(" ")} 
      </div>
       `;

});

document.getElementById("correcting").addEventListener('click',function name() {
    radio = []
    radiobutton  = document.querySelectorAll('input[type="radio"]:checked');
    for(element of radiobutton){
       elements= element.parentElement
           radio = [...radio,elements.innerText];

    }
    
    if(JSON.stringify(radio)==JSON.stringify(all)){
        document.getElementById("estimate").innerHTML= data.length + "/" + data.length ;
        ballons.forEach(x => {
            x.style.visibility="visible"
        });
        
        congrats.style.visibility="visible";
    }
    else{
        if(radio.length!=all.length){
             alert("please answer all questions")
        }
        else{
        var right = []
        for(i=0 ; i<radio.length; i++){
            if(radio[i]==all[i]){
               right = [...right,radio[i]];
               console.log(right) 
            }
        }
          total = right.length;
          document.getElementById("estimate").innerHTML= total + "/" + data.length;


    }
    }
});

document.getElementById("back").addEventListener('click',function name() {
    window.location.assign("index.html");
});

document.getElementById("show").addEventListener('click',function name() {
    var correctAnswerUi= all.map((x)=>{
       return `<div id="correctAnswerUi">  ${x} </div>`;
  }) ;
   
    //`${all.join(" ")}`
    document.getElementById("show_correct_answers").innerHTML= correctAnswerUi.join(""); 


});