// components/ItemIcon/ItemIcon.js
Component({

  properties: {
      data:{
        type:Object
      },
      index:{
        type:Number
      }
  },

  data: {

  },


  methods: {
     handleClick(){
       var index=this.properties.index;
       this.triggerEvent('toggle',index)
     }
  },
  options:{
    multipleSlots:true
  }
})
