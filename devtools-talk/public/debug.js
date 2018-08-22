function itsADeadCode() {
  const first = 'Ravi';
  const second = 'Sharma';
  console.info('this function is useless.');
}

function callMe() {
  const a = 1,
        b = 2;

  const result = magicalFunction(a);
  console.log(`I got called! and ${a} + ${b} = ${result + b}`);
}

// SNIPPETS JS //
document.getElementById('form1').addEventListener('submit', form1Submitted);
document.getElementById('form2').addEventListener('submit', form2Submitted);
document.getElementById('form3').addEventListener('submit', form3Submitted);
document.getElementById('form4').addEventListener('submit', form4Submitted);

function switchToForm(from, to) {
  const currentElement = document.getElementById(from);
  const nextForm = document.getElementById(to);
  const inputElm = nextForm.querySelector('input');

  currentElement.classList.add('animate-out');
  nextForm.classList.add('animate-in');
  inputElm && inputElm.focus();

  // remove animate classes and previouosly active class
  setTimeout(() => {
    nextForm.classList.add('active');
    nextForm.classList.remove('animate-in');
    currentElement.classList.remove('active', 'animate-out');
  }, 800);
}

function form1Submitted(e) {
  e.preventDefault();
  switchToForm('form1', 'form2');
}
function form2Submitted(e) {
  e.preventDefault();
  switchToForm('form2', 'form3');
}
function form3Submitted(e) {
  e.preventDefault();
  switchToForm('form3', 'form4');
}

function form4Submitted(e) {
  e.preventDefault();
  switchToForm('form4', 'form1');
  ['form1', 'form2', 'form3'].forEach(formId =>
    document.getElementById(formId).reset()
  );
}
