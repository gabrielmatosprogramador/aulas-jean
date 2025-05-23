<template>
  <q-page class="flex flex-center">
    <router-link to="/novoProduto"> cadastrar novo produto </router-link>
    <q-checkbox v-model="logado" />
    <card-produto
      @addCart="colocaCarrinho"
      v-for="prod in produtos"
      v-bind:key="prod.id"
      :produto="prod"
      :mostraBotao="logado"
    />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CardProduto from 'src/components/CardProduto.vue'
import axios from 'axios'

export default defineComponent({
  name: 'IndexPage',
  components: { CardProduto },
  data() {
    return {
      produtos: [],
      logado: false,
    }
  },
  mounted() {
    const api = axios.create({
      baseURL: 'http://localhost:3000',
      timeout: 1000,
      headers: { 'Content-Type': 'application/json' },
    })
    api
      .get('/produtos')
      .then((response) => {
        this.produtos = response.data
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error)
      })
  },
  methods: {
    colocaCarrinho(qtd, produto) {
      alert('Produto adicionado ao carrinho: ' + qtd + ' x ' + produto.nome)
    },
  },
})
</script>
