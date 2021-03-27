<template>
<div class="row mt-3 ml-5">
    <div class="col-1">
        <div class="row">
            <img src="../assets/cat.jpg" class="img-thumbnail">
        </div>
        <div class="row">
            <img src="../assets/cat.jpg" class="img-thumbnail">
        </div>
        <div class="row">
            <img src="../assets/cat.jpg" class="img-thumbnail">
        </div>
    </div>
    <div class="col-3">
        <img src="../assets/cat.jpg" class="img-thumbnail">
    </div>
    <div class="col-8 center">
        <div class="row center">
            <h1>商品名稱</h1>
        </div>
        <div class="row">
            <h1>$800</h1>
        </div>
        <div class="row">
            <div>
                <b-tabs content-class="mt-3">
                    <b-tab title="商品資訊" active>
                        <p>I'm the first tab</p>
                    </b-tab>
                    <b-tab title="商品品牌">
                        <p>I'm the second tab</p>
                    </b-tab>
                </b-tabs>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ProductPage',
    data() {
        return {
            ProductPage: 'fucj'
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1 {
    font-weight: normal;
}
</style>
