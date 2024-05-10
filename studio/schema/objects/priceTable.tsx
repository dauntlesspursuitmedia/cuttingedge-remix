import { Currency } from "lucide-react";
import { defineField, defineType } from "sanity";
// import { formatCurrency } from "../../lib/formatCurrency";

export const priceTable = defineType({
  name: "priceTable",
  title: "Price Table",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
    defineField({
      name: "value",
      title: "Price",
      type: "number",
      description: "Enter the price in cents",
    }),
  ],
  // components: {
  //   preview: PricingTable
  // },
  preview: {
    select: {
      label: "label",
      value: "value",
    },
    prepare: ({ label, value }: { label: string; value: number }) => {
			console.log({label, value})
      return {
        title: `${label} - $${value}`,
			subtitle:`${value}`,
        // media: Currency,
      };
    },
  },
});
