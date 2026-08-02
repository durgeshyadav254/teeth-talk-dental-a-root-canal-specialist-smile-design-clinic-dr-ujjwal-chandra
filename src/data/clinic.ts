export const clinic = {
  brand: 'Teeth Talk Dental',
  monogram: 'T',
  legalName:
    'TEETH TALK DENTAL ® — A Root Canal Specialist & Smile Design Clinic',
  doctor: {
    name: 'Dr. Ujjwal Chandra Jha',
    credentials: 'MDS — Gold Medalist',
    title: 'Root Canal Specialist & Smile Design Clinician',
    short: 'Dr. Ujjwal Chandra Jha, MDS',
  },
  tagline: 'Precision. Preservation. Predictability.',
  philosophy:
    'We believe a smile should look inevitable — as though it had always belonged to your face. Our work is quiet, exacting, and meant to last.',
  rating: 4.9,
  reviewCount: 375,
  phone: '+91 88267 70113',
  phoneHref: 'tel:+918826770113',
  whatsapp: 'https://wa.me/918826770113',
  email: 'hello@teethtalkdental.com',
  address: {
    line1: 'Shop no. 53, First Floor, Gardenia Glory Market',
    line2: 'Sector 46, Noida, Uttar Pradesh 201301',
    city: 'Noida',
    neighborhood: 'Sector 46',
    full: 'Shop no. 53, First Floor Gardenia Glory Market, Sector 46, Noida, Uttar Pradesh 201301, India',
  },
  coordinates: { lat: 28.5498249, lng: 77.3596774 },
  mapsUrl:
    'https://www.google.com/maps/place/TEETH+TALK+DENTAL/@28.5498249,77.3596774,17z',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0!2d77.3596774!3d28.5498249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce585021ee741%3A0xb42b467a68afd59c!2sTEETH%20TALK%20DENTAL!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  hours: {
    summary: 'Open daily, 11:00 AM – 8:30 PM',
    days: [
      { day: 'Monday', hours: '11:00 AM – 8:30 PM' },
      { day: 'Tuesday', hours: '11:00 AM – 8:30 PM' },
      { day: 'Wednesday', hours: '11:00 AM – 8:30 PM' },
      { day: 'Thursday', hours: '11:00 AM – 8:30 PM' },
      { day: 'Friday', hours: '11:00 AM – 8:30 PM' },
      { day: 'Saturday', hours: '11:00 AM – 8:30 PM' },
      { day: 'Sunday', hours: '11:00 AM – 8:30 PM' },
    ],
  },
  est: 'Est. · Sector 46, Noida',
  footerLine: 'Craft. Discretion. Continuity.',
} as const

export const navLinks = [
  { label: 'Philosophy', href: '/philosophy' },
  { label: 'The Practice', href: '/the-practice' },
  { label: 'The Doctor', href: '/doctor' },
  { label: 'Care', href: '/care' },
  { label: 'Transformations', href: '/transformations' },
  { label: 'Contact', href: '/correspondence' },
] as const

export const services = [
  {
    slug: 'root-canal',
    title: 'Root Canal Therapy',
    subtitle: 'Endodontics with composure',
    description:
      'Specialist-led root canal treatment focused on comfort, precision, and preserving what nature intended. Magnification-guided care for lasting results.',
    image: '/images/photo-004.jpg',
  },
  {
    slug: 'smile-design',
    title: 'Smile Design',
    subtitle: 'Architecture in porcelain',
    description:
      'Thoughtful aesthetic planning — veneers, bonding, and contouring composed to suit your features, complexion, and the light you live in.',
    image: '/images/photo-002.jpg',
  },
  {
    slug: 'dental-implants',
    title: 'Dental Implants',
    subtitle: 'Restoration with permanence',
    description:
      'Implant dentistry that restores both form and function — planned for longevity and a natural presence in the smile.',
    image: '/images/photo-009.jpg',
  },
  {
    slug: 'crowns-bridges',
    title: 'Crowns & Bridges',
    subtitle: 'Strength, quietly rendered',
    description:
      'High-quality restorations that protect compromised teeth and rebuild chewing confidence with refined shade matching.',
    image: '/images/photo-003.jpg',
  },
  {
    slug: 'preventive-care',
    title: 'General & Preventive Care',
    subtitle: 'The foundation',
    description:
      'Examinations, cleanings, and early intervention — the discreet work that keeps complex treatment unnecessary.',
    image: '/images/photo-011.jpg',
  },
  {
    slug: 'urgent-care',
    title: 'Urgent Care',
    subtitle: 'Same-day composure when possible',
    description:
      'Pain, fractures, and dental emergencies met with calm expertise. Call ahead; we make every effort to see you swiftly.',
    image: '/images/photo-010.jpg',
  },
] as const

