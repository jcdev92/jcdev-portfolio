"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export const Transition = ({ children }: { children: React.ReactNode }) => {
    const path = usePathname();
  return (
      <motion.div key={path}
        initial={{ opacity: 0, rotateY: -45 }} // Inicialmente está opaco y rotado
        animate={{ opacity: 1, rotateY: 0 }} // Al animar, se vuelve visible y se rota a su posición normal
        exit={{ opacity: 0, rotateY: 45 }} // Al salir, rota hacia el otro lado
        transition={{ duration: 0.75, ease: "easeInOut" }} // Tiempo de la animación
        style={{ perspective: 1000 }} // Añade perspectiva para darle profundidad a la animación
      >
        {children}
      </motion.div>
  );
};
