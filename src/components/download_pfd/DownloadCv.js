import React from "react"
import cv from "../../res/cv.pdf"

export default function DownloadCV() {
    return (
        <a style={{
            textDecoration: 'none',
            fontSize: 28,
            position: 'relative',
            top: 40
        }}
           target="_blank"
           rel="noopener noreferrer"
           href={cv}
        > скачать резюме </a>
    )
}