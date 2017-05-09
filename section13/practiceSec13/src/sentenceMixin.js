export const sentenceMixin = {
    data(){
        return{
            text:'This is new Sentence',
            inputText:''
        }
    },
    computed:{
        reversedSentence: function(){
            return this.inputText.split("").reverse().join("");
        }
    }
};
