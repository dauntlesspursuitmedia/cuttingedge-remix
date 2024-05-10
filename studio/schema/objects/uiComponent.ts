import {Component, Contact, Newspaper} from 'lucide-react'
import {defineField, defineType} from 'sanity'

const toTitleCase = (str: string) => {
  const splitString = str // "__ToGetYourGEDInTimeASongAboutThe26ABCsIsOfTheEssenceButAPersonalIDCardForUser_456InRoom26AContainingABC26TimesIsNotAsEasyAs123ForC3POOrR2D2Or2R2D"
    .replace(/(_)+/g, ' ') // " ToGetYourGEDInTimeASongAboutThe26ABCsIsOfTheEssenceButAPersonalIDCardForUser 456InRoom26AContainingABC26TimesIsNotAsEasyAs123ForC3POOrR2D2Or2R2D"
    .replace(/([a-z])([A-Z][a-z])/g, '$1 $2') // " To Get YourGEDIn TimeASong About The26ABCs IsOf The Essence ButAPersonalIDCard For User456In Room26AContainingABC26Times IsNot AsEasy As123ForC3POOrR2D2Or2R2D"
    .replace(/([A-Z][a-z])([A-Z])/g, '$1 $2') // " To Get YourGEDIn TimeASong About The26ABCs Is Of The Essence ButAPersonalIDCard For User456In Room26AContainingABC26Times Is Not As Easy As123ForC3POOr R2D2Or2R2D"
    .replace(/([a-z])([A-Z]+[a-z])/g, '$1 $2') // " To Get Your GEDIn Time ASong About The26ABCs Is Of The Essence But APersonal IDCard For User456In Room26AContainingABC26Times Is Not As Easy As123ForC3POOr R2D2Or2R2D"
    .replace(/([A-Z]+)([A-Z][a-z][a-z])/g, '$1 $2') // " To Get Your GEDIn Time A Song About The26ABCs Is Of The Essence But A Personal ID Card For User456In Room26A ContainingABC26Times Is Not As Easy As123ForC3POOr R2D2Or2R2D"
    .replace(/([a-z]+)([A-Z0-9]+)/g, '$1 $2') // " To Get Your GEDIn Time A Song About The 26ABCs Is Of The Essence But A Personal ID Card For User 456In Room 26A Containing ABC26Times Is Not As Easy As 123For C3POOr R2D2Or 2R2D"

    // Note: the next regex includes a special case to exclude plurals of acronyms, e.g. "ABCs"
    .replace(/([A-Z]+)([A-Z][a-rt-z][a-z]*)/g, '$1 $2') // " To Get Your GED In Time A Song About The 26ABCs Is Of The Essence But A Personal ID Card For User 456In Room 26A Containing ABC26Times Is Not As Easy As 123For C3PO Or R2D2Or 2R2D"
    .replace(/([0-9])([A-Z][a-z]+)/g, '$1 $2') // " To Get Your GED In Time A Song About The 26ABCs Is Of The Essence But A Personal ID Card For User 456In Room 26A Containing ABC 26Times Is Not As Easy As 123For C3PO Or R2D2Or 2R2D"

    // Note: the next two regexes use {2,} instead of + to add space on phrases like Room26A and 26ABCs but not on phrases like R2D2 and C3PO"
    .replace(/([A-Z]{2,})([0-9]{2,})/g, '$1 $2') // " To Get Your GED In Time A Song About The 26ABCs Is Of The Essence But A Personal ID Card For User 456 In Room 26A Containing ABC 26 Times Is Not As Easy As 123 For C3PO Or R2D2 Or 2R2D"
    .replace(/([0-9]{2,})([A-Z]{2,})/g, '$1 $2') // " To Get Your GED In Time A Song About The 26 ABCs Is Of The Essence But A Personal ID Card For User 456 In Room 26A Containing ABC 26 Times Is Not As Easy As 123 For C3PO Or R2D2 Or 2R2D"
    .trim() // "To Get Your GED In Time A Song About The 26 ABCs Is Of The Essence But A Personal ID Card For User 456 In Room 26A Containing ABC 26 Times Is Not As Easy As 123 For C3PO Or R2D2 Or 2R2D"
  // capitalize the first letter
  return splitString.charAt(0).toUpperCase() + splitString.slice(1)
}
export const uiComponentRef = defineType({
  type: 'object',
  name: 'uiComponentRef',
  title: 'UI Component',
  icon: Component,
  fields: [
    defineField({
      description: 'This is for adding a reference to specific UI components.',
      type: 'string',
      name: 'name',
      title: 'Render Component',
      initialValue: 'contactForm',
      options: {
        list: [
          {title: 'Contact Form', value: 'contactForm'},
          {title: 'Newsletter Signup', value: 'newsletterSignup'},
          {
            title: 'Service List',
            value: 'serviceList',
          },
          {
            title: 'Project List',
            value: 'projectList',
          },
          {
            title: 'Testimonial Slider',
            value: 'testimonialSlider',
          },
        ],
        // layout: 'radio',
        direction: 'horizontal',
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare({title}) {
      const media = title === 'newsletterSignup' ? Newspaper : Contact
      const renderedTitle = `${toTitleCase(title)} Section`
      return {
        title: renderedTitle,
        media,
      }
    },
  },
})
