
let questions = document.querySelectorAll('.question');

for(let i=0; i<questions.length; i++){

  questions[i].addEventListener('click', function(event){

    event.preventDefault();

    let answer = this.nextElementSibling;
    let altura;

    if (!answer.classList.contains('active')){
      
      answer.classList.add('active');
      answer.style.height="auto";
      altura=answer.clientHeight + 'px';
      answer.style.height="0px";
      setTimeout(function () {
      answer.style.height=altura;          
      }, 0);
    }

    else {
      altura = answer.clientHeight + 'px';
      answer.style.height =altura;
      setTimeout(function () {
      answer.style.height = '0px';
      }, 0);
      answer.classList.remove('active');          
    }
    
  });
}