import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PortfolioGrid from "@/components/portfolio-grid"

// Sample categories and projects
const categories = [
  { id: "all", label: "All Projects" },
  { id: "commercial", label: "Commercials" },
  { id: "short-film", label: "Short Films" },
  { id: "music-video", label: "Music Videos" },
  { id: "documentary", label: "Documentaries" },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-2">Portfolio</h1>
        <p className="text-gray-400 mb-12 text-xl">Explore my video editing projects by category</p>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full flex flex-wrap justify-start mb-12 bg-zinc-900 p-1">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <PortfolioGrid category={category.id} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

