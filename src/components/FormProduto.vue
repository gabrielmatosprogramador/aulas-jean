<template>
  <q-card>
    <q-card-section class="cardProduto">
      <q-input label="Nome do Produto" outlined v-model="prod.nome" />
      <q-select outlined label="Categoria" v-model="prod.categoria" :options="categorias" />
      <q-input label="descrição" outlined v-model="prod.descricao" />
      <q-input label="Preço" outlined reverse-fill-mask mask="#.##" v-model.number="prod.preco" />
      <q-input label="URL Imagem" outlined v-model="prod.urlImagem" />
    </q-card-section>
    <q-card-actions>
      <q-btn label="Cancelar" to="/" />
      <q-btn label="limpar" />
      <q-btn label="Salvar" @click="salvaProduto()" :disable="formNotOK()" />
    </q-card-actions>
  </q-card>
</template>
<script>
export default {
  name: 'FormProduto',
  emits: ['salvar'],
  props: {
    produto: Object,
  },
  data() {
    return {
      prod: { nome: '', categoria: '', preco: 0, descricao: '', urlImagem: '' },
      categorias: ['Eletrônicos', 'Roupas', 'Alimentos'],
    }
  },
  mounted() {
    if (this.produto) {
      console.log('Produto recebido:', this.produto)
      this.prod = this.produto
    }
  },
  methods: {
    salvaProduto() {
      this.$emit('salvar', this.prod)
      /*this.$emits('salvar', {
        nome: this.nome,
        categoria: this.categoria,
        preco: this.preco,
        descricao: this.descricao,
        urlImagem: this.urlImagem,
      })*/
    },
    formNotOK() {
      try {
        return this.prod.nome.length < 3 || this.prod.categoria.length == 0 || this.prod.preco <= 0
      } catch (error) {
        console.error('Erro ao validar o formulário:', error)
        return true
      }
    },
  },
}
</script>
<style>
.cardProduto {
  min-width: 300px;
  width: 50vw;
}
</style>
