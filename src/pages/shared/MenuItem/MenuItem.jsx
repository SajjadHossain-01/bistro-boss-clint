

const MenuItem = ({item}) => {
 const {name, image, price, recipe}= item; 
    return (
        <div className="flex gap-4">
            <img className="lg:max-w-[118px] lg:max-h-[104px] max-w-[58px] max-h-[45px] rounded-bl-[200px] rounded-tr-[200px]  rounded-br-[200px] " src={image} alt="" />
            <div>
                <h3 className=" uppercase text-sm">{name}----------</h3>
                <p className="text-[10px]">{recipe}</p>
            </div>
            <p className="text-yellow-500">{price}</p>
        </div>
    );
};

export default MenuItem;