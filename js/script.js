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

    // list_input.push(string_num_product);
    num_product+=1;
}

function delete_inputt(delete_element){
    delete_element.addEventListener("click", e => {
        // console.log(delete_element.parentElement);
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
    // var ficha = document.querySelector(".products");
	// var ventimp = window.open(' ', 'popimpr');
	// ventimp.document.write( ficha.innerHTML );
	// ventimp.document.close();
	// ventimp.print( );
	// ventimp.close();

    window.print();
}

function generate_prices(){
    var d_products = document.querySelector(".products");
    while (d_products.firstChild) {
        d_products.removeChild(d_products.firstChild);
    }
    // console.log(d_products.length);
    // for (l = 0; l < d_products.length; l+=1){
    //     d_products[l].remove();
    // } 
    // console.log(d_products);
    var all_prices = document.querySelector(".content_products").children;
    var product = [];
    var num_print = 0;
    var string_num_product = "";
    // console.log(all_prices);
    for (i = 0; i < all_prices.length; i+=1){
        product = all_prices[i].lastChild.value.toUpperCase().split(" ");

        // console.log(product.length);

        for (s = 0; s < product[product.length-1]; s+=1){
            string_num_product = `p${num_print}`;

            const content_price = document.createElement("div");
            content_price.classList.add("content_price");
            content_price.classList.add(string_num_product);
            document.querySelector(".products").appendChild(content_price);
            
            if (num_print == 14 || num_print == 15){
                // content_price.setAttribute("style", "@pmedia print {margin-top: 2cm;}");
                content_price.classList.add("page_break");
                if (num_print == 15){
                    num_print = 1;
                }
            }

            const desc_price = document.createElement("p");
            desc_price.classList.add("desc_price");
            var text = "";
            for (j=0; j < product.length-2; j+=1){
                text += `${product[j]} `;
            }
            // console.log(text);
            desc_price.textContent = text;
            content_price.appendChild(document.createElement("div").appendChild(desc_price))

            const price = document.createElement("p");
            price.classList.add("price");
            price.textContent = product[product.length-2];
            content_price.appendChild(document.createElement("div").appendChild(price))

            // console.log((desc_price.clientWidth / 36.8).toFixed(1));
            // console.log((desc_price.clientHeight / 36.8).toFixed(1));
            // console.log(window.getComputedStyle(desc_price).getPropertyValue("font-size"));

            while ((desc_price.clientWidth / 36.8).toFixed(1) > 7 || (desc_price.clientHeight / 36.8).toFixed(1) > 2){
                let f_size = parseInt(window.getComputedStyle(desc_price).getPropertyValue("font-size")) - 1;
                desc_price.setAttribute("style", `font-size: ${f_size}px`);
            }

            num_print+=1;
        }

        // const content_price = document.createElement("div");
        // content_price.classList.add("content_price");
        // content_price.classList.add(string_num_product);
        // document.querySelector(".products").appendChild(content_price);

        // const desc_price = document.createElement("p");
        // desc_price.classList.add("desc_price");
        // var text = "";
        // for (j=0; j < product.length-1; j+=1){
        //     text += `${product[j]} `;
        // }
        // // console.log(text);
        // desc_price.textContent = text;
        // content_price.appendChild(document.createElement("div").appendChild(desc_price))

        // const price = document.createElement("p");
        // price.classList.add("price");
        // price.textContent = product[product.length-1];
        // content_price.appendChild(document.createElement("div").appendChild(price))

        // // console.log((desc_price.clientWidth / 36.8).toFixed(1));
        // // console.log((desc_price.clientHeight / 36.8).toFixed(1));
        // // console.log(window.getComputedStyle(desc_price).getPropertyValue("font-size"));

        // while ((desc_price.clientWidth / 36.8).toFixed(1) > 7 || (desc_price.clientHeight / 36.8).toFixed(1) > 2){
        //     let f_size = parseInt(window.getComputedStyle(desc_price).getPropertyValue("font-size")) - 1;
        //     desc_price.setAttribute("style", `font-size: ${f_size}px`);
        // }
        // console.log("Hola mundo");
    }

    // 37.795280352161
    // console.log((document.querySelector(".products").children[0].firstChild.clientWidth / 36.8).toFixed(1));
    // console.log((document.querySelector(".products").children[0].firstChild.clientHeight / 36.8).toFixed(1));
    // console.log((document.querySelector(".products").children[0].clientWidth / 36.8).toFixed(1));
    // console.log((document.querySelector(".products").children[0].clientHeight / 36.8).toFixed(1));
    
}


// console.log(document.getElementById("title").style.fontSize);