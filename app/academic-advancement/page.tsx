import { Search, BookOpen, GraduationCap, Award, Clock, Briefcase } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { HomeIcon, Zap, UserCircle, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function AcademicAdvancement() {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-blue-100 to-indigo-50 min-h-screen pb-16">
      {/* Header */}
      <header className="p-4 flex items-center gap-4">
        <Link href="/" passHref>
          <button className="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
        </Link>
        <Image src="/placeholder.svg" alt="Academic Logo" width={40} height={40} className="w-10" />
        <div className="flex-1 relative">
          <Input 
            type="search" 
            placeholder="搜索学历课程" 
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </header>

      {/* Navigation Pills */}
      <div className="flex gap-2 px-4 overflow-x-auto no-scrollbar">
        <Badge variant="secondary" className="bg-blue-100 text-blue-500 hover:bg-blue-200">
          本科
        </Badge>
        <Badge variant="secondary" className="whitespace-nowrap">研究生</Badge>
        <Badge variant="secondary" className="whitespace-nowrap">专科升本科</Badge>
        <Badge variant="secondary" className="whitespace-nowrap">在职研究生</Badge>
        <Badge variant="secondary" className="whitespace-nowrap">国外学历</Badge>
      </div>

      {/* Banner */}
      <div className="p-4">
        <div className="bg-gradient-to-r from-blue-200 to-indigo-200 rounded-lg p-4">
          <h2 className="text-lg font-bold mb-2">学历提升助力职业发展</h2>
          <div className="flex gap-2">
            <Image src="/placeholder.svg" alt="Academic Courses" width={100} height={100} className="rounded" />
            <Image src="/placeholder.svg" alt="Career Growth" width={100} height={100} className="rounded" />
          </div>
        </div>
      </div>

      {/* Category Icons */}
      <div className="grid grid-cols-5 gap-4 px-4 py-6 bg-white">
        <Button variant="ghost" className="flex flex-col items-center gap-1">
          <GraduationCap className="h-6 w-6 text-blue-500" />
          <span className="text-xs">本科学历</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-1">
          <BookOpen className="h-6 w-6 text-blue-500" />
          <span className="text-xs">研究生</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-1">
          <Award className="h-6 w-6 text-blue-500" />
          <span className="text-xs">学位证书</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-1">
          <Clock className="h-6 w-6 text-blue-500" />
          <span className="text-xs">在职学习</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-1">
          <Briefcase className="h-6 w-6 text-blue-500" />
          <span className="text-xs">就业指导</span>
        </Button>
      </div>

      {/* Featured Programs */}
      <div className="p-4">
        <Card className="p-4">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            热门学历项目
            <Badge variant="secondary" className="bg-red-100 text-red-500">
              名额有限
            </Badge>
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Image 
                src="/placeholder.svg" 
                alt="MBA Program" 
                width={150} 
                height={150} 
                className="w-full rounded"
              />
              <div className="font-semibold">MBA项目</div>
              <div className="text-sm text-gray-500">开课时间: 2024年9月</div>
            </div>
            <div className="space-y-2">
              <Image 
                src="/placeholder.svg" 
                alt="Computer Science Degree" 
                width={150} 
                height={150} 
                className="w-full rounded"
              />
              <div className="font-semibold">计算机科学学士</div>
              <div className="text-sm text-gray-500">开课时间: 2024年10月</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Academic Resources */}
      <div className="grid grid-cols-2 gap-4 px-4 py-2 bg-white rounded-lg mx-4">
        <Button variant="outline" className="flex flex-col items-center gap-1 h-auto py-4">
          <BookOpen className="h-6 w-6 text-blue-500" />
          <span className="text-xs">学习资料</span>
        </Button>
        <Button variant="outline" className="flex flex-col items-center gap-1 h-auto py-4">
          <UserCircle className="h-6 w-6 text-blue-500" />
          <span className="text-xs">导师咨询</span>
        </Button>
        <Button variant="outline" className="flex flex-col items-center gap-1 h-auto py-4">
          <GraduationCap className="h-6 w-6 text-blue-500" />
          <span className="text-xs">学历评估</span>
        </Button>
        <Button variant="outline" className="flex flex-col items-center gap-1 h-auto py-4">
          <Briefcase className="h-6 w-6 text-blue-500" />
          <span className="text-xs">就业指导</span>
        </Button>
      </div>

      {/* Success Stories */}
      <div className="p-4 bg-gradient-to-r from-indigo-100 to-blue-200 mx-4 rounded-lg mt-4">
        <h3 className="font-bold mb-4">学员成功案例</h3>
        <div className="grid grid-cols-2 gap-4">
          <Image 
            src="/placeholder.svg" 
            alt="Success Story 1" 
            width={200} 
            height={200} 
            className="w-full rounded-lg"
          />
          <div className="grid gap-4">
            <Image 
              src="/placeholder.svg" 
              alt="Success Story 2" 
              width={100} 
              height={100} 
              className="w-full rounded-lg"
            />
            <Image 
              src="/placeholder.svg" 
              alt="Success Story 3" 
              width={100} 
              height={100} 
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

