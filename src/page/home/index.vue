<template>
  	<div class="home_container">
        <itemcontainer father-component="home"></itemcontainer>
    </div>
</template>

<script>
import itemcontainer from 'src/components/itemcontainer'

export default {
	name: 'home',
  	components: {
  		itemcontainer
  	},
    created(){

    }
}
</script>

<style lang="less" scoped>
    .home_container{

    }
</style>
