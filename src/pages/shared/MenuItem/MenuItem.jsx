

const MenuItem = ({item}) => {
 const {name, image, price, recipe}= item; 
    return (
        <div className="flex gap-4">
            <img className="max-w-[118px] max-h-[104px] rounded-bl-[200px] rounded-tr-[200px]  rounded-br-[200px] " src={image} alt="" />
            <div>
                <h3 className=" uppercase">{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">{price}</p>
        </div>
    );
};

export default MenuItem;