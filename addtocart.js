const product = [
    {
        id: 0,
        image: 'image/gg-1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 3000,
    },
    {
        id: 1,
        image: 'image/hh-2.jpg',
        title: 'Air Pods Pro',
        price: 6000,
    },
    {
        id: 2,
        image: 'image/ee-3.jpg',
        title: '250D DSLR Camera',
        price: 12000,
    },
    {
        id: 3,
        image: 'image/aa-1.jpg',
        title: 'Head Phones',
        price: 800,
    },
    {
        id: 4,
        image: 'Image/CYCLONE16512-REDMAGIC-1200x1200-01.-700x700.jpg',
        title: 'RedMagic9PRO',
        price: 14000,
    },
    {
        id: 5,
        image: 'image/BG6-TECNO-SPARK-GO-2024-BLACK(3GB-64GB)-1200X1200-1.-700x700.jpg',
        title: 'Tecno Spark Go',
        price: 7000,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>L ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Anadir al carrito</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Tu carrito esta vacio";
        document.getElementById("total").innerHTML = "L "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "L "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>L ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}