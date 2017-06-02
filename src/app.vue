<template>
    <section>
        <h3>{{message}}</h3>
    </section>
</template>

<script>
export var App = {
    name: 'head',
    data() {
        return {
            message: '我是Vue'
        }
    }
}
</script>

<style>
h3 {
    color: red;
}
</style>

