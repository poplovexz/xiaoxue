import { ArrowLeft, Search, Dumbbell, Trophy, Users, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from 'next/link'

export default function SportsActivities() {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-green-100 to-blue-50 min-h-screen pb-16">
      {/* Header */}
      <header className="p-4 flex items-center gap-4">
        <Link href="/" passHref>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">体育活动</h1>
      </header>

      {/* Search Bar */}
      <div className="px-4 mb-6">
        <div className="relative">
          <Input 
            type="search" 
            placeholder="搜索体育活动" 
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Activity Categories */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">活动分类</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-red-100 text-red-600">篮球</Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-600">足球</Badge>
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-600">乒乓球</Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-600">羽毛球</Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-600">游泳</Badge>
        </div>
      </div>

      {/* Featured Activities */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">热门活动</h2>
        <div className="grid gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Image src="/placeholder.svg" alt="Basketball Camp" width={60} height={60} className="rounded-lg" />
              <div>
                <CardTitle>少儿篮球训练营</CardTitle>
                <CardDescription>培养团队精神和运动技能</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>每周六、日 9:00-11:00</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">立即报名</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Image src="/placeholder.svg" alt="Swimming Class" width={60} height={60} className="rounded-lg" />
              <div>
                <CardTitle>儿童游泳课程</CardTitle>
                <CardDescription>学习基本游泳技巧</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>每周三、五 16:00-17:30</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">立即报名</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Sports Resources */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">体育资源</h2>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <Dumbbell className="h-6 w-6" />
            <span>器材租借</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <Trophy className="h-6 w-6" />
            <span>赛事信息</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <Users className="h-6 w-6" />
            <span>运动社团</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <Calendar className="h-6 w-6" />
            <span>活动日历</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

