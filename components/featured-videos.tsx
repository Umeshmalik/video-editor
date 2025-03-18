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

// Sample featured videos data
const featuredVideos = [
  {
    id: 1,
    title: "Mountain Dew Commercial",
    category: "Commercial",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description: "High-energy commercial for Mountain Dew featuring extreme sports athletes.",
  },
  {
    id: 2,
    title: "Echoes of Tomorrow",
    category: "Short Film",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description: "Award-winning sci-fi short film exploring themes of technology and humanity.",
  },
  {
    id: 3,
    title: "Lunar - 'Midnight'",
    category: "Music Video",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    description: "Atmospheric music video for indie band Lunar's hit single 'Midnight'.",
  },
]

export default function FeaturedVideos() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof featuredVideos)[0] | null>(null)

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredVideos.map((video) => (
        <div key={video.id} className="group relative overflow-hidden rounded-xl">
          <div className="aspect-video relative overflow-hidden rounded-xl">
            <img
              src={video.thumbnail || "/placeholder.svg"}
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-16 h-16 bg-primary/90 border-0 hover:bg-primary"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <Play className="h-8 w-8 text-white" fill="white" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px] p-0 bg-black">
                  {selectedVideo && (
                    <>
                      <div className="aspect-video w-full">
                        <video controls className="w-full h-full">
                          <source src={selectedVideo.videoUrl} type="video/mp4" />
                        </video>
                      </div>
                      <div className="p-6">
                        <DialogHeader>
                          <DialogTitle className="text-xl text-white">{selectedVideo.title}</DialogTitle>
                          <DialogDescription className="text-gray-400">{selectedVideo.description}</DialogDescription>
                        </DialogHeader>
                      </div>
                    </>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="mt-4">
            <Badge className="mb-2">{video.category}</Badge>
            <h3 className="text-xl font-medium text-white">{video.title}</h3>
            <p className="text-gray-400 mt-1 line-clamp-2">{video.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

