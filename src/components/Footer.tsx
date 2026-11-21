export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <p className="text-center text-xs/5 text-gray-500">
          © {new Date().getFullYear()} Tretinoin Guide. For informational purposes only. Not
          medical advice.
        </p>
      </div>
    </footer>
  );
}
