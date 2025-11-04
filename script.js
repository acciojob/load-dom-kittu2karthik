//your JS code here. If required.

document.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
    const p = document.createElement('p');
    p.textContent = 'DOM load success';
    document.body.appendChild(p);
  }, 100);
	
})
