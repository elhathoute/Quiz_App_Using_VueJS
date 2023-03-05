// vue object
const app =Vue.createApp({
    data() {
        return {
            index:0,
            selectedAnswer:'',
            count:3,
            correctAnswers:0,
            wrongAnswers:0,

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
            if(this.selectedAnswer==this.questions[this.index]['correct_answer']){
                this.correctAnswers++
            }else
            {
                this.wrongAnswers++
                

            }

        },
        nextQuestion(){
            this.index++;
            this.selectedAnswer=''
            console.log(this.selectedAnswer)
        },
        ShowResult(){

            this.index++;
        },
        resetQuiz(){
           this.index=0
           this.selectedAnswer=''
           this.correctAnswers=0
           this.wrongAnswers=0 
        }
    },
})

app.mount('#app')