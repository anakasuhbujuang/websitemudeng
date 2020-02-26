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
                                        <p class="title red--text text--accent-1 font-weight-medium">Ruang Summary</p>
                                        <v-divider ></v-divider>
                                    </v-col>
                                  </v-row>

                                  <v-row class="pl-5 pt-5">
                                      <v-col md="2" >
                                          <!-- EDITOR -->
                                           <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      
                                                <div class="menubar">

                                                    <v-btn-toggle >
                                                    <v-btn 
                                                    class="menubar__button"
                                                    :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                                                    @click="commands.heading({ level: 2 })"
                                                    >
                                                    <v-icon small>{{ IconTitle }}</v-icon>
                                                    </v-btn>
                                                    
                                                    <v-btn 
                                                    class="menubar__button"
                                                    :class="{ 'is-active': isActive.paragraph() }"
                                                    @click="commands.paragraph"
                                                    >
                                                    <v-icon small >{{ IconParagraph }}</v-icon>
                                                    </v-btn>

                                                    <v-btn 
                                                    class="menubar__button"
                                                    :class="{ 'is-active': isActive.bold() }"
                                                    @click="commands.bold"
                                                    >
                                                    <v-icon small>{{ IconBold }}</v-icon>
                                                    </v-btn>

                                                    <v-btn 
                                                    class="menubar__button"
                                                    :class="{ 'is-active': isActive.italic() }"
                                                    @click="commands.italic"
                                                    >
                                                    <v-icon small>{{ IconItalic }}</v-icon>
                                                    </v-btn>

                                                    <v-btn 
                                                    class="menubar__button"
                                                    :class="{ 'is-active': isActive.underline() }"
                                                    @click="commands.underline"
                                                    >
                                                    <v-icon small>{{ IconUnderline }}</v-icon>
                                                    </v-btn>

                                                    <v-btn 
                                                    class="menubar__button"
                                                    :class="{ 'is-active': isActive.bullet_list() }"
                                                    @click="commands.bullet_list"
                                                    >
                                                    <v-icon small>{{ IconListBulleted }}</v-icon>
                                                    </v-btn>

                                                    <v-btn 
                                                    class="menubar__button"
                                                    :class="{ 'is-active': isActive.ordered_list() }"
                                                    @click="commands.ordered_list"
                                                    >
                                                    <v-icon small>{{ IconListNumbered }}</v-icon>
                                                    </v-btn>

                                                    </v-btn-toggle>
                                                    
                                                </div>
                                                
                                                </editor-menu-bar>
                                      </v-col>
                                  </v-row>

                                  <v-row class="pl-5">
                                      <v-col md="11">
                                        <!-- TEXT AREA -->
                                          <editor-content 
                                         class="editor__content"
                                         style="border: 1px solid grey; padding: 10px; border-radius: 5px; width:auto; height:300px; overflow-y:scroll; overflow-x:hidden;" 
                                         :editor="editor" 
                                         />
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

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Underline,
} from 'tiptap-extensions'


import { 
  mdiFormatTitle,
  mdiFormatBold,
  mdiFormatItalic,
  mdiFormatUnderline,
  mdiFormatListNumbered,
  mdiFormatListBulleted,
  mdiFormatPilcrow,
} from '@mdi/js';

export default {
    
    name: 'slideshowsumm',
    components: {
    //tiptap
    EditorContent, EditorMenuBar,
    },

    data () {

      return {
        
      TitleMateri:'Algoritma dan Struktur Data',

      IconParagraph : mdiFormatPilcrow,
      IconTitle : mdiFormatTitle,
      IconBold : mdiFormatBold,
      IconItalic : mdiFormatItalic,
      IconUnderline : mdiFormatUnderline,
      IconListBulleted : mdiFormatListBulleted,
      IconListNumbered : mdiFormatListNumbered,
      
      editor: new Editor({
        extensions: [
          new BulletList(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Underline(),
        ],

        content: `
          <p>
            Tulis ringkasan di sini.
          </p>
        `,
        }),
      
      }
    },

    beforeDestroy() {
    this.editor.destroy()
    },
}
  
</script>

<style scoped>
  .thumbnail{
    display:flex;   
  }

  .thumbnail img{
    width:168px;
}

.thumbnail-info{
    margin-left:20px;
}

.thumbnail h3{
    font-size:16px;
}

h3,
p{
    margin:0;
    padding:0;
}

.thumbnail-views{
    font-size:14px;
}

.video-player{
    display:flex;
    width:1200px;
    margin:auto;
}

.video-container{
    margin-right:40px;
}

.row{
    display:flex;
    justify-content:space-between;
}

button{
    background:#D0021B;
    color:white;
    border:none;
    padding:10px 20px;
}

  
</style>
