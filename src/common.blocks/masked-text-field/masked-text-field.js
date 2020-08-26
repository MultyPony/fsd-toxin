var selector = document.getElementById("maskDate");
var im = new Inputmask({ alias: "datetime", inputFormat: "dd.mm.yyyy", placeholder: 'ДД.ММ.ГГГГ'});

im.mask(selector);
