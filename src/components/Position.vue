<template>
  <nav class="navbar navbar-expand-lg navbar-light py-0 mt-3"  style="background-color: #e3f2fd;">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="#">遊戲 >><span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">伺服器 >></a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled">物品種類 >></a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled">商品名稱</a>
            </li>
        </ul>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'Position',
    data() {
        return {
            Position: 'fucj'
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
