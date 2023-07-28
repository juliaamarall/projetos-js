var caixasBlocosList = document.querySelectorAll('[class*="infos-left"]');

function pulsar(element) {
   element.style.position = 'relative';
   element.style.bottom = '2%';
}

function resetPosition(element) {
   element.style.position = 'relative';
   element.style.bottom = '0%';
}



caixasBlocosList.forEach(function (caixasBlocos) {
    caixasBlocos.addEventListener("mouseover", function () {
        pulsar(caixasBlocos);
    });

    caixasBlocos.addEventListener("mouseout", function () {
        resetPosition(caixasBlocos);
    });
});



