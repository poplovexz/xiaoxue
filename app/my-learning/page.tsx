import { ArrowLeft, BookOpen, GraduationCap, Clock, Award, BarChart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import Link from 'next/link'

export default function MyLearning() {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-blue-100 to-purple-50 min-h-screen pb-16">
      {/* Header */}
      <header className="p-4 flex items-center gap-4">
        <Link href="/" passHref>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">我的学习</h1>
      </header>

      {/* Learning Progress */}
      <div className="p-4">
        <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <CardHeader>
            <CardTitle>学习进度</CardTitle>
            <CardDescription className="text-blue-100">继续加油！</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">本周学习时长</span>
                  <span className="text-sm">8小时/10小时</span>
                </div>
                <Progress value={80} className="bg-blue-200" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">完成课程数</span>
                  <span className="text-sm">4/6</span>
                </div>
                <Progress value={66} className="bg-blue-200" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Courses */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">进行中的课程</h2>
        <div className="grid gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Image src="/placeholder.svg" alt="Math Course" width={60} height={60} className="rounded-lg" />
              <div>
                <CardTitle>数学思维训练</CardTitle>
                <CardDescription>已完成 12/20 课时</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={60} className="mb-2" />
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>下节课：周二 16:00</span>
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
                <CardTitle>英语口语训练</CardTitle>
                <CardDescription>已完成 8/16 课时</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={50} className="mb-2" />
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>下节课：周三 15:00</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">继续学习</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Learning Statistics */}
      <div className="grid grid-cols-2 gap-4 px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">学习时长</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">32</div>
            <div className="text-sm text-gray-600">小时</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">获得徽章</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">12</div>
            <div className="text-sm text-gray-600">个</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

