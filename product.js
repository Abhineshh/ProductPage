
function fetcher(){
    
// Fetch product data from products.json
fetch('product.json')
    .then(response => response.json())
    .then(data => {
        // Access the array of products
        const productContainer = document.getElementById('productContainer');

        productContainer.innerHTML = '';

        data.forEach(product => {

            if(filterData.price >= product.price && filterData.age >= product.age){




            // Access product details like name, image, price, etc.
            console.log(product.name, product.size, product.price);

            // Example: Create HTML elements to display products dynamically
            

            const productElement = document.createElement('div');
            productElement.classList.add('product');
            //product picture
            const picture = document.createElement('img');
            picture.classList.add('image-container');
            picture.setAttribute('src', product.image);
            productElement.appendChild(picture);

            // product info

            const productInfo = document.createElement('div');
            productInfo.classList.add('price-container');

            const proname = document.createElement('h2');
            proname.textContent = `${product.name}`;
            proname.classList.add('product-name');
            productInfo.appendChild(proname);

            const proprice = document.createElement('h3');
            proprice.textContent = `${product.price}`;
            proprice.classList.add('product-price');
            productInfo.appendChild(proprice);


            //desc
            const desc = document.createElement('div');
            desc.classList.add('description');

            const p = document.createElement('p');
            p.textContent = `${product.purpose}`;
            p.classList.add('productPurpose');
            desc.appendChild(p);

            const p2 = document.createElement('p');
            p2.textContent = `Size:${product.size}`;
            p2.classList.add('productSize');
            desc.appendChild(p2);

            const p3 = document.createElement('p');
            p3.textContent = `Age:${product.age}`;
            p3.classList.add('productAge');
            desc.appendChild(p3);

            productInfo.appendChild(desc);
            productElement.appendChild(productInfo);

            //product buttons
            const productButtons = document.createElement('div');
            productButtons.classList.add('product-buttons');

            const b1 = document.createElement('button');
            b1.textContent = `Add to Cart`;
            b1.classList.add('add-to-cart-button');
            b1.setAttribute('onclick',`addtoCart(${product.id});`);
            productButtons.appendChild(b1);

            const b2 = document.createElement('button');
            b2.textContent = `Buy & Check-Out`;
            b2.classList.add('but-only-button');
            b2.setAttribute('onclick',`buyNow(${product.id});`);
            productButtons.appendChild(b2);


            productElement.appendChild(productButtons);
            //final append
            productContainer.appendChild(productElement);

            
            }

        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

fetcher();


function addtoCart(id){
    cartData.push(id);
    alert(`added product ${id} to cart `)
}

function buyNow(id){
    cartData.length = 0;
    cartData.push(id);
    alert(`Buying only product ${id}`);
}