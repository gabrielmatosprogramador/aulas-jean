<template>
  <q-card class="q-pt-lg q-pl-lg q-pr-lg q-ml-md bg-red-6">
    <q-card-title class="text-white">
      <span class="text-h4">{{ produto.nome }}</span>
    </q-card-title>
    <q-separator />
    <q-card-section class="text-body">
      código: {{ produto.id }}<br />
      Preço: R$ {{ produto.preco.toFixed(2) }}<br />
    </q-card-section>
    <q-card-actions align="right" v-if="mostraBotao">
      <q-input
        class="q-mb-md"
        input-class="text-right"
        v-model.number="qtd"
        type="number"
        min="1"
        max="99"
        label="Qtd"
      />
      <q-btn
        outlined
        @click="addCart()"
        text-color="white"
        icon="add_shopping_cart"
        label="Colocar no Carrinho"
      />
    </q-card-actions>
  </q-card>
</template>
<script>
export default {
  name: 'CardProduto',
  props: {
    produto: Object,
    mostraBotao: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      qtd: 1,
    }
  },
  emits: ['addCart'],
  methods: {
    addCart() {
      this.$emit('addCart', this.qtd, this.produto)
    },
  },
}
</script>
<style></style>
