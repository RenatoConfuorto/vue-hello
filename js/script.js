Vue.config.devtools = true;

const app = new Vue ({
    el: '#root',
    data:{
      title: 'Ciao',
      image: 'https://unsplash.it/300/300?image',
      imageWidth: 'auto',
      imageHeight: 'auto'
    },
    methods:{
      resetImage: function(){
        this.imageWidth = 'auto';
        this.imageHeight = 'auto';
      }
    }
});
