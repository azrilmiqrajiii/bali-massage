export default function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-2xl font-semibold shadow-sm transition 
      bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}
