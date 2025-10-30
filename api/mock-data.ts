import { Product, CareerPost, Update, Service } from '../types';

export const MOCK_PRODUCTS_DB: Product[] = [
    // --- Tools/Machines: Moulds ---
    { _id: '1', name: 'Complex Automotive Mould', category: 'Tools/Machines', description: 'A complex, two-shot (2K) mould for a next-gen vehicle dashboard, manufactured with high-grade tool steel.', imageUrl: 'https://www.rapiddirect.com/wp-content/uploads-v0/2021/06/Plastic-automotive-parts-1024x549.jpg', gallery: ['https://www.fictiv.com/wp-content/uploads/2023/11/Large-plastic-parts-jpg.webp', 'https://www.chinaplasmould.com/uploads/202114314/automobile-dashboard-frame-mold10160763592.png', 'https://d2n4wb9orp1vta.cloudfront.net/cms/brand/mmt/2022-mmt/mmt-1122-hrsflow-1.jpg%3BmaxWidth%3D385'], updatedAt: new Date('2024-09-15') },
    { _id: '2', name: 'High-Cavitation Pharma Mould', category: 'Tools/Machines', description: 'High-precision 64-cavity mould for manufacturing medical-grade polypropylene syringe barrels.', imageUrl: 'https://picsum.photos/seed/pharma/800/600', gallery: ['https://picsum.photos/seed/pharma/800/600', 'https://picsum.photos/seed/pharma2/800/600'], updatedAt: new Date('2024-08-20') },
    { _id: '8', name: 'Custom Bottle Cap Mould', category: 'Tools/Machines', description: '32-cavity mould for a unique, patented beverage bottle cap design with tamper-evident features.', imageUrl: 'https://picsum.photos/seed/bottlecap/800/600', gallery: ['https://picsum.photos/seed/bottlecap/800/600'], updatedAt: new Date('2024-06-11') },
    { _id: '11', name: 'Multi-Insert Mould Assembly', category: 'Tools/Machines', description: 'Complete multi-insert mould assembly for consumer electronics casing, designed for high-volume production.', imageUrl: 'https://picsum.photos/seed/electronics/800/600', gallery: ['https://picsum.photos/seed/electronics/800/600'], updatedAt: new Date('2024-10-01') },
    { _id: '12', name: 'Large Container Mould', category: 'Tools/Machines', description: 'Single-cavity mould for large industrial containers, engineered for structural integrity and durability.', imageUrl: 'https://picsum.photos/seed/container/800/600', gallery: ['https://picsum.photos/seed/container/800/600'], updatedAt: new Date('2024-09-25') },
    { _id: '13', name: 'Precision Spherical Mould', category: 'Tools/Machines', description: 'Precision mould for producing perfectly spherical components used in valve and bearing applications.', imageUrl: 'https://picsum.photos/seed/spherical/800/600', gallery: ['https://picsum.photos/seed/spherical/800/600', 'https://picsum.photos/seed/spherical2/800/600'], updatedAt: new Date('2024-09-18') },
    { _id: '14', name: 'Complex Slider Mould', category: 'Tools/Machines', description: 'Two-plate mould featuring complex slider mechanisms for creating parts with undercuts.', imageUrl: 'https://picsum.photos/seed/slider/800/600', gallery: ['https://picsum.photos/seed/slider/800/600', 'https://picsum.photos/seed/slider2/800/600', 'https://picsum.photos/seed/slider3/800/600'], updatedAt: new Date('2024-08-30') },
    { _id: '15', name: 'Thin-Wall Multi-Cavity Mould', category: 'Tools/Machines', description: 'Mould for producing multiple thin-walled components simultaneously, optimized for fast cycle times.', imageUrl: 'https://picsum.photos/seed/thinwall/800/600', gallery: ['https://picsum.photos/seed/thinwall/800/600'], updatedAt: new Date('2024-07-22') },
    
    // --- Tools/Machines: Workshop Machinery ---
    { _id: '4', name: 'Haas VF-4SS CNC Machine', category: 'Tools/Machines', description: 'High-performance Vertical Machining Center for rapid and precise mould creation.', imageUrl: 'https://picsum.photos/seed/cnc/800/600', gallery: ['https://picsum.photos/seed/cnc/800/600'], updatedAt: new Date('2023-01-10') },
    { _id: '7', name: 'EDM Wire Cutting Machine', category: 'Tools/Machines', description: 'Sodick ALN600G used for intricate details and high-precision cuts in hardened steel moulds.', imageUrl: 'https://picsum.photos/seed/edm/800/600', gallery: ['https://picsum.photos/seed/edm/800/600'], updatedAt: new Date('2022-11-20') },
    { _id: '9', name: 'DMG Mori DMU 50 5-Axis Mill', category: 'Tools/Machines', description: 'Advanced 5-axis simultaneous milling center, perfect for highly complex mould cavities and geometries with a single setup.', imageUrl: 'https://picsum.photos/seed/5axis/800/600', gallery: ['https://picsum.photos/seed/5axis/800/600'], updatedAt: new Date('2024-10-22') },
    { _id: '10', name: 'Mazak QT-250 CNC Lathe', category: 'Tools/Machines', description: 'High-precision CNC turning center for creating cylindrical mould components, inserts, and ejector pins with exceptional accuracy.', imageUrl: 'https://picsum.photos/seed/lathe/800/600', gallery: ['https://picsum.photos/seed/lathe/800/600'], updatedAt: new Date('2023-05-18') },
    
    // --- End Components ---
    { _id: '5', name: 'Industrial Connector Component', category: 'End Component', description: 'Robust connector part for heavy-duty industrial machinery, made with glass-filled nylon.', imageUrl: 'https://picsum.photos/seed/connector/800/600', gallery: ['https://picsum.photos/seed/connector/800/600'], updatedAt: new Date('2024-07-05') },
    { _id: '16', name: 'Precision Plastic Spacer', category: 'End Component', description: 'A high-tolerance plastic spacer for electronic assemblies, ensuring precise alignment and insulation.', imageUrl: 'https://picsum.photos/seed/spacer/800/600', gallery: ['https://picsum.photos/seed/spacer/800/600'], updatedAt: new Date('2024-10-10') },
];

