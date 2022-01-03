import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion"


const MenuButton = ({ toggle, status }) => {
    return(
        <div>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="button" className="menu-button" onClick={() => toggle(!status)}>
                {status ? <CloseIcon className="scale-125" /> : <MenuIcon className="scale-125" />}
            </motion.button>
        </div>)
}

export default MenuButton;
