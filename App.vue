<script setup>
import { reactive, computed } from 'vue';

let estado = reactive({
  num1: 0,
  num2: 0,
  operation: 'add',
});

const result = computed(() => {
  const n1 = parseFloat(estado.num1);
  const n2 = parseFloat(estado.num2);
  
  switch (estado.operation) {
    case 'add':
      return n1 + n2;
    case 'subtract':
      return n1 - n2;
    case 'multiply':
      return n1 * n2;
    case 'divide':
      return n2 !== 0 ? n1 / n2 : 'Erro: Divisão por zero';
    default:
      return 0;
  }
});



</script>

<template>
    <div>
    <h1>Calculadora Aritmética</h1>
    
    <input type="number" v-model.number="estado.num1" placeholder="Insira o primeiro número" />
    <select v-model="estado.operation">
      <option value="add">+</option>
      <option value="subtract">-</option>
      <option value="multiply">*</option>
      <option value="divide">/</option>
    </select>
    <input type="number" v-model.number="estado.num2" placeholder="Insira o segundo número" />

    <h3>Resultado: {{ result }}</h3>
  </div>
</template>

<style scoped>

</style>
