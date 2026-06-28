import { AnimatePresence, motion } from "framer-motion";

export default function CertificateModal({ image, onClose }) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.img
            src={image}
            alt="Certificate"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={onClose}
            className="absolute top-6 right-8 text-white text-5xl hover:text-cyan-400 transition"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}