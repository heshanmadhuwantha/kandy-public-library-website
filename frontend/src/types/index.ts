export interface Book {
  book_id: number;
  title: string;
  author: string;
  category: string;
  description?: string | null;
  available: number;
  cover_image?: string | null;
}

export interface Service {
  service_id: number;
  name: string;
  description: string;
  icon?: string | null;
}

export interface MembershipFormValues {
  full_name: string;
  email: string;
  phone: string;
  nic_number: string;
  address: string;
  membership_type: 'Student' | 'Adult' | 'Senior';
}

export interface ContactFormValues {
  full_name: string;
  email: string;
  subject: string;
  message: string;
}

