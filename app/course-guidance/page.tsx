import { ArrowLeft, Search, BookOpen, GraduationCap, Award, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from 'next/link'

export default function CourseGuidance() {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-blue-100 to-indigo-50 min-h-screen pb-16">
      {/* Header */}
      <header className="p-4 flex items-center gap-4">
        <Link href="/" passHref>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">课程辅导</h1>
      </header>

      {/* Search Bar */}
      <div className="px-4 mb-6">
        <div className="relative">
          <Input 
            type="search" 
            placeholder="搜索课程" 
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Course Categories */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">课程分类</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-blue-100 text-blue-600">语文</Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-600">数学</Badge>
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-600">英语</Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-600">科学</Badge>
          <Badge variant="secondary" className="bg-pink-100 text-pink-600">历史</Badge>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">热门课程</h2>
        <div className="grid gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Image src="/placeholder.svg" alt="Math Course" width={60} height={60} className="rounded-lg" />
              <div>
                <CardTitle>数学思维训练</CardTitle>
                <CardDescription>培养逻辑思维能力</CardDescription>
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
              <Image src="/placeholder.svg" alt="English Course" width={60} height={60} className="rounded-lg" />
              <div>
                <CardTitle>英语口语强化</CardTitle>
                <CardDescription>提升英语口语表达能力</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>每周一、三、五 15:00-16:00</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">立即报名</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Course Resources */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">学习资源</h2>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <span>在线题库</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            <span>名师讲解</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <Award className="h-6 w-6" />
            <span>学习计划</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <Clock className="h-6 w-6" />
            <span>课后辅导</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

