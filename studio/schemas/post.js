export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'SubTitle'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Permalink',
      options: {
        source: 'title'
      }
    },
    {
      name: 'meta',
      type: 'meta',
      fieldset: 'meta'
    },
    {
      name: 'content',
      type: 'content'
    }
  ],
  fieldsets: [
    {
      name: 'meta',
      title: 'Meta',
      options: { collapsable: true, collapsed: true }
    }
  ]
}
