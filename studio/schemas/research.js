export default {
  // This is the display name for the type
  title: "Research",
  name: "research",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },

    {
      title: "Image",
      name: "image",
      type: "image",
    },

    // {
    // title: "Icon",
    // name: "icon",
    // type: "iconPicker",
    // options: {
    //     providers: ["sa", "hi", "fi"]
    // }
    // },

    {
    title: 'Yes - No',
    name: 'show_associated_member',
    type: 'boolean',
    initialValue: false,
    },

    {
      title: 'Associated Member',
      name: 'associated_member',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'member'}]
      }],
       hidden: ({document}) => !document?.show_associated_member
    },

]
}
