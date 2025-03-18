"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-2">Contact Me</h1>
        <p className="text-gray-400 mb-12 text-xl">Let's discuss your next project</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-zinc-900 border-zinc-800 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="bg-zinc-900 border-zinc-800 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-white">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="bg-zinc-900 border-zinc-800 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className="min-h-[150px] bg-zinc-900 border-zinc-800 text-white"
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white">contact@videoeditor.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-white">Los Angeles, California</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Follow Me</h2>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-700 text-gray-400 hover:text-white hover:border-white"
                >
                  <Link href="https://instagram.com" target="_blank" className="flex items-center gap-2">
                    <Instagram className="h-5 w-5" />
                    <span>Instagram</span>
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-gray-700 text-gray-400 hover:text-white hover:border-white"
                >
                  <Link href="https://twitter.com" target="_blank" className="flex items-center gap-2">
                    <Twitter className="h-5 w-5" />
                    <span>Twitter</span>
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-gray-700 text-gray-400 hover:text-white hover:border-white"
                >
                  <Link href="https://linkedin.com" target="_blank" className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-gray-700 text-gray-400 hover:text-white hover:border-white"
                >
                  <Link href="https://youtube.com" target="_blank" className="flex items-center gap-2">
                    <Youtube className="h-5 w-5" />
                    <span>YouTube</span>
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Availability</h2>
              <p className="text-gray-300">
                Currently accepting new projects for Q2 2024. For urgent requests, please mention your timeline in the
                message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

