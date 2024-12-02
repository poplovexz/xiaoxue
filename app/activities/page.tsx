import { ArrowLeft, Search, Zap, Calendar, Users, Trophy } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from 'next/link'

export default function Activities() {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-purple-100 to-pink-50 min-h-screen pb-16">
      {/* Header */}
      <header className="p-4 flex items-center gap-4">
        <Link href="/" passHref>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">活动中心</h1>
      </header>

      {/* Search Bar */}
      <div className="px-4 mb-6">
        <div className="relative">
          <Input 
            type="search" 
            placeholder="搜索活动" 
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Activity Categories */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">活动分类</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-purple-100 text-purple-600">课外活动</Badge>
          <Badge variant="secondary" className="bg-pink-100 text-pink-600">比赛</Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-600">讲座</Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-600">夏令营</Badge>
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-600">工作坊</Badge>
        </div>
      </div>

      {/* Featured Activities */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">热门活动</h2>
        <div className="grid gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Image src="/placeholder.svg" alt="Summer Camp" width={60} height={60} className="rounded-lg" />
              <div>
                <CardTitle>科技创新夏令营</CardTitle>
                <CardDescription>激发创新思维，培养科技兴趣</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>2024年7月15日-7月30日</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">立即报名</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Image src="/placeholder.svg" alt="Competition" width={60} height={60} className="rounded-lg" />
              <div>
                <CardTitle>青少年编程大赛</CardTitle>
                <CardDescription>展示编程技能，赢取丰厚奖品</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Trophy className="h-4 w-4" />
                <span>报名截止：2024年8月1日</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">查看详情</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Activity Resources */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">活动资源</h2>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <Calendar className="h-6 w-6" />
            <span>活动日历</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <Users className="h-6 w-6" />
            <span>活动社群</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <Trophy className="h-6 w-6" />
            <span>比赛信息</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <Zap className="h-6 w-6" />
            <span>精彩回顾</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

