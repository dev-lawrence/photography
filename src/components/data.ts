import Clothing from "../assets/clothing.jpg";
import Portrait from "../assets/portrait.jpg";
import Wedding from "../assets/wedding-2.jpg";

export const projects = [
  {
    category: "commercial",
    slug: "1",

    client: "XYZ Clothing Co.",
    duration: "3-day shoot",
    image: Clothing,
    location: "Downtown Los Angeles, CA",
    description:
      "A dynamic photoshoot showcasing XYZ's new urban streetwear line against iconic LA backdrops.",
    challenges:
      "Coordinating multiple outdoor locations, working with changing natural light throughout the day.",
    equipment:
      "Sony A7R IV, 24-70mm f/2.8 GM, 85mm f/1.4 GM, Profoto B10 lights",
    imagesDelivered: 150,
    testimonial:
      "The photos perfectly captured our brand's essence. Absolutely stellar work!",
    behindTheScenes:
      "We started each day at 5 AM to catch the first light and avoid crowds in popular locations.",
    photographerFavorite:
      "A candid shot of our main model mid-laugh, with the LA skyline softly out of focus behind her.",
  },

  {
    category: "portrait",
    slug: "2",

    client: "Emily Rodriguez",
    duration: "4-hour session",
    image: Portrait,
    location: "Sunset Park and Old Town district",
    description:
      "A retro-inspired senior portrait session blending Emily's love for vintage fashion with modern backgrounds.",
    challenges:
      "Incorporating vintage props authentically, managing time to capture variety in limited locations.",
    equipment:
      "Canon EOS R6, 50mm f/1.2, 135mm f/2, Vintage film camera for props",
    imagesDelivered: 75,
    testimonial:
      "These photos are exactly what I wanted! They really show who I am.",
    behindTheScenes:
      "We visited a local antique shop to borrow some authentic vintage accessories for the shoot.",
    photographerFavorite:
      "A double exposure combining Emily's profile with the texture of an old brick wall.",
  },

  {
    category: "wedding",
    slug: "3",
    image: Wedding,
    client: "Sarah and John",
    duration: "One-day event (10 hours of coverage)",
    location: "Sunnybrook Vineyard, Napa Valley, CA",
    description:
      "Capturing the rustic charm of a vineyard venue while highlighting the elegance of Sarah and John's celebration.",
    challenges:
      "Balancing indoor and outdoor lighting conditions, capturing intimate moments amidst a large guest list.",
    equipment:
      "Canon EOS R5, 24-70mm f/2.8 lens, 70-200mm f/2.8 lens, off-camera flash system",
    imagesDelivered: 500,
    testimonial:
      "The photos perfectly captured the joy and love of our special day. We couldn't be happier!",
    behindTheScenes:
      "We used the golden hour just before sunset to capture stunning portraits among the vineyard rows.",
    photographerFavorite:
      "A candid shot of the couple laughing during their first dance, with the warm glow of string lights in the background.",
  },
];
