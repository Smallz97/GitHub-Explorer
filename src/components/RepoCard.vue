<template>
    <article class="card" @click="$emit('selected', repoName)">
      <h2>{{ repoName }}</h2>
      <p>{{ repoDescription }}</p>
      <p>{{ language }}</p>
      <!-- <span><font-awesome-icon icon="fa-solid fa-star" /> {{ starCount }}</span><span> <font-awesome-icon icon="fa-solid fa-code-fork" /> {{ forkCount }}</span> -->
      <p>Created: {{ formattedDate }}</p>
    </article>
</template>
  
<script>
export default {
    name: 'RepoCard',
    props: {
        repoName: String,
        repoDescription: String,
        language: String,
        starCount: Number,
        forkCount: Number,
        dateCreated: String,
    },
    computed: {
        formattedDate() {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(this.dateCreated).toLocaleDateString(undefined, options);
        },
    },
}
</script>
  
<style scoped>
.card {
    border: 1px solid #8E0000;
    background-color: #005666;
    cursor: pointer;
    overflow: auto;
    border-radius: 8px;
    box-shadow: 0 0 20px 1px #8e0000;
    text-align: left;
    padding: 1rem;
    color: white;
}

h2 {
    font-size: 1.5em;
    color: black;
}
p:first-of-type, p:last-of-type {
    font-weight: bold;
    overflow-wrap: break-word;
}
span {
    display: inline-block;
    margin-right: 2em;
}
</style>