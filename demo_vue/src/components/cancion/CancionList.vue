<script setup lang="ts">
import type { Cancion } from '@/models/cancion'
import http from '@/plugins/axios'
import { Button, Column, DataTable, Dialog, InputGroup, InputGroupAddon, InputText } from 'primevue'
import { computed, onMounted, ref } from 'vue'

const ENDPOINT = 'canciones'
const canciones = ref<Cancion[]>([])
const cancionDelete = ref<Cancion | null>(null)
const mostrarConfirmDialog = ref<boolean>(false)
const busqueda = ref<string>('')
const emit = defineEmits(['edit'])

const cancionesFiltradas = computed(() => {
  return canciones.value.filter(
    (cancion) =>
      cancion.nombre.toLowerCase().includes(busqueda.value.toLowerCase()) ||
      cancion.album.artista.nombre.toLowerCase().includes(busqueda.value.toLowerCase()),
  )
})

async function obtenerLista() {
  canciones.value = await http.get(ENDPOINT).then((response) => response.data)
}

function emitirEdicion(cancion: Cancion) {
  emit('edit', cancion)
}

function mostrarEliminarConfirm(cancion: Cancion) {
  cancionDelete.value = cancion
  mostrarConfirmDialog.value = true
}

async function eliminar() {
  await http.delete(`${ENDPOINT}/${cancionDelete.value?.id}`)
  obtenerLista()
  mostrarConfirmDialog.value = false
}

onMounted(() => {
  obtenerLista()
})
defineExpose({ obtenerLista })
</script>

<template>
  <div>
    <div class="col-7 pl-0 mt-3">
      <InputGroup>
        <InputGroupAddon><i class="pi pi-search"></i></InputGroupAddon>
        <InputText v-model="busqueda" type="text" placeholder="Buscar por titulo o artista" />
      </InputGroup>
    </div>

    <DataTable
      :value="cancionesFiltradas"
      paginator
      scrollable
      scrollHeight="flex"
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      tableStyle="min-width: 50rem"
      paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      currentPageReportTemplate="{first} a {last} de {totalRecords}"
    >
      <template #paginatorstart>
        <Button type="button" icon="pi pi-refresh" text @click="obtenerLista" />
      </template>
      <Column field="nombre" header="Nombre" sortable style="min-width: 120px"></Column>
      <Column header="Artista" sortable style="min-width: 120px">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <img :alt="data.nombre" :src="data.album.artista.fotografia" style="width: 50px" />
            <span>{{ data.album.artista.nombre }}</span>
          </div>
        </template>
      </Column>
      <Column field="album.nombre" header="Album" sortable style="min-width: 120px"></Column>
      <Column field="genero.descripcion" header="Género" sortable style="min-width: 50px"></Column>
      <Column field="duracion" header="Duración" sortable style="min-width: 50px"></Column>
      <Column field="tags" header="Tags" sortable style="min-width: 50px"></Column>
      <Column header="Acciones" frozen alignFrozen="right" style="min-width: 160px">
        <template #body="{ data }">
          <Button
            icon="pi pi-youtube"
            aria-label="Enlace"
            text
            as="a"
            :href="data.url"
            target="_blank"
          />
          <Button icon="pi pi-pencil" aria-label="Editar" text @click="emitirEdicion(data)" />
          <Button
            icon="pi pi-trash"
            aria-label="Eliminar"
            text
            @click="mostrarEliminarConfirm(data)"
          />
        </template>
      </Column>
    </DataTable>

    <table v-if="false">
      <thead>
        <tr>
          <th>Nro.</th>
          <th>Nombre</th>
          <th>Artista</th>
          <th>Album</th>
          <th>Género</th>
          <th>Duración</th>
          <th>Tags</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(artista, index) in cancionesFiltradas" :key="artista.id">
          <td>{{ index + 1 }}</td>
          <td>{{ artista.nombre }}</td>
          <td>{{ artista.album.artista.nombre }}</td>
          <td>{{ artista.album.nombre }}</td>
          <td>{{ artista.genero.descripcion }}</td>
          <td>{{ artista.duracion }}</td>
          <td>{{ artista.tags }}</td>
          <td>
            <Button
              icon="pi pi-youtube"
              aria-label="Enlace"
              text
              as="a"
              :href="artista.url"
              target="_blank"
            />
            <Button icon="pi pi-pencil" aria-label="Editar" text @click="emitirEdicion(artista)" />
            <Button
              icon="pi pi-trash"
              aria-label="Eliminar"
              text
              @click="mostrarEliminarConfirm(artista)"
            />
          </td>
        </tr>
        <tr v-if="cancionesFiltradas.length === 0">
          <td colspan="4">No se encontraron resultados.</td>
        </tr>
      </tbody>
    </table>

    <Dialog
      v-model:visible="mostrarConfirmDialog"
      header="Confirmar Eliminación"
      :style="{ width: '25rem' }"
    >
      <p>¿Estás seguro de que deseas eliminar el artista {{ cancionDelete?.nombre }}?</p>
      <div class="flex justify-end gap-2">
        <Button
          type="button"
          label="Cancelar"
          severity="secondary"
          @click="mostrarConfirmDialog = false"
        />
        <Button type="button" label="Eliminar" @click="eliminar" />
      </div>
    </Dialog>
  </div>
</template>

<style scoped></style>
