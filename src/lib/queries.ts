import { loadQuery } from "./load-query";
import type {
  AboutProps,
  ContactSectionProps,
  HeaderData,
  HeroProps,
  PostSectionProps,
  PricingSectionProps,
  ProjectSectionProps,
  SeoProps,
  ServiceSectionProps,
  TestimonialSectionProps,
} from "./types";

// Header content
export const getHeaderContent = async () => {
  const { data: header }: { data: HeaderData[] } = await loadQuery({
    query: `
      *[_type == "header"]{
    logo {
      logoType,
      text,
      image {
        asset->{
          url
        },
        alt
      }
    },
    navigation[] {
      title,
      url
    }
  }
      `,
  });

  return header;
};

// Hero content
export const getHeroContent = async () => {
  const { data: hero }: { data: HeroProps[] } = await loadQuery({
    query: `
  *[_type == "hero"]{
      variant,
      title,
      subtitle,
      tag,
      imageType,
      image {
        asset-> {
          url
        },
        alt
      },
      url,
      button,
      socialProof {
        enabled,
        profiles[] {
          asset-> {
            url
          },
          alt
        },
        rating,
        count,
        text
      }
    }
  `,
  });

  return hero;
};

// About content
export const getAboutContent = async () => {
  const { data: about }: { data: AboutProps } = await loadQuery({
    query: `
    *[_type == "about"][0]{
    title,
    subtitle,
    text,
    image {
      asset-> {
        url
      },
      alt
    },
    stats,
}
    `,
  });

  return about;
};

// Services content
export const getServicesContent = async () => {
  const { data: service }: { data: ServiceSectionProps } = await loadQuery({
    query: `
      *[_type == "serviceSection"][0]{
    sectionTitle,
    sectionSubtitle,
    services[]{
      title,
      content,
      imageType,
      image {
        asset-> {
          url
        },
        alt
      },
      url
    }
  }
      `,
  });

  return service;
};

// Project content
export const getProjectContent = async () => {
  const { data: project }: { data: ProjectSectionProps } = await loadQuery({
    query: `
      *[_type == "projectSection"][0]{
  sectionTitle,
  sectionSubtitle,
  projects[]{
  "slug":slug.current,
  name,
  category,
  "image": image.asset->url,
  "alt": image.alt,
}
 
}
      `,
  });

  return project;
};

// Testimonial content
export const getTestimonialContent = async () => {
  const { data: testimonial }: { data: TestimonialSectionProps } =
    await loadQuery({
      query: `
      *[_type == "testimonialSection"][0]{
    sectionTitle,
    sectionSubtitle,
    testimonials[] {
    name,
    profession,
    description,
  imageType,
     image {
      asset-> {
        url
      },
      alt
    },
  url
    }
   
}
      `,
    });

  return testimonial;
};

// Pricing Content
export const getPricingPlanContent = async () => {
  const { data: pricing }: { data: PricingSectionProps } = await loadQuery({
    query: `
      *[_type == "pricingSection"][0]{
  sectionTitle,
  sectionSubtitle,
  plans[]{
  name,
  price,
  features,
    link[] {
      title,
      url
    }
  }
}
      `,
  });

  return pricing;
};

// Blog content
export const getPostContent = async () => {
  const { data: post }: { data: PostSectionProps } = await loadQuery({
    query: `
      *[_type == "postSection"][0]{
  sectionTitle,
  sectionSubtitle,
  posts[]{
    "slug":slug.current,
    title,
    alt,
    author,
     imageType,
    image {
      asset-> {
        url
      },
      alt
    },
    url,
    date,
    tags,
    content,
  
  }
  
  }
      `,
  });

  return post;
};

// Contact content
export const getContactContent = async () => {
  const { data: contact }: { data: ContactSectionProps } = await loadQuery({
    query: `
      *[_type == "contactSection"][0]{
    title,
    subtitle,
    phone,
    email,
    socialLinks[]{
      platform,
      url
    }

    }
      `,
  });

  return contact;
};

// Seo content
export const getSeoContent = async () => {
  const { data: seo }: { data: SeoProps } = await loadQuery({
    query: `
   *[_type == "seo"][0]{
      title,
      description,
      "image": image.asset->url,
    }
      `,
  });

  return seo;
};

export const globalSeoQuery = `*[_type == "globalSeo"][0]`;

export const pageSeoQuery = `*[_type in ["post", "project"] && slug.current == $slug][0].seo`;
