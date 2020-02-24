<template>
  <div class="editor">
    <v-row>
      <v-col md="3">
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      
          <div class="menubar">
            <v-btn-toggle >
              <v-btn
              class="menubar__button"
              :class="{ 'is-active': isActive.paragraph() }"
              @click="commands.paragraph"
            >
              <!-- <icon name="paragraph" /> -->
              <v-icon >{{ IconParagraph }}</v-icon>
            </v-btn>


            <v-btn
              class="menubar__button"
              :class="{ 'is-active': isActive.heading({ level: 1 }) }"
              @click="commands.heading({ level: 1 })"
            >
              <!-- H1 -->
              <v-icon >{{ IconH1 }}</v-icon>
            </v-btn>

            <v-btn
              class="menubar__button"
              :class="{ 'is-active': isActive.heading({ level: 2 }) }"
              @click="commands.heading({ level: 2 })"
            >
              <!-- H2 -->
              <v-icon >{{ IconH2 }}</v-icon>
            </v-btn>

            <v-btn
              class="menubar__button"
              :class="{ 'is-active': isActive.heading({ level: 3 }) }"
              @click="commands.heading({ level: 3 })"
            >
              <!-- H3 -->
              <v-icon >{{ IconH3 }}</v-icon>
            </v-btn>

            <v-btn
              class="menubar__button"
              :class="{ 'is-active': isActive.bold() }"
              @click="commands.bold"
            >
              <!-- <icon name="bold" /> -->
              <v-icon >{{ IconBold }}</v-icon>
            </v-btn>

            <v-btn
              class="menubar__button"
              :class="{ 'is-active': isActive.italic() }"
              @click="commands.italic"
            >
              <!-- <icon name="italic" /> -->
              <v-icon >{{ IconItalic }}</v-icon>
            </v-btn>

            <v-btn
              class="menubar__button"
              :class="{ 'is-active': isActive.underline() }"
              @click="commands.underline"
            >
              <!-- <icon name="underline" /> -->
              <v-icon >{{ IconUnderline }}</v-icon>
            </v-btn>

            <v-btn
              class="menubar__button"
              :class="{ 'is-active': isActive.bullet_list() }"
              @click="commands.bullet_list"
            >
              <!-- <icon name="ul" /> -->
              <v-icon >{{ IconListBulleted }}</v-icon>
            </v-btn>

            <v-btn
              class="menubar__button"
              :class="{ 'is-active': isActive.ordered_list() }"
              @click="commands.ordered_list"
            >
              <!-- <icon name="ol" /> -->
              <v-icon >{{ IconListNumbered }}</v-icon>
            </v-btn>

            </v-btn-toggle>
            
          </div>
        
        </editor-menu-bar>
     
      </v-col>
    </v-row>

    <v-row>
      <v-col >
        <!-- <div style="height:300px; width:460px; overflow-y:scroll; overflow-x:hidden;"> -->
       
         <editor-content 
         class="editor__content"
         style="border: 1px solid grey; padding: 10px; border-radius: 5px; width:450px; height:300px; overflow-y:scroll; overflow-x:hidden;" 
         :editor="editor" 
         
         />
         
        <!-- </div> -->
      </v-col>
    </v-row>

    <v-btn @click="exportDocx">SAVE</v-btn>

  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
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
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'


import { 
  mdiFormatPilcrow, 
  mdiFormatHeader1, 
  mdiFormatHeader2,
  mdiFormatHeader3,
  mdiFormatBold,
  mdiFormatItalic,
  mdiFormatUnderline,
  mdiFormatListNumbered,
  mdiFormatListBulleted,
} from '@mdi/js';

import { WidthType, BorderStyle, Document, Paragraph, Packer, TextRun } from "docx";
import { saveAs } from 'file-saver';

export default {
  components: {
    //tiptap
    EditorContent, EditorMenuBar,
    //Download Docx
    Document, Paragraph, Packer, TextRun, saveAs, BorderStyle, WidthType,
  },
  
  data() {
    return {

      state: {
        name: 'San Luis Potosi'
      } ,

      IconParagraph : mdiFormatPilcrow,
      IconH1 : mdiFormatHeader1,
      IconH2 : mdiFormatHeader2,
      IconH3 : mdiFormatHeader3,
      IconBold : mdiFormatBold,
      IconItalic : mdiFormatItalic,
      IconUnderline : mdiFormatUnderline,
      IconListBulleted : mdiFormatListBulleted,
      IconListNumbered : mdiFormatListNumbered,

      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
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
methods: {
      // Create a new Document an save it in a variable
      let doc = new Document();

      // Add paragraph in the document
      let title = new Paragraph(`Detailed Report for ${this.state.name}`).title().center();

      // To export into a .docx file
      let packer = new Packer();

      packer.toBlob(doc).then(blob => {
        saveAs(blob, "detailed_report.docx");

         // using sweet alert for notification
         toast({
          type: 'success',
          title: 'Document created!'
         })
      });

    },
    created(){

    }
  

}
</script>