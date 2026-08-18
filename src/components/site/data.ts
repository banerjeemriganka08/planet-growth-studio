import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import creator1 from "@/assets/creator-1.jpg";
import creator2 from "@/assets/creator-2.jpg";
import creator3 from "@/assets/creator-3.jpg";
import creator4 from "@/assets/creator-4.jpg";

export type Service = {
  id: string;
  title: string;
  line: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "social-media",
    title: "Social Media",
    line: "Strategy that turns attention into community.",
    items: [
      "Social Media Management",
      "Content Strategy",
      "Script Writing",
      "Content Calendar",
      "Reels & Social Content",
      "Growth Strategy",
      "Analytics & Reporting",
    ],
  },
  {
    id: "video-production",
    title: "Video Production",
    line: "From the shoot to the final frame.",
    items: [
      "Professional Video Shooting",
      "Video Editing",
      "Reels & Shorts",
      "Brand Videos",
      "Product Videos",
      "Motion Graphics",
      "Content Production",
    ],
  },
  {
    id: "creative-advertising",
    title: "Creative Advertising",
    line: "Ads people actually want to watch.",
    items: [
      "Creative Ad Concepts",
      "Social-first Advertising",
      "Product Ads",
      "Campaign Creatives",
      "Concept-based Advertising",
      "Promotional Creatives",
    ],
  },
  {
    id: "website-seo",
    title: "Website & SEO",
    line: "Digital experiences built to be discovered.",
    items: [
      "Website Design",
      "Website Development",
      "Landing Pages",
      "Website Management",
      "SEO",
      "Local SEO",
      "Google Business Profile",
      "Website Optimization",
    ],
  },
  {
    id: "creator-management",
    title: "Influencer & Creator Management",
    line: "Building creators beyond content.",
    items: [
      "Creator Network",
      "Influencer Management",
      "Creator Support",
      "Content & Editing Support",
      "Creator Branding",
      "Campaign Management",
    ],
  },
  {
    id: "collaborations",
    title: "Brand × Influencer Collaborations",
    line: "Connecting the right brands with the right creators.",
    items: [
      "Influencer Discovery",
      "Brand-Creator Matching",
      "Collaboration Management",
      "Campaign Execution",
      "UGC Campaigns",
      "Negotiation & Coordination",
    ],
  },
];

export const projects = [
  {
    client: "Solstice Beverages",
    category: "Advertising",
    result: "3.4M organic views in 6 weeks",
    image: work1,
  },
  {
    client: "Maison Kade",
    category: "Social",
    result: "Community grew 118% in one quarter",
    image: work2,
  },
  {
    client: "Northline Studios",
    category: "Video",
    result: "12 brand films, 41% watch-through lift",
    image: work3,
  },
  {
    client: "Orbit Labs",
    category: "Websites",
    result: "2.1× conversion after redesign + SEO",
    image: work4,
  },
];

export const creators = [
  { name: "Aarav Mehta", niche: "Tech & Gadgets", reach: "412K", image: creator1 },
  { name: "Riya Kapoor", niche: "Lifestyle & Fashion", reach: "268K", image: creator2 },
  { name: "Dev Sharma", niche: "Food & Culture", reach: "530K", image: creator3 },
  { name: "Naomi Fields", niche: "Reviews & UGC", reach: "195K", image: creator4 },
];

export const processSteps = [
  { n: "01", title: "Discover", text: "Understand the brand." },
  { n: "02", title: "Strategize", text: "Build the growth direction." },
  { n: "03", title: "Create", text: "Turn ideas into content." },
  { n: "04", title: "Launch", text: "Put the work in front of the right audience." },
  { n: "05", title: "Grow", text: "Measure, optimize and scale." },
];
