<template>
  <h2>Novo Produto</h2>
  <form-produto @salvar="onSalvar" :produto="undefined" />
</template>
<script>
import FormProduto from 'src/components/FormProduto.vue'
import { salvaProduto } from 'src/services'
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
  },
}
</script>
<style></style>
