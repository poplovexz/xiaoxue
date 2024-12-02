import { HomeIcon, Zap, UserCircle, BookOpen, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">
            {children}
          </main>
          <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
            <div className="max-w-md mx-auto grid grid-cols-5 px-2 py-1">
              <Link href="/">
                <Button variant="ghost" className="flex flex-col items-center gap-0.5">
                  <HomeIcon className="h-5 w-5 text-pink-600" />
                  <span className="text-xs">首页</span>
                </Button>
              </Link>
              <Link href="/activities">
                <Button variant="ghost" className="flex flex-col items-center gap-0.5">
                  <Zap className="h-5 w-5 text-purple-600" />
                  <span className="text-xs">活动</span>
                </Button>
              </Link>
              <Link href="/my-learning">
                <Button variant="ghost" className="flex flex-col items-center gap-0.5">
                  <UserCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-xs">我的学习</span>
                </Button>
              </Link>
              <Link href="/learning-center">
                <Button variant="ghost" className="flex flex-col items-center gap-0.5">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  <span className="text-xs">学习中心</span>
                </Button>
              </Link>
              <Link href="/my-courses">
                <Button variant="ghost" className="flex flex-col items-center gap-0.5">
                  <ShoppingCart className="h-5 w-5 text-yellow-600" />
                  <span className="text-xs">我的课程</span>
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </body>
    </html>
  )
}

