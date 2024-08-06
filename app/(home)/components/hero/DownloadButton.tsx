"use client"

import MagicButton from "@/components/ui/magic-button"
import React from "react"
import { FiDownload } from "react-icons/fi"

const DownloadButton: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Junior_Bernard_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <MagicButton onClick={handleDownload} className="h-12">
      <span className="flex gap-2 items-center justify-center">
        Télécharger CV
        <FiDownload />
      </span>
    </MagicButton>
  )
}

export default DownloadButton
