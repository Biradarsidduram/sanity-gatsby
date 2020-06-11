export default {
    title:"Blogs",
    name:"blog",
    type:"document",
    fields:[
        {
            name:'name',
            title:"Name",
            type:"string"
        },
        {
          name:"slug",
          title:"slug",
          type:"slug",
          options:{
            source:"name",
            maxLength:50
          } 
        },
        {
            name:"description",
            title:"Description",
            type:"text",
        },
        {
            name:"image",
            title:"Image",
            type:"image",
            options:{
                hotspot:true
            }
        },
        {
            name:"created",
            title:"Created on",
            type:"datetime"
        }
    ]
}