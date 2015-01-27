
var templates = {};

templates.product = [
  '<article data-index="<%= idx %>">',
  '<div class=wrapper>',
  '<h2><%= title %></h2>',
  '<img src=<%= image %> />',
  '<h3><%= "Product Description" %></h3>',
  '<p><%= description %></p>',
  '<h3><%= price %></h3>',
  '<p><button class="deleteProduct">Delete Product</button>',
  '<button class="updateProduct">Update Product</button></p>',
  '</div>',
  '</article>'

].join("");