export const MOCK_CAREERS_DB: CareerPost[] = [
    { _id: 'c1', position: 'CNC Machinist', description: 'We are looking for an experienced CNC Machinist to operate our Haas and Mazak machines. Must be proficient in G-code and CAM software.', location: 'Hyderabad, India' },
    { _id: 'c2', position: 'Mould Designer', description: 'Seeking a creative and technical Mould Designer with 5+ years of experience in SolidWorks or a similar CAD program for complex injection moulds.', location: 'Hyderabad, India' },
    { _id: 'c3', position: 'Quality Control Inspector', description: 'A detail-oriented individual is needed to perform inspections on finished moulds and plastic components using precision measuring tools.', location: 'Hyderabad, India' },
];

export const MOCK_UPDATES_DB: Update[] = [
    { _id: 'u1', title: 'New High-Strength Polymer Acquired', description: 'We are now using PEEK polymer for high-temperature applications, enhancing component durability.', date: '2024-10-26' },
    { _id: 'u2', title: '5-Axis CNC Machine Added to Workshop', description: 'Our new 5-axis CNC machine allows for more complex geometries and faster production times.', date: '2024-10-22' },
    { _id: 'u3', title: 'Expanded capacity for pharma moulds', description: 'We have successfully expanded our cleanroom facilities to meet the growing demand for medical and pharma-grade moulds.', date: '2024-10-15' },
];

// FIX: Added and exported MOCK_SERVICES_DB. This data was missing, causing an import error in Services.tsx.
export const MOCK_SERVICES_DB: Service[] = [
    {
        _id: 's1',
        title: 'Mould Design & Prototyping',
        description: 'From concept to reality, we provide comprehensive 3D mould design and rapid prototyping services to validate your components before mass production.',
        icon: 'LightBulbIcon',
    },
    {
        _id: 's2',
        title: 'High-Precision CNC Machining',
        description: 'Utilizing our state-of-the-art 5-axis CNC mills and EDM machines, we craft complex mould cavities and cores with sub-micron accuracy.',
        icon: 'WrenchScrewdriverIcon',
    },
    {
        _id: 's3',
        title: '2K & 3K Injection Moulding',
        description: 'Specializing in multi-material moulds (2K & 3K), we enable the creation of sophisticated parts with integrated soft-touch grips, seals, or multiple colors.',
        icon: 'CubeTransparentIcon',
    },
    {
        _id: 's4',
        title: 'Mould Maintenance & Repair',
        description: 'We offer comprehensive maintenance and repair services to extend the life of your tooling, ensuring consistent quality and performance over millions of cycles.',
        icon: 'ShieldCheckIcon',
    },
];
