"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Logo() {
    const router = useRouter()

    return (
        <div className="min-h-20 h-20 flex items-center px-6 border-b border-gray-200 dark:border-border cursor-pointer gap-2 bg-white dark:bg-background"
            onClick={() => router.push("/")}>
            <Image src="/logo.svg" alt="Logo" width={30} height={30} priority />
            <h1 className="font-bold text-xl text-gray-800 dark:text-foreground">BanzaiNews</h1>
        </div>
    )
}
