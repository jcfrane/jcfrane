import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"


const AboutPage: React.FC<PageProps> = () => {
    return (
        <p className="text-teal-700">About me!</p>
    )
}

export default AboutPage

export const Head: HeadFC = () => <title>About Me</title>
