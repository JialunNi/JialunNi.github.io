window.gCanvas = document.querySelector('canvas.upper-canvas');
window.aaa = document.querySelector('.mat-focus-indicator.mat-button.mat-button-base.mat-icon-button.ng-star-inserted0');
// window.aaa.innerHTML='<button id="save">Save</button>'

function onSave() {
  gCanvas.toBlob((blob) => {
    const timestamp = Date.now().toString();
    const a = document.createElement('a');
    document.body.append(a);
    a.download = `${timestamp}.png`;
    a.href = URL.createObjectURL(blob);
    a.click();
    a.remove();
  });
}


setInterval(()=> { 
  window.aaa.addEventListener('click', ()=>{
    alert('rua')
  });
  // document.querySelector('#save').addEventListener('click', onSave);
}, 1000);