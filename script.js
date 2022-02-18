let h1 = document.querySelector('h1');

document.querySelector('#text').addEventListener('input', function() {
  h1.textContent = this.value;
});
document.querySelector('#text-color').addEventListener('input', function() {
  h1.style.color = this.value;
});
document.querySelector('#background').addEventListener('input', function() {
  h1.style.backgroundColor = this.value;
});
document.querySelector('#font-family').addEventListener('input', function() {
  h1.style.fontFamily = this.value;
});
document.querySelector('#font-size').addEventListener('input', function() {
  h1.style.fontSize = this.value + "px";
  this.nextSibling.textContent = h1.style.fontSize;
});
document.querySelector('#bold').addEventListener('input', function() {
  h1.style.fontWeight = this.value;
});
document.querySelector('#italic').addEventListener('input', function() {
  h1.style.fontStyle = this.checked ? 'italic' : 'normal';
});
document.querySelector('#underline').addEventListener('input', function() {
  h1.style.textDecoration = this.value;
});
// document.querySelector('#none').addEventListener('input', function() {
//   h1.style.border = 'none';
// });
// document.querySelector('#solid').addEventListener('input', function() {
//   h1.style.border = 'solid';
// });
// document.querySelector('#dashed').addEventListener('input', function() {
//   h1.style.border = 'dashed';
// });
// document.querySelector('#dotted').addEventListener('input', function() {
//   h1.style.border = 'dotted';
// });
document.getElementsByName('border').forEach(function(input) {
  input.addEventListener('input', function() {
    h1.style.border = `3px ${this.value} black`;
  });
});
document.querySelector('#url').addEventListener('input', function() {
  h1.value = this.value;
});



















