<template>
    <div class="card-container">
        <div v-for="(repo, index) in repos" :key="index" class="card">
            <h5>{{ repo.name }}</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RepoCard',
    props: {
        repos: {
            type: Object,
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
    /* background-color: #dbc300; */
}

.card {
    background-color: #C89D7C;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 2px 2px #ccc;
    margin: 10px;
    padding: 10px;
    min-width: 300px;
    color: navy;
}
</style>