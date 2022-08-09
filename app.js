arrow_up = document.querySelector('.arrow-up');
paragraph= document.querySelector('.question_paragragh');
arrow_up.addEventListener('click', ()=> {

  paragraph.classList.add('hidden')
  if (paragraph.classList.add('hidden')) {

    paragraph.classList.remove('hidden');
  } else if (paragraph.classList.remove('hidden')) {

    paragraph.classList.add('hidden');
  }
}