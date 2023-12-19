

const GalleryCard = ({item}) => {
    console.log(item);
    return (
        <div className="flex my-40 ">
            <img className="w-[300px]" src={item.image} alt="" />
        </div>
    );
};

export default GalleryCard;