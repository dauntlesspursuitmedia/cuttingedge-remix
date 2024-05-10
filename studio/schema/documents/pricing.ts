import { defineArrayMember, defineField, defineType } from "sanity";

export const pricing = defineType({
  name: "pricing",
  title: "Pricing",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
		defineField({
			name: "slug",
			type: "slug",
			title: "Slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		}),
    defineField({
      name: "prices",
      title: "Price Table",
      type: "array",
      of: [
        defineField({
					name: "priceTable",
          type: "priceTable",
        }),
      ],
    }),
  ],
});
