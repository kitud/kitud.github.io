var num_product = 0;

function create_field_product(){
    var string_num_product = `_${num_product}`;
    const content_input = document.createElement("div");
    content_input.classList.add("content_prices");
    content_input.classList.add(string_num_product);
    document.querySelector(".content_products").appendChild(content_input);

    const delete_input = document.createElement("button");
    delete_input.textContent = "x";
    delete_input.setAttribute("tabindex", "-1");
    delete_input.classList.add("b_delete_product");
    document.querySelector(`.${string_num_product}`).appendChild(delete_input);
    delete_inputt(delete_input);
    
    const in_text = document.createElement("input");
    in_text.setAttribute("type", "text");
    in_text.classList.add("desc_product");
    document.querySelector(`.${string_num_product}`).appendChild(in_text);
    num_product+=1;
}

function delete_inputt(delete_element){
    delete_element.addEventListener("click", e => {
        delete_element.parentElement.remove();
    })
}

function generate_fields(){
    var repeat = parseInt(document.getElementById("qty").value);
    for (i = 0; i < repeat; i+=1){
        create_field_product();
    }
}

function print_section(){

    window.print();
}

function generate_prices(){
    var d_products = document.querySelector(".products");
    while (d_products.firstChild) {
        d_products.removeChild(d_products.firstChild);
    }
    var all_prices = document.querySelector(".content_products").children;
    var product = [];
    var num_print = 0;
    var string_num_product = "";
    for (i = 0; i < all_prices.length; i+=1){
        product = all_prices[i].lastChild.value.toUpperCase().split(" ");

        for (s = 0; s < product[product.length-1]; s+=1){
            string_num_product = `p${num_print}`;

            const content_price = document.createElement("div");
            content_price.classList.add("content_price");
            content_price.classList.add(string_num_product);
            document.querySelector(".products").appendChild(content_price);
            
            // if (num_print == 14 || num_print == 15){
            //     content_price.classList.add("page_break");
            //     if (num_print == 15){
            //         num_print = 1;
            //     }
            // }

            if (num_print == 13){
                content_price.classList.add("page_break");
                num_print = -1;
                // if (num_print == 17){
                //     num_print = 1;
                // }
            }

            const desc_price = document.createElement("p");
            desc_price.classList.add("desc_price");
            var text = "";
            for (j=0; j < product.length-2; j+=1){
                text += `${product[j]} `;
            }
            desc_price.textContent = text;
            content_price.appendChild(document.createElement("div").appendChild(desc_price))

            const price = document.createElement("p");
            price.classList.add("price");
            price.textContent = product[product.length-2];
            content_price.appendChild(document.createElement("div").appendChild(price))

            // while ((desc_price.clientWidth / 36.8).toFixed(1) > 7 || (desc_price.clientHeight / 36.8).toFixed(1) > 2){
            //     let f_size = parseInt(window.getComputedStyle(desc_price).getPropertyValue("font-size")) - 1;
            //     desc_price.setAttribute("style", `font-size: ${f_size}px`);
            // }

            reduce_font_height(desc_price, 100);
            reduce_font_width(price, 120);

            num_print+=1;
        }
    }
    print_section();
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