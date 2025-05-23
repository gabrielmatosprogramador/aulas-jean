<template>
  <h2>Novo Produto</h2>
  <form-produto @salvar="onSalvar" :produto="undefined" @delete="onTirar" />
</template>
<script>
import FormProduto from 'src/components/FormProduto.vue'
import { salvaProduto, tiraItem } from 'src/services/index.js'
export default {
  name: 'NovoProduto',
  components: { FormProduto },
  methods: {
    onSalvar(produto) {
      salvaProduto(produto)
        .then(() => this.$router.push('/'))
        .catch((error) => {
          console.error('Erro ao salvar produto:', error)
          alert('Erro ao salvar produto: ' + error.message)
        })
    },
    onTirar(produto) {
      tiraItem(produto)
        .then(() => this.$router.push('/'))
        .catch((error) => {
          console.error('Erro ao remover produto:', error)
          alert('Erro ao remover produto: ' + error.message)
        })
    },
  },
}
</script>
<style></style>
