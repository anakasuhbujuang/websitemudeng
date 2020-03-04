<template>
  <div > 
            <v-row no-gutters >
                    <v-col md="12">
                        <v-card class="pa-5">
                          
                          <v-row>
                            <v-col md="7">
                              
                                  <v-row justify="center" no-gutters="" class="pt-4">
                                    <v-col md="11">
                                        <p class="title grey--text text--darken-3 font-weight-medium">{{TitleMateri}} : 
                                          <span class="title grey--text text--darken-1 font-weight-regular">Sorting PART 1</span></p>
                                        <v-divider ></v-divider>
                                    </v-col>
                                  </v-row>

                                  <v-row justify="center" class="pa-5">
                                      <v-col md="11">
                                           <!-- <div class="video-container"> -->
                                            <div>
                                            <iframe src="//www.slideshare.net/slideshow/embed_code/key/DOwXVFSP1RorAM" styel="max-width: 100%; height: auto;" width="720" height="420" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> 
                                            <div style="margin-bottom:5px" class="text-center"> 
                                                <strong> <a  href="//www.slideshare.net/viruzsystem/algoritma-powerpoint" title="Algoritma powerpoint" target="_blank">Algoritma powerpoint</a> </strong> from 
                                                <strong><a href="https://www.slideshare.net/viruzsystem" target="_blank">Irwin andriyanto</a></strong> 
                                                </div>
                                            </div>
                                      </v-col>
                                  </v-row>
                              
                            </v-col>

                            <v-col md="5">
                              
                                  <v-row justify="center" no-gutters="" class="pt-4">
                                    <v-col md="11">
                                        <p class="title red--text text--accent-1 font-weight-medium">Ruang Mind Mapping</p>
                                        <v-divider ></v-divider>
                                    </v-col>
                                  </v-row>

                                  

                                  <v-row class="pl-5 pt-5">
                                      <v-col md="11">
                                          <canvas id="canvas" 
                                          v-on:mousedown="handleMouseDown" 
                                          v-on:mouseup="handleMouseUp" 
                                          v-on:mousemove="handleMouseMove" 
                                          width="400px"
                                          height="350px"
                                          style="border: 1px solid grey;  border-radius: 5px; overflow-y:scroll; overflow-x:hidden;"></canvas>
                                      </v-col>
                                  </v-row>

                                   <v-row no-gutters >
                                            <v-col class="pl-5" md="11">
                                                <v-row class="">
                                                    <v-col md="4">
                                                        <v-btn
                                                        color="teal darken-2 white--text"
                                                        block
                                                        class="subtitle-1"
                                                        @click="nextStep(4)"
                                                        >
                                                        UNDUH
                                                        </v-btn>
                                                    </v-col>
                                                    <v-col offset-md="4" md="4">
                                                        <v-btn
                                                        color="teal darken-4 white--text"
                                                        block
                                                        class="subtitle-1 "
                                                        @click="nextStep(4)"
                                                        >
                                                        SELESAI
                                                        </v-btn>
                                                    </v-col>

                                                </v-row>                                        
                                            </v-col>
                                   </v-row>




                              
                            </v-col>

                          </v-row>

                        </v-card>
                    </v-col>
                </v-row>

</div>
</template>

<script >

export default {

  data: function () {
    return {

      TitleMateri:'Algoritma dan Struktur Data',

      mouse: {
        current: {
          x: 0,
          y: 0
        },
        previous: {
          x: 0,
          y: 0
        },
        down: false
      }
    }
  },
  computed: {
    currentMouse: function () {
      var c = document.getElementById("canvas");
      var rect = c.getBoundingClientRect();
      
      return {
        x: this.mouse.current.x - rect.left,
        y: this.mouse.current.y - rect.top
      }
    }
  },
  methods: {
    draw: function () {  
      
      // requestAnimationFrame(this.draw);
     if (this.mouse.down ) {
       var c = document.getElementById("canvas");

    var ctx = c.getContext("2d");
       
       ctx.clearRect(0,0,800,800);
       
  
    ctx.lineTo(this.currentMouse.x, this.currentMouse.y);
       ctx.strokeStyle ="#F63E02";
       ctx.lineWidth = 2;
    ctx.stroke()
     }
     
    },
    handleMouseDown: function (event) {
      this.mouse.down = true;
      this.mouse.current = {
        x: event.pageX,
        y: event.pageY
      }

      var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");

      ctx.moveTo(this.currentMouse.x, this.currentMouse.y)
      

    },
    
    handleMouseUp: function () {
      this.mouse.down = false;
    },
   
    handleMouseMove: function (event) {

      this.mouse.current = {
        x: event.pageX,
        y: event.pageY
      }
      
      this.draw(event)
      
    }
  },
    
    ready: function () {
       
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.translate(0.5, 0.5);
    ctx.imageSmoothingEnabled= false;
  // this.draw();
}
}


</script>


<style >
  body {
  margin: 2rem;
  background: #eee;
}
</style>
