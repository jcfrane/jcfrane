import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"


const IndexPage: React.FC<PageProps> = () => {
  return (
      <p className="text-teal-700">Welcome to my new site, again!</p>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
