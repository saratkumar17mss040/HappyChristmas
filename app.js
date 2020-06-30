const checkboxInput = document.querySelector('input[type="checkbox"]');
// mainRoot.style.display = 'none';
let mainRoot = switchOnLights();
// checkboxInput.addEventListener('change', checkboxChange);
checkboxInput.addEventListener('change', checkboxChange);

function switchOnLights() {
  let main_container = document.getElementById('main_container');
  let root = document.createElement('div');
  root.id = 'root';
  root.style.display = 'none';
  let leftdiv = document.createElement('div');
  let rightdiv = document.createElement('div');
  leftdiv.classList.add('box', 'box-left');
  rightdiv.classList.add('box', 'box-right');
  generateSpan(leftdiv);
  generateSpan(rightdiv);
  root.appendChild(leftdiv);
  root.appendChild(rightdiv);
  main_container.appendChild(root);
  return root;
}

function checkboxChange() {
  mainRoot.style.display = checkboxInput.checked ? 'block' : 'none';
}

function generateSpan(div) {
  for (let i = 1; i < 10; i++) {
    div.appendChild(document.createElement('span'));
  }
}
