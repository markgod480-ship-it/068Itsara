import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-amber-200 via-yellow-100 to-cyan-200 
    px-8 py-4 flex items-center justify-between shadow-md">

      {/* Logo */}
      <div className="text-2xl font-bold text-cyan-700">
        <Link href="/">🏝️ BeachCafe</Link>
      </div>

      {/* Menu */}
      <div className="flex gap-6 text-gray-700 font-medium">
        <Link href="/" className="hover:text-cyan-600 hover:underline transition">
          Home
        </Link>

        <Link href="/about" className="hover:text-cyan-600 hover:underline transition">
          About
        </Link>

        <Link href="/products" className="hover:text-cyan-600 hover:underline transition">
          Drinks
        </Link>

        <Link href="/contact" className="hover:text-cyan-600 hover:underline transition">
          Contact
        </Link>
      </div>

      {/* Auth */}
      <div className="flex gap-4">
        <Link
          href="/login"
          className="px-4 py-1.5 rounded-lg bg-white text-cyan-700 shadow hover:bg-cyan-100 transition"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="px-4 py-1.5 rounded-lg bg-orange-400 text-white shadow hover:bg-orange-500 transition"
        >
          Register
        </Link>
      </div>

    </nav>
  )
}

export default Navbar