# SEO Schema and Meta Tags Update Guide

## Pages Updated:
1. index.html ✓
2. about.html
3. service.html  
4. service-details.html
5. blog-list.html
6. blog-details.html
7. contact.html

## Meta Tags Template (Use only these 5):
```html
<title>[Page Specific Title]</title>
<meta name="description" content="[Page specific description]">
<meta name="robots" content="index, follow">
<meta name="author" content="Lekshmi Hospital">
<link rel="canonical" href="https://www.lekshmihospital.in/[page-name].html">
```

## Schema Markup by Page Type:

### About Page Schema:
```json
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Lekshmi Hospital",
  "description": "Learn about Lekshmi Hospital - trusted healthcare provider in Kattathurai offering comprehensive medical services.",
  "url": "https://www.lekshmihospital.in/about.html",
  "mainEntity": {
    "@type": "MedicalClinic",
    "name": "Lekshmi Hospital",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6/53/3, Swamiyarmadam",
      "addressLocality": "Kattathurai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "629158",
      "addressCountry": "IN"
    }
  }
}
```

### Service Page Schema:
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Lekshmi Hospital Services",
  "description": "Comprehensive healthcare services including general medicine, laboratory, pharmacy, and X-ray facilities.",
  "url": "https://www.lekshmihospital.in/service.html",
  "provider": {
    "@type": "MedicalClinic",
    "name": "Lekshmi Hospital"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Medical Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "General Medicine Consultation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTest",
          "name": "Laboratory Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTest",
          "name": "X-Ray Facility"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "Pharmacy Services"
        }
      }
    ]
  }
}
```

### Blog List Page Schema:
```json
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Lekshmi Hospital Health Blog",
  "description": "Health tips, medical advice, and wellness information from Lekshmi Hospital doctors.",
  "url": "https://www.lekshmihospital.in/blog-list.html",
  "publisher": {
    "@type": "Organization",
    "name": "Lekshmi Hospital",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.lekshmihospital.in/assets/images/logo2.png"
    }
  }
}
```

### Contact Page Schema:
```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Lekshmi Hospital",
  "description": "Get in touch with Lekshmi Hospital for appointments, inquiries, and medical consultations.",
  "url": "https://www.lekshmihospital.in/contact.html",
  "mainEntity": {
    "@type": "MedicalClinic",
    "name": "Lekshmi Hospital",
    "telephone": "+91-4651-227353",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6/53/3, Swamiyarmadam",
      "addressLocality": "Kattathurai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "629158",
      "addressCountry": "IN"
    }
  }
}
```

## SEO-Optimized Meta Tags by Page:

### index.html ✓ (Already Updated)
- Title: Lekshmi Hospital | General Medicine & Healthcare in Kattathurai
- Description: Lekshmi Hospital is a trusted healthcare center in Swamiyarmadam, Kattathurai offering general medicine, laboratory, pharmacy, and X-ray services.

### about.html
- Title: About Lekshmi Hospital | Trusted Healthcare in Kattathurai
- Description: Discover Lekshmi Hospital - your trusted healthcare partner in Kattathurai providing quality general medicine, diagnostic services, and compassionate care since establishment.

### service.html
- Title: Medical Services | General Medicine, Lab, Pharmacy & X-Ray | Lekshmi Hospital
- Description: Comprehensive healthcare services at Lekshmi Hospital Kattathurai - General medicine consultation, laboratory tests, in-house pharmacy, and X-ray facilities under one roof.

### service-details.html (Dynamic based on service)
- Title: [Service Name] | Lekshmi Hospital Kattathurai
- Description: Professional [service name] services at Lekshmi Hospital. Expert care with modern facilities in Kattathurai, Tamil Nadu.

### blog-list.html
- Title: Health Blog & Medical Tips | Lekshmi Hospital Kattathurai
- Description: Read expert health articles, medical tips, and wellness advice from Lekshmi Hospital doctors. Stay informed about seasonal health, chronic disease management, and preventive care.

### blog-details.html (Dynamic based on blog)
- Title: [Blog Title] | Lekshmi Hospital Health Blog
- Description: [Blog excerpt or first 150 characters]

### contact.html
- Title: Contact Lekshmi Hospital | Book Appointment | Kattathurai
- Description: Contact Lekshmi Hospital for appointments and medical consultations. Call 04651 227353 or visit us at Swamiyarmadam, Kattathurai. OP timings: 9AM-1PM, 5PM-8PM daily.

## Implementation Notes:
1. Place schema markup in <head> section after viewport meta tag
2. Use only the 5 specified meta tags (title, description, robots, author, canonical)
3. Remove any extra meta tags like keywords, og:tags, twitter:cards (not requested)
4. Ensure canonical URLs match the actual page URLs
5. Keep descriptions under 160 characters for optimal display in search results
