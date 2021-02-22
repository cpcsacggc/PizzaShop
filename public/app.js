function something()
{

 /* var x = window.localStorage.getItem('aaa');
    x = x * 1 + 1;
  window.localStorage.setItem('aaa', x);
    alert(x);

  */
}
function add_to_cart(id){
  alert("You've added pizza with id:" + id);
  var x = window.localStorage.getItem('product_'+id);
  x = x * 1 + 1;
  window.localStorage.setItem('product_'+id, x);

}