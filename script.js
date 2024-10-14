document.getElementById('toggleButton').addEventListener('click', function() {
    var glassPanel = document.getElementById('glassPanel');
    if (glassPanel.classList.contains('hidden')) {
        glassPanel.classList.remove('hidden');
    } else {
        glassPanel.classList.add('hidden');
    }
});
