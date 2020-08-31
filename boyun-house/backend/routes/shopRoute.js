module.exports = function(app){
    const shop = require('../controllers/shopController');
    app.get('/products/:page_no', shop.productsList);
    app.get('/pd', shop.productsGet);

};
