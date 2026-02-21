const spellButtons = document.querySelectorAll('.spell-btn');
const effectContainer = document.getElementById('spell-effect-container');

spellButtons.forEach(button => {
  button.addEventListener('click', () => {
    const spell = button.dataset.spell;
    createSpellEffect(spell);
  });
});

function createSpellEffect(spell) {
  for(let i = 0; i < 30; i++){
    const effect = document.createElement('div');
    effect.classList.add('spell-effect');
    effect.style.position = 'absolute';
    effect.style.pointerEvents = 'none';
    effect.style.borderRadius = '50%';
    effect.style.left = Math.random()*100 + '%';
    effect.style.top = Math.random()*100 + '%';
    effect.style.zIndex = 50;

    switch(spell){
      case 'Lumos':
        effect.style.width = effect.style.height = Math.random()*12+8 + 'px';
        effect.style.background = `rgba(255,255,200,${Math.random()})`;
        effect.animate([{transform:'scale(0)', opacity:0}, {transform:'scale(1.5)', opacity:1}, {transform:'scale(0)', opacity:0}], {duration:1500, easing:'ease-in-out'});
        break;
      case 'Expelliarmus':
        effect.style.width = '4px';
        effect.style.height = '20px';
        effect.style.background = `hsl(${Math.random()*60+180},100%,70%)`;
        effect.animate([{transform:'translateY(0) rotate(0deg)', opacity:1}, {transform:`translateY(-200px) rotate(${Math.random()*360}deg)`, opacity:0}], {duration:1200, easing:'ease-out'});
        break;
      case 'Alohomora':
        effect.style.width = effect.style.height = Math.random()*10+5 + 'px';
        effect.style.background = `rgba(180,255,255,${Math.random()})`;
        effect.animate([{transform:'scale(0)', opacity:0}, {transform:'scale(1)', opacity:1}, {transform:'scale(0)', opacity:0}], {duration:1800, easing:'ease-in-out'});
        break;
      case 'Wingardium Leviosa':
        effect.style.width = effect.style.height = Math.random()*15+10 + 'px';
        effect.style.background = `hsl(${Math.random()*360},80%,70%)`;
        effect.animate([{transform:'translateY(0) scale(0.5)', opacity:0.8}, {transform:'translateY(-250px) scale(1)', opacity:0}], {duration:2000, easing:'ease-out'});
        break;
      case 'Incendio':
        effect.style.width = effect.style.height = Math.random()*15+5 + 'px';
        effect.style.background = `hsl(${Math.random()*20},100%,50%)`;
        effect.animate([{transform:'translateY(0) scale(0.5)', opacity:1}, {transform:'translateY(-150px) scale(1.5)', opacity:0}], {duration:1000, easing:'ease-out'});
        break;
      case 'Protego':
        effect.style.width = effect.style.height = Math.random()*25+20 + 'px';
        effect.style.border = `2px solid hsl(${Math.random()*360},100%,75%)`;
        effect.style.background = 'transparent';
        effect.animate([{transform:'scale(0)', opacity:1}, {transform:'scale(1)', opacity:0}], {duration:1200, easing:'ease-out'});
        break;
    }

    effectContainer.appendChild(effect);
    setTimeout(()=> effect.remove(), 2500);
  }
}
