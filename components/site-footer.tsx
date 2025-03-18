import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold mb-4 inline-block">
              ALEX<span className="text-primary">MORGAN</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional video editor specializing in commercials, short films, music videos, and documentaries. Based
              in Los Angeles, available for projects worldwide.
            </p>
            <div className="flex space-x-4">
              <Button asChild size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-zinc-900">
                <Link href="https://instagram.com" target="_blank">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button asChild size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-zinc-900">
                <Link href="https://twitter.com" target="_blank">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button asChild size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-zinc-900">
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button asChild size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-zinc-900">
                <Link href="https://youtube.com" target="_blank">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Los Angeles, California</li>
              <li>contact@videoeditor.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Alex Morgan. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-300 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

