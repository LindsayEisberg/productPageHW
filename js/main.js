var productPage = {
  init:function() {
    productPage.initStyling();
    productPage.initEvents();
    productPage.allProducts(products);
  },

  initStyling: function(){
    console.log('styling loaded correctly');
  },
   initEvents: function(){
     console.log('events loaded correctly');

   },

//adding functions to the single products

  addProduct: function (product, index, array) {
    $('section').append(
      '<article>' +
      '<h2>' + product.title + '</h2>'
      + '<img src=' + product.image + ' />'
      + '<p>' + product.description + '</p>'
      + '</article>'
    );

  },


//creating multiple posts using the above iteration

allProducts: function(productInfo) {
  productInfo.forEach(productPage.addProduct);

}




};

$(document).ready(function(){

  productPage.init();


});
