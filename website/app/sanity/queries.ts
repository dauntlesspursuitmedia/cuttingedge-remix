import groq from "groq";

export const SERVICES_QUERY = groq`
    *[_type == "service"] {
        _id,
        title,
        slug,
        description,
        category,
        image,
        _createdAt,
        _updatedAt,
        _rev,
        _type
    }
`;
