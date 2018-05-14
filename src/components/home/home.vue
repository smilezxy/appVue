<template>
  <div>
    <scroller style="padding-top: 45px;"
              :on-refresh="refresh"
              :on-infinite="infinite"
              ref="my_scroller">

      <div v-for="(item, index) in items" class="row" :key="index">
        {{ item }}
      </div>
    </scroller>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        items: []
      }
    },

    mounted() {
      for (let i = 1; i <= 20; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }

      this.top = 1
      this.bottom = 20
    },

    methods: {
      refresh(done) {
        setTimeout(() => {
          let start = this.top - 1

          for (let i = start; i > start - 10; i--) {
            this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }

          this.top = this.top - 10;

          done()
        }, 1500)
      },

      infinite(done) {
        console.log('infinite called..')
        
        setTimeout(() => {
          let start = this.bottom + 1

          for (let i = start; i < start + 10; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.')
          }

          this.bottom = this.bottom + 10

          done()
        }, 1500)
      },

      onItemClick(index, item) {
        console.log(index)
      }
    }
  }
</script>
