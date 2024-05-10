import "../index.css";

export default function Loading() {
  return (
    <div className="fixed w-full h-full left-0 top-0 flex items-center justify-center z-50 bg-[#000000bf]">
      <div className="loader"></div>
    </div>
  );
}
