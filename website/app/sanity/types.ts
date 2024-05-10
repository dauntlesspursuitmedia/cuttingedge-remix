export interface Service {
  _type: "service";
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: string;
  description: string;
  category: string;
}
