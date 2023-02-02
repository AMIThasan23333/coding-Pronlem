

const phones = [

    {name : 'Samsung', camera :12, storage :'32gb', price :36000, color : 'silver'},

    {name : 'amsung', camera :12, storage :'32gb', price :60000, color : 'silver'},

    {name : 'sung', camera :12, storage :'32gb', price :16000, color : 'silver'},

    {name : 'ung', camera :12, storage :'32gb', price :18000, color : 'silver'},
]

function ChespestPhone(phones){

    let cheapest = phones[0];

    for(let i =0; i< phones.length; i++){

        const phone = phones[i];

        if(phone.price < cheapest.price){

            cheapest =phone;

        }

    }

    return cheapest;

}

  const myselection = ChespestPhone(phones);

  console.log(myselection)
