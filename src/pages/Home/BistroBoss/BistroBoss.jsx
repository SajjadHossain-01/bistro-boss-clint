import menuImg from '../../../assets/menu/banner3.jpg'

const BistroBoss = () => {
    return (
        <div
            className="hero h-[572px] max-w-8/12 m-auto "   style={{
                backgroundImage:
                  `url(${menuImg})`,
              }}>
            <div className="hero-overlay"></div>
            <div className="hero-content w-10/12 h-80 bg-white  text-center">
                <div className="max-w-md ">
                    <h1 className="mb-5 text-black text-4xl  uppercase font-light font-Cinzel">Bistro Boss</h1>
                    <p className="mb-5  text-black text-sm font-extralight   ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BistroBoss;