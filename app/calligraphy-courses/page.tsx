import { ArrowLeft, Search, Edit3, Book, Award, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from 'next/link'

export default function CalligraphyCourses() {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-gray-100 to-gray-50 min-h-screen pb-16">
      {/* Header */}
      <header className="p-4 flex items-center gap-4">
        <Link href="/" passHref>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">硬笔书法</h1>
      </header>

      {/* Search Bar */}
      <div className="px-4 mb-6">
        <div className="relative">
          <Input 
            type="search" 
            placeholder="搜索书法课程" 
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Course Categories */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">课程分类</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-blue-100 text-blue-600">楷书</Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-600">行书</Badge>
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-600">草书</Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-600">隶书</Badge>
          <Badge variant="secondary" className="bg-pink-100 text-pink-600">篆书</Badge>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">热门课程</h2>
        <div className="grid gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Image src="/placeholder.svg" alt="Calligraphy Course" width={60} height={60} className="rounded-lg" />
              <div>
                <CardTitle>硬笔楷书入门</CardTitle>
                <CardDescription>掌握基本笔画和结构</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>每周二、四 16:00-17:30</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">立即报名</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Image src="/placeholder.svg" alt="Advanced Calligraphy" width={60} height={60} className="rounded-lg" />
              <div>
                <CardTitle>行草书法进阶</CardTitle>
                <CardDescription>提升书写速度和美感</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>每周三、五 15:00-16:30</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">立即报名</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Calligraphy Resources */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">书法资源</h2>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <Edit3 className="h-6 w-6" />
            <span>笔法教程</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <Book className="h-6 w-6" />
            <span>字帖下载</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <Award className="h-6 w-6" />
            <span>作品展示</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <Clock className="h-6 w-6" />
            <span>练习计划</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

