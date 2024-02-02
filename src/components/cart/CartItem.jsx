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
    <div className='grid grid-cols-5 border items-center mb-2 py-1 pl-1'>
      <img className='h-16 w-16 object-cover' src={item.img} alt={item.title} />
      <div>
        <h3 className='text-md'>{item.title}</h3>
        <button className='underline mt-3 text-gray-400'>Remove</button>
      </div>
      <div className='flex flex-row items-start'>
        <button className='border hover:bg-indigo-50 border-indigo-500 rounded-sm w-8  py-0 leading-none text-2xl'>
          +
        </button>
        <p className='w-8 text-center text-xl font-semibold'>{item.qty}</p>
        <button className='border hover:bg-indigo-50 border-indigo-500 rounded-sm w-8  py-0 leading-none text-2xl'>
          -
        </button>
      </div>
      <p className='font-semibold'>{item.priceUnit}</p>
      <p className='font-semibold'>{item.priceTotal}</p>
    </div>
  );
}

// atvaizduoti visa cartObj informacija
// inputa su mygtukais + -
// inputo reiksme uzpildoma su qty
// keisti ja su + -
