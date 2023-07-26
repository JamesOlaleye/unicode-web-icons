function unicodewebConcole() {
  const ul = document.querySelector('ul');

  //   ul.id = 'unicode';
  //   ul.className = 'uni-code';

  //   li.innerHTML = `&#9203; &#9200;`;

  for (let i = 127000; i <= 129000; i++) {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.setAttribute('title', i);
    li.innerHTML += `&#${i};`;
  }
}

unicodewebConcole();
