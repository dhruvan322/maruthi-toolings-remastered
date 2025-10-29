import React from 'react';

// FIX: Added 'Services' to the Page union type to allow navigation to the Services page.
export type Page = 
  | 'Home'
  | 'Products'
  | 'End Components'
  | 'Tools & Machines'
  | 'Services'
  | 'About Us'
  | 'Contact Us'
  | 'Careers';

export interface Product {
  _id?: string;
  name: string;
  category: 'End Component' | 'Tools/Machines';
  description: string;
  imageUrl: string;
  gallery?: string[];
  updatedAt: Date;
}

export interface CareerPost {
  _id?: string;
  position: string;
  description: string;
  location: string;
}

export interface Update {
    _id?: string;
    title: string;
    description: string;
    date: string;
}

// FIX: Added the 'Service' interface, which was missing and caused errors in Services.tsx and service.model.ts.
export interface Service {
  _id?: string;
  title: string;
  description: string;
  icon: string;
}

export interface Inquiry {
  _id?: string;
  name?: string;
  email: string;
  subject?: string;
  message: string;
  createdAt?: Date;
}