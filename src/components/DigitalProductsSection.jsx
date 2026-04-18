import { Download, Sparkles, ArrowRight, Zap, Eye, X, Lock, CheckCircle, Clock, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const previewContent = {
  resources: {
    title: "Resources (DSA + Development + Core Subjects)",
    subtitle: "A complete curated collection of the best resources for placement preparation",
    pages: [
      {
        heading: "📘 DSA Resources",
        content: [
          { type: "section", text: "Courses & Roadmaps" },
          { type: "item", text: "Apna College Alpha Course (DSA with Java) — Full structured course", hasLink: true },
          { type: "item", text: "Striver A2Z DSA Sheet — The most popular DSA sheet for placements", hasLink: true },
          { type: "item", text: "LeetCode — Practice platform with company-wise questions", hasLink: true },
          { type: "item", text: "GeeksForGeeks — Theory + practice combined", hasLink: true },
          { type: "section", text: "YouTube Channels for DSA" },
          { type: "item", text: "Striver (take U forward) — Best for DSA concepts & sheet walkthrough" },
          { type: "item", text: "CodeStoryWithMIK — Great explanations for hard problems" },
          { type: "item", text: "Aditya Verma — Must for DP & Sliding Window" },
          { type: "item", text: "Tushar Roy — Graph & DP visualizations" },
        ]
      },
      {
        heading: "🌐 Development Resources",
        content: [
          { type: "section", text: "Full Stack Development" },
          { type: "item", text: "Namaste Dev by Akshay Saini — React, JS, System Design", hasLink: true },
          { type: "item", text: "Frontend Machine Coding — Real interview round practice", hasLink: true },
          { type: "section", text: "Core Subjects" },
          { type: "item", text: "Operating Systems — Complete notes + video links", hasLink: true },
          { type: "item", text: "Computer Networks — Handpicked resources", hasLink: true },
          { type: "item", text: "DBMS — SQL + NoSQL + normalization guides", hasLink: true },
          { type: "locked", text: "15+ more resource categories inside..." },
        ]
      }
    ]
  },
  offcampus: {
    title: "Off-Campus Placement Strategy",
    subtitle: "The exact strategy I used to get placed through off-campus — no connections, no referrals",
    pages: [
      {
        heading: "📋 What's Inside",
        content: [
          { type: "section", text: "Table of Contents" },
          { type: "item", text: "Chapter 1: My Off-Campus Journey — The real, unfiltered story" },
          { type: "item", text: "Chapter 2: Where to Find Off-Campus Drives — Platforms, channels, bots" },
          { type: "item", text: "Chapter 3: Resume That Gets Shortlisted — ATS-friendly templates + tips" },
          { type: "item", text: "Chapter 4: Cold DM Strategy — How I reached out to HRs on LinkedIn" },
          { type: "item", text: "Chapter 5: Application Tracking — My spreadsheet system to stay organized" },
          { type: "item", text: "Chapter 6: Interview Preparation Timeline — Week-by-week breakdown" },
        ]
      },
      {
        heading: "🚀 Chapter 1: My Off-Campus Journey",
        content: [
          { type: "paragraph", text: "Everyone around me was getting placed on-campus. I wasn't. I spent weeks applying through job portals with zero callbacks. Then I changed my approach completely..." },
          { type: "paragraph", text: "Instead of waiting for companies to come to my college, I started going to them. LinkedIn became my primary tool. I optimized my profile, started posting about my DSA journey, and within 2 weeks..." },
          { type: "locked", text: "Continue reading in full version — 6 detailed chapters with templates" },
        ]
      }
    ]
  },
  interviews: {
    title: "Interview Experiences Collection",
    subtitle: "Real interview experiences from Amazon, Microsoft, TCS, Zoho & more — with round-by-round breakdowns",
    pages: [
      {
        heading: "🏢 Companies Covered",
        content: [
          { type: "section", text: "Product-Based Companies" },
          { type: "item", text: "Amazon — SDE Intern (OA + 3 Technical Rounds)" },
          { type: "item", text: "Microsoft — SDE (Online Test + 3 Rounds + HR)" },
          { type: "section", text: "Service & Mid-Tier Companies" },
          { type: "item", text: "TCS Digital — NQT + Technical + Managerial" },
          { type: "item", text: "Zoho — 5 Programming Rounds (detailed questions)" },
          { type: "section", text: "Also Included" },
          { type: "item", text: "Cold DM templates that actually get responses" },
          { type: "item", text: "Resume templates used by selected candidates" },
          { type: "item", text: "Hiring windows calendar for top companies" },
        ]
      },
      {
        heading: "💼 Amazon SDE Intern — Interview Experience",
        content: [
          { type: "section", text: "Round 1: Online Assessment" },
          { type: "paragraph", text: "The OA consisted of 2 coding questions (medium-hard difficulty) and a work simulation. The coding questions were based on Arrays and Trees." },
          { type: "item", text: "Q1: Variation of Sliding Window Maximum — used Deque approach" },
          { type: "item", text: "Q2: Binary Tree — Level Order Traversal with twist" },
          { type: "section", text: "Round 2: Technical Interview" },
          { type: "paragraph", text: "Started with introduction, then jumped into DSA. The interviewer asked me to..." },
          { type: "locked", text: "Full breakdown of all rounds + tips — available in complete version" },
        ]
      }
    ]
  }
};

const products = [
  {
    title: "Interview Experiences",
    description: "Real interview breakdowns from Amazon, Microsoft, TCS, Zoho + Cold DM templates, Resume Templates & Hiring Windows",
    image: "/interview_experiences.png",
    price: "₹49",
    originalPrice: "₹99",
    discount: "50% OFF",
    highlights: ["Instant Download", "10+ Companies", "Round-by-Round"],

    format: "PDF Guide",
    lastUpdated: "April 2025",
    previewKey: "interviews",
    link: "https://topmate.io/swapna_majji/2050033?utm_source=public_profile&utm_campaign=swapna_majji"
  },
  {
    title: "Offcampus Strategy",
    description: "The exact off-campus strategy I used — from LinkedIn outreach to application tracking systems",
    image: "/offcampus.png",
    price: "₹49",
    originalPrice: "₹99",
    discount: "50% OFF",
    highlights: ["Proven Strategy", "Templates Included", "Step-by-Step"],

    format: "PDF Guide",
    lastUpdated: "April 2025",
    previewKey: "offcampus",
    link: "https://topmate.io/swapna_majji/2050053?utm_source=public_profile&utm_campaign=swapna_majji"
  },
  {
    title: "Resources (Worth ₹899)",
    description: "Curated resources for DSA, Full Stack Development, and Core CS Subjects — everything in one place",
    image: "/dsa.jpg",
    price: "₹89",
    originalPrice: "₹899",
    discount: "90% OFF",
    highlights: ["50+ Resources", "Lifetime Access", "Regularly Updated"],

    format: "PDF + Links",
    lastUpdated: "April 2025",
    previewKey: "resources",
    link: "https://topmate.io/swapna_majji/2050022?utm_source=public_profile&utm_campaign=swapna_majji",
    isBestSeller: true
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      delay: i * 0.15,
    },
  }),
};

