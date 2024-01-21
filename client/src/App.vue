<template>
  <div>
    <h1>Registro de Estudiantes</h1>

    <form>
      <label>Nombre: </label>
      <input type="text" id="nombre">
      <br>

      <label>Grado: </label>
      <input type="text" id="grado">
      <br>

      <label>Edad: </label>
      <input type="text" id="edad">
      <br>
    </form>

    <button @click="ejemplo" >Registrar</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  method: {
    ejemplo(){
      console.log("Se ha hecho click en el boton")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>