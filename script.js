const questionsContainer = document.querySelectorAll(".questions-container");// have h2 , svg , p 
const questions = document.querySelectorAll(".questions"); // h2 

function display(event) {
  const childrens = this.children;
   // children for all questions-container
  // [0]: h2.questions
  // [1]: svg
  // [2]: p.answers

  if(!childrens[2].classList.contains("active")) // if children [2]: p.answers not have class with active then continue condition
   {
  

    childrens[0].classList.add("questions-active"); // add class for h2 
    childrens[2].classList.add("active");   // add class for <p>
    childrens[1].classList.add("arrow-active");  // add class for <svg>
  } else {
    childrens[0].classList.remove("questions-active");
    childrens[2].classList.remove("active");  
    childrens[1].classList.remove("arrow-active"); 
}};

questionsContainer.forEach(container => {
  container.addEventListener("click", display)
  console.log('hellooo', display)
})

console.log("fuck" ,questions, "ff",questionsContainer)

