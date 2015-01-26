
var templates = {};

templates.product = [
  '<article>',
  '<h2><%= title %></h2>',
  '<img src=<%= image %>/>',
  '<h3><%= "Product Description" %></h3>',
  '<p><%= description %></p>',
  '<h3><%= price %></h3>',
  '</article>'

].join("");
