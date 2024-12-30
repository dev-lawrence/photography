import type { PortableTextBlock } from "sanity";

// Define the possible hero variants
export type HeroVariant = "default" | "agency" | "creative";

// Header types
interface HeaderLogo {
  logoType: "text" | "image";
  text?: string;
  image?: {
    asset: {
      url: string;
    };
  };
}

interface NavItem {
  title: string;
  url: string;
}

export interface HeaderData {
  logo: HeaderLogo;
  navigation: NavItem[];
}

export interface NavBarProps {
  isClicked: boolean;
  scrolling: boolean;
  navigation: NavItem[] | undefined;
  toggleNavClick: () => void;
}

// Hero types
export interface HeroButtonProps {
  title: string;
  url: string;
}

export interface HeroProps {
  variant: HeroVariant;
  title: string;
  subtitle: string;
  tag?: string;
  socialProof?: {
    enabled: boolean;
    profiles: Array<{
      asset: {
        url: string;
      };
      alt: string;
    }>;
    rating: number;
    count: number;
    text: string;
  };
  button: HeroButtonProps[];
  imageType: "upload" | "url";
  image?: {
    asset: {
      url: string;
    };
    alt: string;
  };
  url: string;
}

// About types
export interface StatItem {
  statValue: string;
  statLabel: string;
}

export interface AboutProps {
  title: string;
  subtitle: string;
  text: PortableTextBlock[];
  image: {
    asset: {
      url: string;
    };
    alt: string;
  };
  stats: StatItem[];
}

// Services types
export interface ServiceSectionProps {
  sectionTitle: string;
  sectionSubtitle: string;
  services: ServiceProps[];
}

export interface ServiceProps {
  title: string;
  content: string;
  imageType: "upload" | "url";
  image?: {
    asset: {
      url: string;
    };
    alt: string;
  };
  url: string;
}

export interface TestimonialSectionProps {
  sectionTitle: string;
  sectionSubtitle: string;
  testimonials: TestimonialProps[];
}

// Testimonial types
export interface TestimonialProps {
  name: string;
  profession: string;
  description: string;
  imageType: "upload" | "url";
  image?: {
    asset: {
      url: string;
    };
    alt: string;
  };
  url: string;
}

// Pricing plan types
export interface PricingSectionProps {
  sectionTitle: string;
  sectionSubtitle: string;
  plans: PricingPlanProps[];
}

interface PriceLink {
  title: string;
  url: string;
}

export interface PricingPlanProps {
  name: "silver" | "gold" | "platinum";
  price: number;
  features: string[];
  link: PriceLink[];
}

// Project types
export interface ProjectSectionProps {
  sectionTitle: string;
  sectionSubtitle: string;
  projects: ProjectProps[];
}

export interface ProjectProps {
  slug: string;
  name: string;
  category: string;
  image: string;
  thumbnailImgs: {
    url: string;
    dimensions: {
      width: number;
      height: number;
    };
  }[];
  alt: string;
  client: string;
  duration: string;
  year: number;
  location: string;
  details: string;
  challenges: string;
  equipment: string;
  imagesDelivered: number;
  description: string;
  testimonial: {
    name: string;
    description: string;
    imageType: "upload" | "url";
    image?: {
      asset: {
        url: string;
      };
      alt: string;
    };
    url?: string;
  };
}

// blog types
export interface PostSectionProps {
  sectionTitle: string;
  sectionSubtitle: string;
  posts: PostProps[];
}

export interface PostProps {
  title: string;
  slug: string;
  imageType: "upload" | "url";
  image?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  url: string;
  author: string;
  date: string;
  tags: string[];
  content: any;
}

// contact types
export interface SocialLinkItem {
  platform: string;
  url: string;
}

export interface ContactSectionProps {
  title: string;
  subtitle: string;
  phone: string;
  email: string;
  socialLinks: SocialLinkItem[];
}

//  contact form types
export interface ContactProps {
  name: string;
  email: string;
  message: string;
}

// seo types
export interface SeoProps {
  title: string;
  image: string;
  description: string;
  canonicalUrl: string;
  ogType: string;
  twitterHandle: string;
}
