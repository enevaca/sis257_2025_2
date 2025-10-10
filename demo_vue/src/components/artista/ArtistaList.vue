<script setup lang="ts">
import type { Artista } from '@/models/artista'
import http from '@/plugins/axios'
import Button from 'primevue/button'
import { onMounted, ref } from 'vue'

const ENDPOINT = 'artistas'
const artistas = ref<Artista[]>([])
const emit = defineEmits(['edit'])

async function obtenerLista() {
  artistas.value = await http.get(ENDPOINT).then((response) => response.data)
}

function emitirEdicion(artista: Artista) {
  emit('edit', artista)
}

async function eliminar(id: number) {
  if (confirm('Está seguro que desea eliminar el registro')) {
    await http.delete(`${ENDPOINT}/${id}`)
    obtenerLista()
  }
}

onMounted(() => {
  obtenerLista()
})
defineExpose({ obtenerLista })
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Nro.</th>
          <th>Nombre</th>
          <th>Nacionalidad</th>
          <th>Fotografía</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(artista, index) in artistas" :key="artista.id">
          <td>{{ index + 1 }}</td>
          <td>{{ artista.nombre }}</td>
          <td>{{ artista.nacionalidad }}</td>
          <td><img :src="artista.fotografia" alt="foto" width="80" /></td>
          <td>
            <Button icon="pi pi-pencil" aria-label="Editar" text @click="emitirEdicion(artista)" />
            <Button icon="pi pi-trash" aria-label="Eliminar" text @click="eliminar(artista.id)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
