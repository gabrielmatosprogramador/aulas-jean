<template>
  {{ produtoid }}
  {{ produto }}
  <form-produto v-if="produto != null" @salvar="onSalvar" :produto="produto" />
</template>
<script>
import { buscaProdutoPorId } from 'src/services'
import FormProduto from 'src/components/FormProduto.vue'

export default {
  name: 'EditaProduto',
  components: { FormProduto },
  data() {
    return {
      produtoid: '',
      produto: null,
    }
  },
  mounted() {
    this.produtoid = this.$route.params.idProduto
    buscaProdutoPorId(this.produtoid)
      .then((response) => {
        console.log('Produto encontrado:', response)
        this.produto = response
      })
      .catch((error) => {
        console.error('Erro ao buscar produto:', error)
      })
  },
}
</script>
<style></style>
