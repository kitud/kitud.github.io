let num = 0;

function print_prices(){
    num = 0;
    generate_prices();
    window.print();
}

function generate_prices(){
    var all_prices = document.querySelector(".content_products").children;
    var d_products = document.querySelector(".section_print");
    while (d_products.firstChild) {
        d_products.removeChild(d_products.firstChild);
    }
    for (i = 0; i < all_prices.length; i+=1){
        product = all_prices[i].lastChild.value.toUpperCase().split(" ");

        for (s = 0; s < product[product.length-1]; s+=1){

            var text = "";
            for (j=0; j < product.length-2; j+=1){
                text += `${product[j]} `;
            }
            // text += '\nVARIAS REFERENCIAS';
            // alert(text + product[product.length-2]);
            create_price(text, product[product.length-2]);
        }
    }
}

function create_price(description, price_num){
    const price1 = document.createElement("div");
    price1.classList.add("price1");

    // if (num%2 == 0) {
    //     price_2.setAttribute("style", "margin-bottom: 0.4cm");
    // }else if(num%2 == 1){
    //     price_2.setAttribute("style", "margin-bottom: 1cm");
    // }
    // num += 1;

    document.querySelector(".section_print").appendChild(price1);

    const logo = document.createElement("div");
    logo.classList.add("logo");
    price1.appendChild(logo);

    const NS = 'http://www.w3.org/2000/svg';

    const svg_logo = document.createElementNS(NS, 'svg');
    svg_logo.setAttributeNS(null, 'width', '7.4cm');
    svg_logo.setAttributeNS(null, 'height', '7.4cm');
    svg_logo.setAttributeNS(null, 'viewBox', '0 0 92.972603 92.972588');
    svg_logo.classList.add('logo_svg');
    logo.appendChild(svg_logo);

    const path_svg = document.createElementNS(NS, "path");
    path_svg.setAttributeNS(null, "d", "M93.297 146.432c0 24.569-19.917 44.486-44.486 44.486H4.324v-44.486c0-24.57 19.917-44.487 44.487-44.487 24.569 0 44.486 19.918 44.486 44.487z");
    path_svg.setAttributeNS(null, "style", "fill:none;stroke:#000;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1");
    path_svg.setAttributeNS(null, "transform", "translate(-2.324 -99.945)");
    svg_logo.appendChild(path_svg);

    const cont_num_price = document.createElement("div");
    cont_num_price.classList.add("cont_num_price");
    logo.append(cont_num_price);

    const num_price = document.createElement("p");
    num_price.classList.add("num_price");
    num_price.textContent = price_num;
    cont_num_price.appendChild(num_price);

    reduce_font_width(num_price, 200);

    const content_desc = document.createElement("div");
    content_desc.classList.add("content_desc");
    price1.appendChild(content_desc);

    const desc_2 = document.createElement("p");
    desc_2.classList.add("desc_2");
    desc_2.innerText = description;
    content_desc.appendChild(desc_2);

    reduce_font_height(desc_2, 70);
    // reduce_font_width(desc_2, 360);

    if (num == 3){
        price1.classList.add("page_break");
        num = -1;
    }

    if (num == 0 || num == 1){
        price1.classList.add("new_page");
    }
    num+= 1;
}

function reduce_font_height(p_text, limit){
    while(p_text.clientHeight > limit){
        let f_size = parseInt(window.getComputedStyle(p_text).getPropertyValue("font-size")) - 1;
        p_text.setAttribute("style", `font-size: ${f_size}px`);
    }
}

function reduce_font_width(p_text, limit){
    while(p_text.clientWidth > limit){
        let f_size = parseInt(window.getComputedStyle(p_text).getPropertyValue("font-size")) - 1;
        p_text.setAttribute("style", `font-size: ${f_size}px`);
    }
}
