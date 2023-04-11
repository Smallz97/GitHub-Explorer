<template>
    <div class="card-container">
        <div v-for="(repository, index) in repositorieslist" :key="index" class="card"><h5>{{ repository.name }}</h5></div>
        <div><button @click="getRepositoriesInSelectedPage(nextPage)" class="card">Load More</button></div>
    </div>  
</template>

<script>
const baseGithubApi = 'https://api.github.com/users'
const githubApiParams = 'repos?sort=created&direction=desc&per_page=12'

export default {
    name: 'RepositoriesList',
    props: {
        repositorieslist: {
            type: Array,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        pagenumber: {
            type: Number,
            required: true
        }
    },
    emits: ['update-repositories'],
    computed: {
        nextPage() {
            return parseInt(this.$props.pagenumber) + 1;
        }
    },
    methods: {
        getRepositoriesInSelectedPage: async function (nextPage = this.nextPage) {
            try {
                const fetchRepositoriesData = await fetch(`${baseGithubApi}/${this.$props.username}/${githubApiParams}&page=${nextPage}`);
                const repositoriesData = await fetchRepositoriesData.json();

                // Extracting the details of each repository and storing the value in an array.
                const repositoriesInfo = repositoriesData.map((repository) => ({
                    name: repository.name,
                    language: repository.language,
                    description: repository.description,
                    starCount: repository.stargazers_count,
                    forkCount: repository.forks_count,
                    dateCreated: repository.created_at,
                    dateUpdated: repository.updated_at,
                    id: repository.id,
                    url: repository.html_url
                }));

                // Emitting an event with the new value of repositoriesInfo to the parent component (UserProfile) to be used in updating the data property.
                this.$emit('update-repositories', repositoriesInfo);

            } catch (error) {
                console.log (error);
            }

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
    background-color: lightseagreen;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 2px 2px #ccc;
    margin: 10px;
    padding: 10px;
    width: 300px;
    color: navy;
    /* color: white; */
}

.card:hover{
    cursor: default;
    transform: scale(1.05);
    transition: all 1.5s;
}
</style>