const PreviewModal = ({ product, isOpen, onClose }) => {
  const content = previewContent[product?.previewKey];
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!content) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-2xl max-h-[85vh] rounded-2xl overflow-hidden bg-card border border-border/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 px-6 py-4 bg-card/95 backdrop-blur-sm border-b border-border/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Eye className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm">Content Preview</h3>
                    <p className="text-xs text-muted-foreground">{product.title}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-secondary transition-colors"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(85vh-140px)] px-6 py-6">
              {/* Title Block */}
              <div className="mb-6 pb-4 border-b border-border/30">
                <h2 className="text-xl font-bold text-foreground mb-1">{content.title}</h2>
                <p className="text-sm text-muted-foreground">{content.subtitle}</p>
              </div>

              {/* Pages */}
              {content.pages.map((page, pageIdx) => (
                <div key={pageIdx} className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-6 w-1 rounded-full bg-primary" />
                    <h3 className="text-lg font-bold text-foreground">{page.heading}</h3>
                  </div>
                  
                  <div className="space-y-2 pl-3">
                    {page.content.map((item, itemIdx) => {
                      if (item.type === "section") {
                        return (
                          <div key={itemIdx} className="pt-3 pb-1">
                            <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider">
                              {item.text}
                            </h4>
                          </div>
                        );
                      }
                      if (item.type === "item") {
                        return (
                          <div key={itemIdx} className="flex items-start gap-2.5 py-1.5">
                            <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {item.text}
                              {item.hasLink && (
                                <span className="inline-flex items-center gap-1 ml-2 px-2 py-0.5 rounded text-[11px] font-medium bg-primary/10 text-primary/70">
                                  <Lock className="h-2.5 w-2.5" />
                                  Link after purchase
                                </span>
                              )}
                            </span>
                          </div>
                        );
                      }
                      if (item.type === "paragraph") {
                        return (
                          <p key={itemIdx} className="text-sm text-muted-foreground leading-relaxed py-1.5">
                            {item.text}
                          </p>
                        );
                      }
                      if (item.type === "locked") {
                        return (
                          <div key={itemIdx} className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/10 border-dashed">
                            <div className="flex items-center gap-2 text-primary/80">
                              <Lock className="h-4 w-4" />
                              <span className="text-sm font-medium">{item.text}</span>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>

                  {pageIdx < content.pages.length - 1 && (
                    <div className="mt-6 border-t border-dashed border-border/40" />
                  )}
                </div>
              ))}

              {/* Fade gradient */}
              <div className="relative h-24 -mt-24 pointer-events-none bg-gradient-to-t from-card via-card/80 to-transparent" />
            </div>

            {/* Footer CTA */}
            <div className="sticky bottom-0 px-6 py-4 bg-card/95 backdrop-blur-sm border-t border-border/50">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-extrabold text-foreground">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    <span className="text-xs font-bold text-emerald-500">{product.discount}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">Instant download • Lifetime access</p>
                </div>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-bold hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Get Full Access <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const DigitalProductsSection = () => {
  const [previewProduct, setPreviewProduct] = useState(null);

  return (
    <section id="resources" className="py-28 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Curated for placement season
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Digital <span className="text-gradient-animated">Resources</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            High-impact guides and roadmaps I wish someone handed me at 2 AM during placement season.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/40 transition-all duration-500"
              style={{
                boxShadow: "0 4px 24px -4px rgba(0,0,0,0.08)",
              }}
            >
              {/* Best Seller ribbon */}
              {product.isBestSeller && (
                <div className="absolute top-4 left-0 z-20">
                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-r-full shadow-lg">
                    <Zap className="h-3.5 w-3.5 fill-white" />
                    Best Seller
                  </div>
                </div>
              )}

              {/* Discount badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="bg-emerald-500/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                  {product.discount}
                </span>
              </div>

              {/* Image container */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />

                {/* Hover overlay with Preview button */}
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <button
                    onClick={() => setPreviewProduct(product)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 text-gray-900 font-semibold text-sm shadow-xl hover:bg-white transition-colors"
                  >
                    <Eye className="h-4 w-4" /> Preview
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow gap-3">
                {/* Title */}
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300 text-left leading-snug">
                  {product.title}
                </h3>

                {/* Highlights (replacing ratings) */}
                <div className="flex flex-wrap gap-1.5">
                  {product.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/8 text-primary text-[11px] font-medium border border-primary/10"
                    >
                      <CheckCircle className="h-3 w-3" />
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow text-left">
                  {product.description}
                </p>

                {/* Meta info */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {product.format}
                  </span>
                  <span className="flex items-center gap-1">
                    <RefreshCw className="h-3 w-3" />
                    {product.lastUpdated}
                  </span>
                </div>

                {/* Divider */}
                <div className="border-t border-border/50 my-1" />

                {/* Price + CTA row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-foreground">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    Get <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Bottom glow on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      <PreviewModal
        product={previewProduct}
        isOpen={!!previewProduct}
        onClose={() => setPreviewProduct(null)}
      />
    </section>
  );
};
