export default{
    name: 'pizza',
    title: 'pizza',
    type: 'document',
    fields:[
        {
            name: 'image',
            title: 'image',
            type: 'image',
            options: {
                hotspot: true // to edit our images directly in database
            }
        },
        {
            name: 'name',
            title: 'name',
            type: 'string'
        },
        {
            name: 'slug', // provides uniquesness based on document type
            title: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90
            }
        },
        {
            name: 'price',
            title: 'price',
            type: 'array',
            of : [{type: 'number'}]
        },
        {
            name: 'details',
            title: 'details',
            type: 'string'
        }
    ]
}