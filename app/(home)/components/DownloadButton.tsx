"use client"

import { Button } from "@/components/ui/button"
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
    <Button variant="outline" onClick={handleDownload}>
      <span>Télécharger CV</span>
      <FiDownload />
    </Button>
  )
}

export default DownloadButton
