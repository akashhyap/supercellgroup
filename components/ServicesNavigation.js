import { StoryblokComponent } from "@storyblok/react/rsc";
import Link from "next/link";
import React from "react";

const ServicesNavigation = ({ blok, full_slug }) => {
  // console.log("side nav full_slug", full_slug);
  return (
    <>
      {!blok.heading_url ? (
        <p className="text-2xl font-bold mb-4">{blok.heading}</p>
      ) : (
        <p className="text-2xl font-bold mb-4">
          <Link href={`/${blok.heading_url?.cached_url}`}>{blok.heading}</Link>
        </p>
      )}
      <ul>
        {blok?.navigation_links.map((nestedBlok) => (
          <StoryblokComponent
            blok={nestedBlok}
            full_slug={full_slug}
            key={nestedBlok._uid}
            closeMenu={() => setMenuOpen(false)}
          />
        ))}
      </ul>
    </>
  );
};

export default ServicesNavigation;
