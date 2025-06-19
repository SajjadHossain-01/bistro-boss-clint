import loadingImg from '../../assets/others/cupcake.gif'
import loadingImg2 from '../../assets/others/loader3.gif'


const LoadingPage = () => {
    return (
          <div className='flex flex-col  items-center  text-center'>
            <div>
            <img src={loadingImg} alt="" />
            </div>
            <h1 className='lg:text-5xl sm:text-lg '>Welcome to Bistro Boss Restaurant</h1>
            <div>
            <img src={loadingImg2} alt="" />
            </div>
        </div>
    );
};

export default LoadingPage;