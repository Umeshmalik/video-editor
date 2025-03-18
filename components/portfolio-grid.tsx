"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Sample portfolio data
const portfolioProjects = [
  {
    id: 1,
    title: "Mountain Dew Commercial",
    category: "commercial",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description: "High-energy commercial for Mountain Dew featuring extreme sports athletes.",
    client: "PepsiCo",
    year: "2023",
  },
  {
    id: 2,
    title: "Echoes of Tomorrow",
    category: "short-film",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description: "Award-winning sci-fi short film exploring themes of technology and humanity.",
    client: "Independent",
    year: "2022",
  },
  {
    id: 3,
    title: "Lunar - 'Midnight'",
    category: "music-video",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    description: "Atmospheric music video for indie band Lunar's hit single 'Midnight'.",
    client: "Universal Music",
    year: "2023",
  },
  {
    id: 4,
    title: "The Last Frontier",
    category: "documentary",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    description: "Documentary exploring the impact of climate change on Arctic communities.",
    client: "National Geographic",
    year: "2021",
  },
  {
    id: 5,
    title: "Nike Air Max Launch",
    category: "commercial",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    description: "Product launch commercial for Nike's new Air Max line featuring professional athletes.",
    client: "Nike",
    year: "2023",
  },
  {
    id: 6,
    title: "Fragments",
    category: "short-film",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    description: "Experimental short film exploring memory and identity through fragmented narratives.",
    client: "Film Festival Submission",
    year: "2022",
  },
  {
    id: 7,
    title: "The Weeknd - 'Starlight'",
    category: "music-video",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    description: "Visually stunning music video for The Weeknd's chart-topping single 'Starlight'.",
    client: "XO Records",
    year: "2023",
  },
  {
    id: 8,
    title: "Ocean Depths",
    category: "documentary",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    description: "Deep-sea exploration documentary revealing never-before-seen marine species.",
    client: "Discovery Channel",
    year: "2022",
  },
  {
    id: 9,
    title: "Spotify Premium",
    category: "commercial",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    description: "Lifestyle-focused commercial promoting Spotify Premium subscription benefits.",
    client: "Spotify",
    year: "2022",
  },
]

export default function PortfolioGrid({ category }: { category: string }) {
  const [selectedProject, setSelectedProject] = useState<(typeof portfolioProjects)[0] | null>(null)

  // Filter projects based on category
  const filteredProjects =
    category === "all" ? portfolioProjects : portfolioProjects.filter((project) => project.category === category)

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project) => (
        <div key={project.id} className="group relative overflow-hidden rounded-xl">
          <div className="aspect-video relative overflow-hidden rounded-xl">
            <img
              src={project.thumbnail || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-16 h-16 bg-primary/90 border-0 hover:bg-primary"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Play className="h-8 w-8 text-white" fill="white" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px] p-0 bg-black">
                  {selectedProject && (
                    <>
                      <div className="aspect-video w-full">
                        <video controls className="w-full h-full">
                          <source src={selectedProject.videoUrl} type="video/mp4" />
                        </video>
                      </div>
                      <div className="p-6">
                        <DialogHeader>
                          <div className="flex items-center justify-between mb-2">
                            <DialogTitle className="text-xl text-white">{selectedProject.title}</DialogTitle>
                            <Badge>{selectedProject.category.replace("-", " ")}</Badge>
                          </div>
                          <DialogDescription className="text-gray-400">{selectedProject.description}</DialogDescription>
                        </DialogHeader>
                        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Client</p>
                            <p className="text-white">{selectedProject.client}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Year</p>
                            <p className="text-white">{selectedProject.year}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="mt-4">
            <Badge className="mb-2">{project.category.replace("-", " ")}</Badge>
            <h3 className="text-xl font-medium text-white">{project.title}</h3>
            <p className="text-gray-400 mt-1 line-clamp-2">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

