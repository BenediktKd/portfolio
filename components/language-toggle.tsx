"use client"

import { useLanguage } from '@/hooks/use-language'
import { Button } from './ui/button'
import { Globe } from 'lucide-react'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-zinc-400 hover:text-white"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{language.toUpperCase()}</span>
    </Button>
  )
}
