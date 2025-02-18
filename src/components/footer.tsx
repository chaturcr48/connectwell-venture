import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-100 text-zinc-600 py-12 mt-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-zinc-900">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-zinc-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-zinc-900 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-zinc-900 transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-zinc-900 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-zinc-900">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/software" className="hover:text-zinc-900 transition-colors">
                  Software
                </Link>
              </li>
              <li>
                <Link href="/products/hardware" className="hover:text-zinc-900 transition-colors">
                  Hardware
                </Link>
              </li>
              <li>
                <Link href="/products/services" className="hover:text-zinc-900 transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-zinc-900">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="hover:text-zinc-900 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-zinc-900 transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-zinc-900 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-zinc-900">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-zinc-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-zinc-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-zinc-900 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-zinc-600">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://instagram.com" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

