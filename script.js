function fun() {
    var rtl = document.getElementById('rtl');
    var ttl = document.getElementById('ttl');
    var rtr = document.getElementById('rtr');
    var ttr = document.getElementById('ttr');
    var rbr = document.getElementById('rbr');
    var tbr = document.getElementById('tbr');
    var rbl = document.getElementById('rbl');
    var tbl = document.getElementById('tbl');
    var rWidth = document.getElementById('rWidth');
    var tWidth = document.getElementById('tWidth');
    var rOpacity = document.getElementById('rOpacity');
    var tOpacity = document.getElementById('tOpacity');

    var block = document.getElementById('block');

    ttl.value = rtl.value;
    ttr.value = rtr.value;
    tbr.value = rbr.value;
    tbl.value = rbl.value;
    tWidth.value = rWidth.value;
    tOpacity.value = rOpacity.value/100;

    block.style.borderRadius = rtl.value + 'px ' + rtr.value + 'px ' + rbr.value + 'px ' + rbl.value + 'px ';
    block.style.width = rWidth.value + '%';
    block.style.opacity = rOpacity.value/100;
}