export default {
    name: 'honey',
    type: 'document',
      title: 'Honey',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
          },
          {
            name: 'image',
            type: 'image',
            title: 'Image',
            options:{
                hotspot:true
            }
          },
          {
            name:'slug',
            type:'slug',
            title:'slug',
            options:{
                source:'name',
                maxLength:90
            }
          },
          {
            name:'price',
            type:'array',
            title:'Price',
            of:[{type:'number'}]
          },
          {
            name:'details',
            type:'string',
            title:'Details'
          }
    ]
  }