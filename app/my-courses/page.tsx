import { ArrowLeft, Search, BookOpen, Clock, Star, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import Link from 'next/link'

export default function MyCourses() {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-yellow-100 to-orange-50 min-h-screen pb-16">
      {/* Header */}
      <header className="p-4 flex items-center gap-4">
        <Link href="/" passHref>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">我的课程</h1>
      </header>

      {/* Search Bar */}
      <div className="px-4 mb-6">
        <div className="relative">
          <Input 
            type="search" 
            placeholder="搜索我的课程" 
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Course Categories */}
      <div className="px-4 mb-6">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-600">全部课程</Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-600">进行中</Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-600">已完成</Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-600">收藏</Badge>
        </div>
      </div>

      {/* My Courses List */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">我的课程</h2>
        <div className="grid gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Image src="/placeholder.svg" alt="Math Course" width={60} height={60} className="rounded-lg" />
              <div>
                <CardTitle>数学思维训练</CardTitle>
                <CardDescription>进行中 - 已完成60%</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={60} className="mb-2" />
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>上次学习：2024-01-15</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">继续学习</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Image src="/placeholder.svg" alt="English Course" width={60} height={60} className="rounded-lg" />
              <div>
                <CardTitle>英语口语强化</CardTitle>
                <CardDescription>已完成</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={100} className="mb-2" />
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>课程评分：4.8</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">查看证书</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Image src="/placeholder.svg" alt="Science Course" width={60} height={60} className="rounded-lg" />
              <div>
                <CardTitle>科学实验课程</CardTitle>
                <CardDescription>未开始</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={0} className="mb-2" />
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Download className="h-4 w-4" />
                <span>课程资料已备好</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">开始学习</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

