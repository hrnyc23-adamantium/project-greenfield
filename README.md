# project-greenfield

#### A high performant, React-Redux e-commerce storefront, styled with Material-UI, rendered server-side

## To build:
### For development:
npm run dev_build

### For production:
npm run production_build

## To start:
npm start

## To view:
Go to localhost:8866/?products=:product_id, where the product_id is the id of the product you would like to view.

**Please note:** simply navigating to localhost:8866 will result in a 400 error. There is no homepage, there are only product pages.

## Product Overview

Main image display allows the user to scroll through the current product, view as expanded, and zoom in if needed.  Thumbnails overlay the main image, the current thumbnail is highlighted.  If there are more thumbnails, arrows will be displayed allowing the user to cycle through.  The user is able to click on any thumbnail and go to that image.

![](documentation/productoverviewZoom.gif)

A user is able to select different styles under the current product.  If that style is on sale, the new price will be shown in red.  The available quantity is dictated by which size is selected.

![](documentation/productoverviewSale.gif)



## Questions & Answers
![](documentation/qa-more.gif)
<br/>
<br/>
![](documentation/qa-search.gif)
<br/>
<br/>
![](documentation/qa-modals.gif)




