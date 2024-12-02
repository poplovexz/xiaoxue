import { Search, BookOpen, Dumbbell, PaintbrushIcon as PaintBrush, Edit3, Music, Calculator, Globe, HomeIcon, Zap, UserCircle, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-pink-100 to-purple-100 min-h-screen pb-4">
      {/* Header */}
      <header className="p-4 flex items-center gap-4 bg-white rounded-b-3xl shadow-md">
        <Image 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png"
          alt="小学生学习平台" 
          width={40} 
          height={40} 
          className="w-10 object-cover"
        />
        <div className="flex-1 relative">
          <Input 
            type="search" 
            placeholder="搜索课程" 
            className="w-full pl-10 pr-4 py-2 rounded-full bg-pink-50 border-pink-200 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </header>

      {/* Navigation Pills */}
      <div className="flex gap-2 px-4 overflow-x-auto no-scrollbar my-4">
        <Badge variant="secondary" className="bg-pink-200 text-pink-700 hover:bg-pink-300">
          全部课程
        </Badge>
        <Badge variant="secondary" className="whitespace-nowrap bg-purple-200 text-purple-700 hover:bg-purple-300">语文</Badge>
        <Badge variant="secondary" className="whitespace-nowrap bg-blue-200 text-blue-700 hover:bg-blue-300">数学</Badge>
        <Badge variant="secondary" className="whitespace-nowrap bg-green-200 text-green-700 hover:bg-green-300">英语</Badge>
        <Badge variant="secondary" className="whitespace-nowrap bg-yellow-200 text-yellow-700 hover:bg-yellow-300">兴趣班</Badge>
      </div>

      {/* Banner */}
      <div className="p-4">
        <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-purple-800">暑期特别课程</h2>
          <div className="flex gap-4">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png"
              alt="暑期数学训练营" 
              width={120} 
              height={120} 
              className="rounded-xl object-cover shadow-md"
            />
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png"
              alt="英语口语提高班" 
              width={120} 
              height={120} 
              className="rounded-xl object-cover shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Category Icons */}
      <div className="grid grid-cols-4 gap-6 px-6 py-8 bg-white rounded-3xl mx-4 shadow-md">
        <Link href="/course-guidance">
          <Button variant="ghost" className="flex flex-col items-center gap-2 hover:bg-pink-100 transition-colors p-4">
            <BookOpen className="h-12 w-12 text-pink-500" />
            <span className="text-sm text-gray-600 font-medium">课程辅导</span>
          </Button>
        </Link>
        <Link href="/sports-activities">
          <Button variant="ghost" className="flex flex-col items-center gap-2 hover:bg-pink-100 transition-colors p-4">
            <Dumbbell className="h-12 w-12 text-pink-500" />
            <span className="text-sm text-gray-600 font-medium">体育活动</span>
          </Button>
        </Link>
        <Link href="/art-courses">
          <Button variant="ghost" className="flex flex-col items-center gap-2 hover:bg-pink-100 transition-colors p-4">
            <PaintBrush className="h-12 w-12 text-pink-500" />
            <span className="text-sm text-gray-600 font-medium">美术课程</span>
          </Button>
        </Link>
        <Link href="/calligraphy-courses">
          <Button variant="ghost" className="flex flex-col items-center gap-2 hover:bg-pink-100 transition-colors p-4">
            <Edit3 className="h-12 w-12 text-pink-500" />
            <span className="text-sm text-gray-600 font-medium">硬笔书法</span>
          </Button>
        </Link>
      </div>

      {/* Featured Courses */}
      <div className="p-4">
        <Card className="p-6 rounded-3xl shadow-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-800">
            热门课程
            <Badge variant="secondary" className="bg-pink-100 text-pink-600">
              名额有限
            </Badge>
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png"
                alt="趣味数学" 
                width={150} 
                height={150} 
                className="w-full rounded-2xl object-cover shadow-md"
              />
              <div className="font-semibold text-purple-700">趣味数学</div>
              <div className="text-sm text-gray-600">每周二、四 16:00-17:30</div>
            </div>
            <div className="space-y-2">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png"
                alt="英语绘本阅读" 
                width={150} 
                height={150} 
                className="w-full rounded-2xl object-cover shadow-md"
              />
              <div className="font-semibold text-purple-700">英语绘本阅读</div>
              <div className="text-sm text-gray-600">每周三、五 15:00-16:30</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Extracurricular Activities */}
      <div className="p-6 bg-gradient-to-r from-pink-100 to-purple-100 mx-4 rounded-3xl mt-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-purple-800">特色兴趣班</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png"
              alt="少儿篮球" 
              width={200} 
              height={200} 
              className="w-full rounded-2xl object-cover shadow-md"
            />
            <div className="font-semibold text-purple-700">少儿篮球</div>
            <div className="text-sm text-gray-600">培养团队精神和运动习惯</div>
          </div>
          <div className="grid gap-6">
            <div className="space-y-2">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png"
                alt="创意美术" 
                width={100} 
                height={100} 
                className="w-full rounded-2xl object-cover shadow-md"
              />
              <div className="font-semibold text-purple-700">创意美术</div>
              <div className="text-sm text-gray-600">激发艺术潜能</div>
            </div>
            <div className="space-y-2">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png"
                alt="硬笔书法" 
                width={100} 
                height={100} 
                className="w-full rounded-2xl object-cover shadow-md"
              />
              <div className="font-semibold text-purple-700">硬笔书法</div>
              <div className="text-sm text-gray-600">提升书写技能</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

