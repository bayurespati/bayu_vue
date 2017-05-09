<template>
    <div>
        <input v-model="inputText">

        <p style="margin-top: 30px">{{ reversedSentence | countLatter }}</p>
    </div>
</template>
<script>
    import { sentenceMixin } from './sentenceMixin.js';
    export default{
        mixins: [sentenceMixin]
    }
</script>
