// Make text on the webpage more accessible to those with vision impairment
document.addEventListener('DOMContentLoaded', function() {
  const defaultFontSize = 16;
  let currentFontSize = defaultFontSize;

  document.getElementById('increaseTextSize').addEventListener('click', function() {
    currentFontSize += 2;
    document.body.style.fontSize = currentFontSize + 'px';
  });

  document.getElementById('decreaseTextSize').addEventListener('click', function() {
    currentFontSize = Math.max(defaultFontSize, currentFontSize - 2);
    document.body.style.fontSize = currentFontSize + 'px';
  });
});
