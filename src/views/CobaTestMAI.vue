<template>
    <div id="app">
  <v-app id="inspire">

      <v-tabs-items v-model="tab" >

        <v-tab-item
        v-for="item in items"
        :key="item.tab"
         style="background-color:#FBFAFF;"
        >
            <v-row justify="center">
                <v-col md="10">
                    <v-card color="white">

                        <v-row justify="center">
                            <v-col md="10">
                                 <v-card color="grey" flat>
                                    <v-card-text>{{ item.contenta }}</v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row justify="center">
                            <v-col md="10">
                                 <v-card color="grey" flat>
                                    <v-card-text>{{ item.contentb }}</v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row justify="center">
                            <v-col md="10">
                                 <v-card color="grey" flat>
                                    <v-card-text>{{ item.contentc }}</v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>

                    </v-card>
                </v-col>
            </v-row>
           
            
        </v-tab-item>
        
      </v-tabs-items>

    <v-row justify="center">
        <v-col md="5">
             <v-card>
                <v-tabs
                    v-model="tab"
                    background-color="primary"
                    dark
                    show-arrows
                >
                <v-tabs-slider color="white"></v-tabs-slider>
                    <v-tab
                    
                    v-for="item in items"
                    :key="item.tab"
                    >
                    {{ item.tab }}
                    </v-tab>
                </v-tabs>
            </v-card>
        </v-col>
    </v-row>
   
  </v-app>
</div>
</template>

<script>
export default {
    data: () => ({

      
      tab: null,
      items: [
        { tab: '1', contenta: 'Tab 1 Content', contentb: 'Tab 1 Content', contentc: 'Tab 1 Content' },
        { tab: '2',  contenta: 'Tab 1 Content', contentb: 'Tab 1 Content', contentc: 'Tab 1 Content' },
        { tab: '3',  contenta: 'Tab 1 Content', contentb: 'Tab 1 Content', contentc: 'Tab 1 Content' },
        { tab: '4',  contenta: 'Tab 1 Content', contentb: 'Tab 1 Content', contentc: 'Tab 1 Content' },
        { tab: '5',  contenta: 'Tab 1 Content', contentb: 'Tab 1 Content', contentc: 'Tab 1 Content' },
        { tab: '6',  contenta: 'Tab 1 Content', contentb: 'Tab 1 Content', contentc: 'Tab 1 Content' },
        { tab: '7',  contenta: 'Tab 1 Content', contentb: 'Tab 1 Content', contentc: 'Tab 1 Content' },
        { tab: '8',  contenta: 'Tab 1 Content', contentb: 'Tab 1 Content', contentc: 'Tab 1 Content' },
        { tab: '9',  contenta: 'Tab 1 Content', contentb: 'Tab 1 Content', contentc: 'Tab 1 Content' },
        { tab: '10',  contenta: 'Tab 1 Content', contentb: 'Tab 1 Content', contentc: 'Tab 1 Content' },
        { tab: '11',  contenta: 'Tab 1 Content', contentb: 'Tab 1 Content', contentc: 'Tab 1 Content' },
        { tab: '12',  contenta: 'Tab 1 Content', contentb: 'Tab 1 Content', contentc: 'Tab 1 Content' },
        { tab: '13',  contenta: 'Tab 1 Content', contentb: 'Tab 1 Content', contentc: 'Tab 1 Content' },
      ],
    
      
    }),

    
      
  }
</script>