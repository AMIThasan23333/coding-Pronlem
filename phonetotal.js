const phones = [

    {name : 'Samsung', camera :12, storage :'32gb', price :36000, color : 'silver'},

    {name : 'amsung', camera :12, storage :'32gb', price :60000, color : 'silver'},

    {name : 'sung', camera :12, storage :'32gb', price :16000, color : 'silver'},

    {name : 'ung', camera :12, storage :'32gb', price :18000, color : 'silver'},
]


function phonetotal(phones){
    let sum = 0;
     for ( i= 0; i< phones.length; i++){
        const phone = phones[i];
        sum = sum + phone.price;
     }

     return sum;
}

const total = phonetotal(phones);
console.log(total)