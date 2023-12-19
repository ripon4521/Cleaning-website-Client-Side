

const Card = ({item}) => {
    return (
      
//             <div classNameName="card w-[350px]  bg-base-100 shadow-xl">
//   <figure classNameName="pt-2">
//     <img src={item?.image} alt="Shoes" classNameName="rounded-xl" />
//   </figure>
//   <div classNameName="card-body  ">
//     <h2 classNameName="card-title">{item.name}</h2>
//     <p>{item.description}</p>
   
//   </div>
// </div> div

<div>
<div className="w-full max-w-sm overflow-hidden h-[400px] bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <img className="object-cover object-center w-full p-3 rounded-xl h-56" src= {item?.image }alt="avatar"/>


    <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{item?.name}</h1>

        <p className="py-2 text-gray-700 dark:text-gray-400">{item?.description}</p>



       
    </div>
</div>
</div>
       
    );
};

export default Card;