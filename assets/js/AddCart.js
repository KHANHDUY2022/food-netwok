function addtocart(x) {
     var menu__content = x.parentElement.children;
     var img = menu__content[0].src;
     var tenSp = menu__content[1].innerText;
     var DgiaSp = menu__content[2].innerText;
     var GiaSp = menu__content[3].children[0].innerText;
     var SoLuong = menu__content[4];


     // alert(DgiaSp);
     var item = { img, tenSp, DgiaSp, GiaSp }
     console.log(item);
}