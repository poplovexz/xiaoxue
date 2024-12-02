import { ArrowLeft, Search, PaintbrushIcon as PaintBrush, Palette, ImageIcon, Scissors } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from 'next/link'

export default function ArtCourses() {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-yellow-100 to-orange-50 min-h-screen pb-16">
      {/* Header */}
      <header className="p-4 flex items-center gap-4">
        <Link href="/" passHref>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">美术课程</h1>
      </header>

      {/* Search Bar */}
      <div className="px-4 mb-6">
        <div className="relative">
          <Input 
            type="search" 
            placeholder="搜索美术课程" 
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Course Categories */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">课程分类</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-red-100 text-red-600">绘画</Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-600">雕塑</Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-600">手工</Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-600">设计</Badge>
          <Badge variant="secondary" className="bg-pink-100 text-pink-600">摄影</Badge>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">热门课程</h2>
        <div className="grid gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Image src="/placeholder.svg" alt="Painting Course" width={60} height={60} className="rounded-lg" />
              <div>
                <CardTitle>创意绘画课程</CardTitle>
                <CardDescription>激发孩子的艺术潜能</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <PaintBrush className="h-4 w-4" />
                <span>每周二、四 15:00-16:30</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">立即报名</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Image src="/placeholder.svg" alt="Sculpture Course" width={60} height={60} className="rounded-lg" />
              <div>
                <CardTitle>儿童雕塑入门</CardTitle>
                <CardDescription>培养立体思维和创造力</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Scissors className="h-4 w-4" />
                <span>每周三、五 16:00-17:30</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">立即报名</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Art Resources */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">艺术资源</h2>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <Palette className="h-6 w-6" />
            <span>材料商店</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <ImageIcon className="h-6 w-6" />
            <span>作品展示</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <PaintBrush className="h-6 w-6" />
            <span>技巧教程</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <Scissors className="h-6 w-6" />
            <span>创意工坊</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

