import React from "react";
import Hero from "@/components/ourfleet/Hero";
import Section from "@/components/ourfleet/Section";
import { OurFleetSections } from "@/util/para";

function OurFleet() {
  return (
    <>
      <Hero />
      {OurFleetSections.map((section, index) => (
        <Section
          key={index}
          order={section.order}
          textContent={section.textContent}
          title={section.title}
          imgURL={section.imgURL}
          blurImg={section.blurImg}
          id={section.id}
        />
      ))}
    </>
  );
}

export default OurFleet;
