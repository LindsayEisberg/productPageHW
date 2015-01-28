var productPage = {
  init:function() {
    productPage.initStyling();
    productPage.initEvents();
    productPage.renderAllProducts(products);
  },

  initStyling: function(){
    console.log('styling loaded correctly');
  },
   initEvents: function(){
     $('form').on('submit', function(event) {
       event.preventDefault();
       productPage.createProduct();
     });



     $('section').on('click', '.deleteProduct', productPage.deleteProduct);
     $('section').on('click', '.updateProduct', productPage.updateProduct);

     console.log('events loaded correctly');

   },

   createProduct: function (){
     var newProduct = {
       title: $('input[name="title"]').val(), //title goes here
       image: $('input[name="image"]').val(), //image url
       description: $('textarea[name="description"]').val(),
       price: $('input[name="price"]').val(),
     };

     products.push(newProduct);
     productPage.renderProduct(newProduct, products.indexOf(newProduct));

     $('input').val('');
     $('textarea').val('');
   },


   updateProduct: function (event){
     event.preventDefault();
     var title = $(this).closest('article').find('h2').text(); //title goes here
     var image = $(this).closest('article').find('img').attr('src'); //image url
     var description = $(this).closest('article').find('p').text();
     var price = $(this).closest('article').find('h3').last().text();



    $(this).closest('.wrapper').replaceWith(
      '<form>' +
      '<input type=text value=' + title + ' >'
      + '<input type=url value=' + image + ' >'
      + '<textarea name=>' + description + '</textarea>'
      + '<input type=text value=' + price + ' >'
      + '<button class="updateProduct">' + "Update Product" + '</button>'
      + '</form>'
    );


   var thisIndex = $(this).closest('article').data('index');
   products.splice(thisIndex, 1, updateProduct);
   productPage.renderAllProducts(products);

 },
   deleteProduct: function (event){
     var productIndex = $(this).closest('article').data('index');
     products.splice(productIndex, 1);

     $(this).closest('article').remove();

   },
//adding functions to the single products

  renderProduct: function (product, index, array) {
    product.idx = index;
    var compiled = _.template(templates.product);
    $('section').prepend(compiled(product));

  },


//creating multiple posts using the above iteration

renderAllProducts: function(productInfo) {
  _.each(productInfo, productPage.renderProduct);

}




};

$(document).ready(function(){

  productPage.init();


});
