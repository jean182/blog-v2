import { Link } from "@components/link";
import type { ISuggestedPostProps } from "@shared/interfaces";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import { StyledHero } from "./hero.styled";

const SKYLINE_URL = "../../images/skyline-pink.png";

export default function Hero({
  // author,
  // date,
  description,
  featuredImage,
  slug,
  title,
}: ISuggestedPostProps) {
  let featuredImg = getImage(
    featuredImage?.childImageSharp?.gatsbyImageData ?? null
  );
  return (
    <StyledHero>
      <div className="hero-wrapper">
        <div className="hero-wrapper-main" />
        <div className="skyline">
          <StaticImage height={300} alt={title ?? slug} src={SKYLINE_URL} />
          <StaticImage height={300} alt={title ?? slug} src={SKYLINE_URL} />
        </div>
        <div className="hero-meta-container">
          <div className="hero-meta">
            <div>
              <h1>{title}</h1>
              <p>{description}</p>
              <Link primary to={slug} asButton>
                Read Article
              </Link>
            </div>
            {featuredImg && (
              <GatsbyImage alt={title ?? slug} image={featuredImg} />
            )}
          </div>
        </div>
      </div>
    </StyledHero>
  );
}
