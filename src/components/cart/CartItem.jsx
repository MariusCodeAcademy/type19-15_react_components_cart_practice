const itemObj = {
  cItemId: '',
  prodId: '',
  title: '',
  qty: '',
  priceUnit: '',
  img: '',
  priceTotal: '',
};

export default function CartItem({ item }) {
  return (
    <div className='grid grid-cols-5'>
      <img className='h-16 w-16 object-cover' src={item.img} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <button className='underline mt-3 text-gray-400'>Remove</button>
      </div>
      <div>
        <button>+</button>
        <p>{item.qty}</p>
        <button>-</button>
      </div>
      <p className=''>{item.priceUnit}</p>
      <p className=''>{item.priceTotal}</p>
    </div>
  );
}

// atvaizduoti visa cartObj informacija
// inputa su mygtukais + -
// inputo reiksme uzpildoma su qty
// keisti ja su + -
