<template>
    <div class="card-container">
        <div v-for="(repository, index) in repositorieslist" :key="index" class="card"><h5>{{ repository.name }}</h5></div>
    </div>  
</template>

<script>
export default {
    name: 'RepositoriesList',
    props: {
        repositorieslist: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    background-color: #C89D7C;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 2px 2px #ccc;
    margin: 10px;
    padding: 10px;
    width: 300px;
    color: navy;
}

.card :hover{
    cursor: default;
    transform: scale(1.2);
    transition: all 5ms;
}
</style>