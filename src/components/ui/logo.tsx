export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#cbb26a]"
      >
        <path
          d="M8 24L16 8L24 16L16 24L8 24Z"
          fill="currentColor"
          strokeWidth="1"
        />
      </svg>
      <span className="text-black text-xl font-light tracking-wide">
        braden
      </span>
    </div>
  );
}
