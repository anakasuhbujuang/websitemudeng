<template>
  <div>
    
    <v-stepper v-model="e1">
      <v-stepper-header >
        <template v-for="item in steps" >
          <v-stepper-step
            :key="`${item.n}-step`"
            :complete="e1 > item.n"
            :step="item.n"
            editable
            
          >
            <!-- <span v-for="item in judul" :key="item.n">{{ item.stepjudul }}</span> -->
            {{item.title}}
          </v-stepper-step>

          <v-divider
            v-if="item.n !== steps"
            :key="item.n"
          ></v-divider>
        </template>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content
          v-for="item in steps"
          :key="`${item.n}-content`"
          :step="item.n"
        >
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          >{{item.title}}</v-card>

          <v-btn
            
            color="primary"
            @click="nextStep(item.n)"
          >
            Continue
          </v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        e1: 1,
        // steps: 3,

        steps:[

          {
            n: 1,
            title:'a',
          },
          {
            n: 2,
            title:'b',
          },
          {
            n: 3,
            title:'c',
          },
          

        ],
      }
    },
    watch: {
      steps (val) {
        if (this.e1 > val) {
          this.e1 = val
        }
      },
    },
    methods: {
      nextStep (n) {
        if (n === this.steps) {
          this.e1 = 1
        } else {
          this.e1 = n + 1
        }
      },
    },
  }
</script>
