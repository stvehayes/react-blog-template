import React from 'react';
import { motion } from "framer-motion";
import SocialButton from '../Social/SocialButton';
import Data from '../../Data';

const SocialButtons = () => {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
        >
            <SocialButton
                social="linkedin"
                icon="linkedin-in"
                link={`https://www.linkedin.com/in/${Data.social.linkedin}`}
            />
            <SocialButton
                social="dribbble"
                icon="dribbble"
                link={`https://www.dribbble.com/${Data.social.dribbble}`}
                margin={1}
            />
            <SocialButton
                social="codepen"
                icon="codepen"
                link={`https://www.codepen.io/${Data.social.codepen}`}
            />
        </motion.div>
    );
}

export default SocialButtons;
