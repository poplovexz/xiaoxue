import { ArrowLeft, Search, BookOpen, Video, FileText, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from 'next/link'

export default function LearningCenter() {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-green-100 to-blue-50 min-h-screen pb-16">
      {/* Header */}
      <header className="p-4 flex items-center gap-4">
        <Link href="/" passHref>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">学习中心</h1>
      </header>

      {/* Search Bar */}
      <div className="px-4 mb-6">
        <div className="relative">
          <Input 
            type="search" 
            placeholder="搜索学习资源" 
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Resource Categories */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">资源分类</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-green-100 text-green-600">视频课程</Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-600">练习题</Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-600">学习资料</Badge>
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-600">在线辅导</Badge>
        </div>
      </div>

      {/* Featured Resources */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">推荐资源</h2>
        <div className="grid gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Image src="/placeholder.svg" alt="Video Course" width={60} height={60} className="rounded-lg" />
              <div>
                <CardTitle>数学概念精讲</CardTitle>
                <CardDescription>名师视频讲解基础概念</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Video className="h-4 w-4" />
                <span>20个视频课程</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">开始学习</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Image src="/placeholder.svg" alt="Practice Questions" width={60} height={60} className="rounded-lg" />
              <div>
                <CardTitle>英语听力练习</CardTitle>
                <CardDescription>提升听力理解能力</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FileText className="h-4 w-4" />
                <span>100道练习题</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">开始练习</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Learning Tools */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">学习工具</h2>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <span>电子课本</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <Video className="h-6 w-6" />
            <span>视频课程</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <FileText className="h-6 w-6" />
            <span>练习题库</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <MessageCircle className="h-6 w-6" />
            <span>在线答疑</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

