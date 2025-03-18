import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Briefcase, GraduationCap, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-2">About Me</h1>
        <p className="text-gray-400 mb-12 text-xl">Video editor, storyteller, visual artist</p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-square md:aspect-auto rounded-xl overflow-hidden">
            <img
              src="/placeholder.svg?height=800&width=800"
              alt="Video Editor Portrait"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-white mb-6">Alex Morgan</h2>
            <p className="text-gray-300 mb-4">
              I'm a passionate video editor with over 8 years of experience crafting compelling visual narratives across
              various formats and genres. My journey in video editing began at film school, where I discovered my love
              for storytelling through the lens of post-production.
            </p>
            <p className="text-gray-300 mb-4">
              Since then, I've had the privilege of working with brands like Nike, Spotify, and Red Bull, as well as
              independent filmmakers and musicians. My work has been featured in film festivals around the world and has
              garnered several industry awards.
            </p>
            <p className="text-gray-300 mb-6">
              My approach to editing combines technical precision with creative intuition. I believe that great editing
              should be invisible, enhancing the story without drawing attention to itself. Whether I'm cutting a
              commercial, music video, or documentary, my goal is always to create an emotional connection with the
              audience.
            </p>

            <div className="flex space-x-4">
              <Button
                asChild
                size="icon"
                variant="outline"
                className="rounded-full border-gray-700 text-gray-400 hover:text-white hover:border-white"
              >
                <Link href="https://instagram.com" target="_blank">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="icon"
                variant="outline"
                className="rounded-full border-gray-700 text-gray-400 hover:text-white hover:border-white"
              >
                <Link href="https://twitter.com" target="_blank">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="icon"
                variant="outline"
                className="rounded-full border-gray-700 text-gray-400 hover:text-white hover:border-white"
              >
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="icon"
                variant="outline"
                className="rounded-full border-gray-700 text-gray-400 hover:text-white hover:border-white"
              >
                <Link href="https://youtube.com" target="_blank">
                  <Youtube className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Experience & Education */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-white">Experience</h2>
            </div>

            <div className="space-y-8">
              <div className="border-l-2 border-gray-800 pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                <h3 className="text-xl font-medium text-white">Senior Video Editor</h3>
                <p className="text-primary">Pixel Studios • 2020 - Present</p>
                <p className="text-gray-400 mt-2">
                  Lead editor for commercial and branded content for clients including Nike, Adidas, and Spotify.
                </p>
              </div>

              <div className="border-l-2 border-gray-800 pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                <h3 className="text-xl font-medium text-white">Video Editor</h3>
                <p className="text-primary">Creative Collective • 2017 - 2020</p>
                <p className="text-gray-400 mt-2">
                  Edited music videos, short films, and documentary content for a variety of clients.
                </p>
              </div>

              <div className="border-l-2 border-gray-800 pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                <h3 className="text-xl font-medium text-white">Junior Editor</h3>
                <p className="text-primary">Vision Media • 2015 - 2017</p>
                <p className="text-gray-400 mt-2">Assistant editor for television commercials and digital content.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>

            <div className="space-y-8">
              <div className="border-l-2 border-gray-800 pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                <h3 className="text-xl font-medium text-white">MFA in Film Editing</h3>
                <p className="text-primary">New York Film Academy • 2013 - 2015</p>
                <p className="text-gray-400 mt-2">Specialized in narrative and documentary editing techniques.</p>
              </div>

              <div className="border-l-2 border-gray-800 pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                <h3 className="text-xl font-medium text-white">BA in Film Studies</h3>
                <p className="text-primary">University of California, Los Angeles • 2009 - 2013</p>
                <p className="text-gray-400 mt-2">Foundations in film theory, history, and production.</p>
              </div>
            </div>

            <div className="mt-12">
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-white">Awards & Recognition</h2>
              </div>

              <ul className="space-y-4">
                <li className="text-gray-300">
                  <span className="text-primary font-medium">2023</span> - Best Editing, Independent Film Festival
                </li>
                <li className="text-gray-300">
                  <span className="text-primary font-medium">2022</span> - Silver Award, Commercial Editing, Clio Awards
                </li>
                <li className="text-gray-300">
                  <span className="text-primary font-medium">2021</span> - Best Music Video Editing, MTV Video Music
                  Awards
                </li>
                <li className="text-gray-300">
                  <span className="text-primary font-medium">2019</span> - Emerging Talent Award, Editors Guild
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

