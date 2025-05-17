import { Link } from 'react-router-dom';
import ErrorImg from '../../assets/404.gif'
import { FaHome } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
            <img src={ErrorImg} alt="" />
            </div>
            <Link className='btn bg-linear-to-r rounded-none font-Inter text-white from-[#835D23] to-[#B58130]' to={'/'}>Back To Home <FaHome></FaHome> </Link>
        </div>
    );
};

export default ErrorPage;