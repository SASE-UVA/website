import React from 'react';
import { motion } from 'framer-motion';
import "./Merch.css";

const Merch = () => {
    return (
        <merch>
            <motion.div className="merch-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
                <h1>Merch</h1>
                <p>Support us by purchasing our merchandise!</p>
            </motion.div>

            <div className="purchase">
                <button className="merch-button">Order here!</button>
                <p>We're currently working on our merch, stay tuned for more information!</p>
            </div>
        </merch>
    )
}

export default Merch