// vue object
const app =Vue.createApp({
    data() {
        return {

            selectedAnswer:'',

            questions:[
                {
                    question:"what is css",
                    answers:{
                        a:'nothing ',
                        b:'style sheet',
                        c:'nothing ',
                        d:'nothing ',
                    },
                    correct_answer:'b'
                },
                {
                    question:"what is html",
                    answers:{
                        a:'nothing ',
                        b:'hyperText',
                        c:'nothing ',
                        d:'nothing ',
                    },
                    correct_answer:'b'
                },
                {
                    question:" php  for static websites",
                    answers:{
                        a:'true ',
                        b:'false',
                      
                    },
                    correct_answer:'b'
                },
               
            ]
        }
    },
    methods: {
        answered(event){
            this.selectedAnswer = event.target.value
            console.log( this.selectedAnswer)

        }
    },
})

app.mount('#app')