export const credentials = [
  { label: 'Qualification', value: 'MDS — Gold Medalist' },
  { label: 'Focus', value: 'Endodontics & Smile Design' },
  { label: 'Practice', value: 'Teeth Talk Dental, Sector 46, Noida' },
  { label: 'Approach', value: 'Precision · Preservation · Predictability' },
  { label: 'Recognition', value: '4.9 ★ from 375+ patient reviews' },
  { label: 'Consultations', value: 'Daily by appointment, 11 AM – 8:30 PM' },
] as const

export const testimonials = [
  {
    quote:
      'The root canal was far gentler than I expected. Dr. Jha explained every step with quiet confidence — I left pain-free and reassured.',
    name: 'Ananya M.',
    detail: 'Endodontic care',
  },
  {
    quote:
      'My smile design feels natural, not theatrical. Friends notice something brighter, but cannot quite place what changed — exactly what I hoped for.',
    name: 'Rohan K.',
    detail: 'Aesthetic dentistry',
  },
  {
    quote:
      'A refined clinic experience from the first call. Punctual, meticulous, and genuinely attentive. Highly recommended in Noida.',
    name: 'Priya S.',
    detail: 'Comprehensive care',
  },
] as const

export const galleryImages = [
  {
    src: '/images/photo-001.jpg',
    alt: 'Reception hallway at Teeth Talk Dental',
    category: 'Practice',
  },
  {
    src: '/images/photo-011.jpg',
    alt: 'Treatment suite with specialist chair',
    category: 'Practice',
  },
  {
    src: '/images/photo-014.jpg',
    alt: 'Teeth Talk Dental exterior signage',
    category: 'Practice',
  },
  {
    src: '/images/photo-012.jpg',
    alt: 'Clinic interior detail',
    category: 'Practice',
  },
  {
    src: '/images/photo-002.jpg',
    alt: 'Smile transformation case',
    category: 'Cases',
  },
  {
    src: '/images/photo-004.jpg',
    alt: 'Fractured cusp management case',
    category: 'Cases',
  },
  {
    src: '/images/photo-003.jpg',
    alt: 'Clinical restorative case',
    category: 'Cases',
  },
  {
    src: '/images/photo-009.jpg',
    alt: 'Restorative treatment documentation',
    category: 'Cases',
  },
  {
    src: '/images/photo-010.jpg',
    alt: 'Endodontic case study',
    category: 'Cases',
  },
] as const

export const transformations = [
  {
    title: 'Full Smile Rehabilitation',
    caption: 'Function restored. Confidence rebuilt.',
    image: '/images/photo-002.jpg',
  },
  {
    title: 'Fractured Cusp Recovery',
    caption: 'Endodontics followed by precise restoration.',
    image: '/images/photo-004.jpg',
  },
  {
    title: 'Aesthetic Contouring',
    caption: 'Quiet refinement for a composed whole.',
    image: '/images/photo-003.jpg',
  },
] as const

export const awards = [
  { title: 'MDS Gold Medalist', detail: 'Academic excellence' },
  { title: '4.9 Patient Rating', detail: '375+ Google reviews' },
  { title: 'Root Canal Specialist', detail: 'Focused clinical craft' },
  { title: 'Smile Design Clinic', detail: 'Aesthetic & restorative care' },
] as const
