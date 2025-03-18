import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import FeaturedVideos from "@/components/featured-videos"
import SkillsList from "@/components/skills-list"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-50">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="block">Crafting Visual</span>
            <span className="block mt-2">Stories That Inspire</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Professional video editor specializing in commercials, short films, and music videos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/portfolio">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-black/50 text-white border-white hover:bg-white hover:text-black"
            >
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Work</h2>
            <Button asChild variant="link" className="text-primary">
              <Link href="/portfolio">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <FeaturedVideos />
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Video Editor Portrait"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
              <p className="text-gray-300 mb-6">
                With over 8 years of experience in video editing and post-production, I bring stories to life through
                compelling visual narratives. My work spans commercials, short films, music videos, and documentary
                projects for clients ranging from startups to global brands.
              </p>
              <p className="text-gray-300 mb-8">
                My approach combines technical precision with creative vision, ensuring each project achieves its full
                potential and resonates with its intended audience.
              </p>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills & Expertise</h2>
          <SkillsList />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">Ready to Bring Your Vision to Life?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next video project and create something extraordinary together.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

