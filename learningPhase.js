
// top-panel 跳數字
let count = 1; // 記錄目前點到第幾個

window.addEventListener('click', () => {
  if (count <= 4) {
    const focusItem = document.getElementById(`num${count}`);
    if (focusItem) {
        document.querySelectorAll('.num').forEach(item => {
            item.style.width = '10px';
            item.style.lineHeight = '10px';
            item.style.fontSize = '20px';
            item.style.backgroundColor = '#727272';
            item.style.color = '#727272';

        });

        focusItem.style.width = '50px';
        focusItem.style.lineHeight = '50px';
        focusItem.style.fontSize = '35px';
        focusItem.style.backgroundColor = 'rgb(92, 180, 173)';
        focusItem.style.color = 'rgb(252, 253, 253)';

        if(count == 4){
            document.getElementById('continueBtn').style.display = 'block';
        }
    }
    count++; // 點擊後數字加 1
  }
});