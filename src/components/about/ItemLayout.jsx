import { motion } from 'framer-motion';

const ItemsLayout = ({ children, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}

            className={`custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 ${className}`}>
            {children}
        </motion.div>
    );
};
export default ItemsLayout;