let filterData = {
    price: '10000',
    age: 50,
    purpose: ['touring', 'mtb', 'track', 'bmx', 'backpacking'],
    size: [700, 29, 28, 27, 26]
};

let cartData = []

//filter
let priceRangeInput = document.getElementById('priceRangeFilter');

let rangeValue = document.getElementById('priceSpan');

rangeValue.textContent = priceRangeInput.value;

priceRangeInput.addEventListener('input', function () {
    rangeValue.textContent = priceRangeInput.value;
})


document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var price = document.getElementById('priceRangeFilter').value;
    var age = document.getElementById('ageFilter').value;
    var purpose = document.querySelectorAll('input[name="purpose"]');
    var size = document.querySelectorAll('input[name="size"]');
    // Do something with the data (e.g., log it)
    let purposeArray = [];
    purpose.forEach(function (box) {
        if (box.checked) {
            purposeArray.push(box.value);
        }
    })

    let sizeArray = [];
    size.forEach(function (s) {
        if (s.checked) {
            sizeArray.push(s.value);
        }
    })


    console.log('price:', price);
    filterData.price = price;

    console.log('age:', age);
    filterData.age = age;

    filterData.purpose.length = 0;
    for (let i of purposeArray) {
        console.log('purpose', i);
        filterData.purpose.push(i);
    }

    filterData.size.length = 0;
    for (let i of sizeArray) {
        console.log('size', i);
        filterData.size.push(i);
    }
    console.log(filterData);



    fetcher();
});

// cart and checkout

let cart = document.getElementById('cartButton')
cart.addEventListener('click', function () {
    alert(`Cart has product ${cartData}`);
     cartData.forEach((data)=>{
    alert(`Cart has product ${data}`);
    })
});

let checkout = document.getElementById('checkoutButton')
checkout.addEventListener('click', function () {
    cartData.forEach((data)=>{
    alert(`buying product ${data}`);
    })
});


