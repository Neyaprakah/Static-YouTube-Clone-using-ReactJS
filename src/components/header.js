import './style.css';
import { IoMenuOutline } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function Header(){
    return(
        <header>
            <div className='menu'>
               <IoMenuOutline size={30} />
               <div>
               <FaYoutube size={30} color='red' />
               <h3>YouTube</h3>
               </div>
            </div>
            <div className='logo'>
               <input type='search' id='search' placeholder='Search'></input>
               <button id='but1'><CiSearch size={25} /></button>
               <button id='but2'><FaMicrophone size={25} /></button>
            </div>
            <div className='profile'>
                <MdOutlineVideoCall size={30} />
                <IoMdNotificationsOutline size={30} />
            </div>
        </header>
    )
}