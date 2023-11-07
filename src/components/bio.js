/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
      file(relativePath: {eq: "profile-pic.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 50
            height: 50
            quality: 95
            layout: FIXED
          )
        },
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  const image = getImage(localData.file.childImageSharp.gatsbyImageData)

  return (
    <div className="bio">
      <GatsbyImage
        image={image}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You should follow them on Twitter!!!
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
