'use client'
import { motion } from "framer-motion"

export const Transition = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ x:20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    )
}