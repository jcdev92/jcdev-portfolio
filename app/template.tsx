"use client";
import { motion } from "framer-motion";
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -90 }} // Inicialmente está opaco y rotado
      animate={{ opacity: 1, rotateY: 0 }} // Al animar, se vuelve visible y se rota a su posición normal
      exit={{ opacity: 0, rotateY: 90 }} // Al salir, rota hacia el otro lado
      transition={{ duration: 0.75, ease: "easeInOut" }} // Tiempo de la animación
      style={{ perspective: 1000 }} // Añade perspectiva para darle profundidad a la animación
    >
      {children}
    </motion.div>
  );
}
