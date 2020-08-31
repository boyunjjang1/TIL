const { pool } = require('../config/database');
const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

 const getHtml = async () => {
    try {
        return await axios.get("https://m.ggumim.co.kr/furniture/more/c2");
    } catch (error) {
        console.error(error);
    }
};


exports.productsList = async (req,res) => {
    
}

exports.productsGet = (req,res) => {

    getHtml()
    .then(html => {
        
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("div.furniture-item").children("div.item-desc");

        $bodyList.each(function(i, elem) {
        ulList[i] = {
            item_brand: $(this).find('div.item-brand').text(),
            item_name: $(this).find('div.item-name').text(),
            item_price: $(this).find('div.item-price').text()
        };
        });



        const data = ulList.filter(n => n.item_name);
        return data;
    })
    .then(res => log(res));


    return;

}