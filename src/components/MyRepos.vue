<template>
  <div class="hello">
    <header>
      <h1>GitHub Explorer</h1>
      <label for="user">Explore exciting projects of awesome developrs from around the world</label>
      <input type="text" placeholder="Enter a " id="user" v-model="user" name="user"
        v-on:keydown.enter.prevent="getRepos(user)" />
      <button @click='getRepos(user)'>New Search</button>
    </header>
    <main>
      <repo-card v-for="repo in repoInfo" 
        :key="repo.name" 
        :repoName=repo.name
        :repoDescription=repo.description 
        :language=repo.language 
        :starCount=repo.starCount 
        :forkCount=repo.forkCount
        :dateCreated=repo.dateCreated 
      ></repo-card>
    </main>
    <button v-if="morePagesAvailable" @click="paginateRepos">See More</button>
  </div>
</template>
  
<script>
import RepoCard from '@/components/RepoCard.vue'
// import LoadingPage from '@/components/LoadingPage.vue'
const baseGithubApi = 'https://api.github.com/users'
const githubApiParams = 'repos?sort=created&direction=desc&per_page=30'

export default {
  name: 'MyRepos',
  data() 
  {
    return {
      user: '',
      currentUser: '',
      pagesLoaded: true,
      repoInfo: [],
      currentRepo: '',
      page: 1,
    }
  },
  components: {
    RepoCard
  },
  computed: {
    morePagesAvailable: function() {
      return this.repoInfo.length == (30 * this.page)
    }
  },
  methods: {
    getRepos: async function(user) {
      if (user.trim() === '') return;
      this.repoInfo = [];
      this.page = 1;
      this.currentUser = user.trim();

      try {
        const response = await fetch(`${baseGithubApi}/${user}/${githubApiParams}`);
        const data = await response.json();
        for (const repo of data) {
          this.repoInfo.push({
            name: repo.name,
            language: repo.language,
            description: repo.description,
            starCount: repo.stargazers_count,
            forkCount: repo.forks_count,
            dateCreated: repo.created_at
          });
        }
      } catch (error) {
        console.error(error);
      }
    },
    paginateRepos: async function () {
      this.pagesLoaded = false;
      this.page = this.page + 1;
      const url = `${baseGithubApi}/${this.currentUser}/${githubApiParams}&page=${this.page}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        data.forEach(repo => {
          this.repoInfo.push({
            name: repo.name,
            language: repo.language,
            description: repo.description,
            starCount: repo.stargazers_count,
            forkCount: repo.forks_count,
            dateCreated: repo.created_at
          });
        });

        this.pagesLoaded = true;
      } catch (error) {
        console.error('Error fetching repository information', error);
      }
    }
  },
  mounted: function() {
    this.getRepos('Smallz97');
  }
}
</script>
  
<style scoped>
.hello {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: white;
  /* background: linear-gradient(to left, rgba(7, 27, 82, 1.0) 0%, rgba(0, 128, 128, 1.0) 100%); */
  background-color: burlywood;
}

header {
  margin: 0rem auto 2rem auto;
  /* background-image: linear-gradient(to bottom right, var(--main-color), var(--main-color), #fff, #fff, #fff) */
  background-color: brown;
}

header label {
  display: flex;
  flex-direction: column;
  width: 35vw;
  margin: 1rem auto 0.5rem;
}

header input, header button {
  line-height: 1.5rem;
  padding: 0.5rem;
  border: 1px solid var(--main-color);
}

header input {
  border-radius: 0.3rem 0rem 0rem 0.3rem;
}

header button {
  border-radius: 0rem 0.3rem 0.3rem 0rem;
  background-color: var(--main-color);
  border-top: 0px;
  border-bottom: 2px solid var(--main-color);
  color: #fff;
}

header button:hover {
  background-color: #00998a;
}

input:focus {
  font-size: 1.1em;   
}

main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
  grid-gap: 1.5rem;
  margin: 1rem;
}

button {
  border: 1px solid var(--main-color);
  background-color: #fff;
  color: var(--main-color);
  padding: .5em 1em;
  border-radius: 0.7em;
  font-size: 1em;
  font-weight: bolder;
  cursor: pointer;
}

button:hover {
  background-color: var(--main-color);
  color: #fff;
  transition: 0.5s
}

h1 {
  margin-top: 0rem;
  padding-top: 1.5rem;
}

h2, h3 {
  color: var(--main-color);
}

h2 {
  font-weight: boldest;
  font-size: 2.5em;
}
</style>