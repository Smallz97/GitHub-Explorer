<template>
  <div class="head">
    <header>
      <h1 class="pagetitle">GitHub Explorer</h1>
      <label for="user" class="label">See exciting projects from awesome developers around the world</label>
      <input type="text" placeholder="Enter a Username" id="user" v-model="user" name="user" v-on:keydown.enter.prevent="getRepos(user)" class="searchbar"/>
      <button @click='getUserDetailsAndRepositories(user)' class="searchbutton">New Search</button>
    </header>
    <main>
      <search-user-placeholder v-if="userLoaded === 'none'"></search-user-placeholder>
      <loading-component v-if="userLoaded === 'loading'"></loading-component>
      <user-result 
        v-if="userLoaded ==='loaded'"
        :user="fetchedUser"
        :repositories="repositoriesInfo"
      ></user-result>
    </main>
    <pagination-component class="pagination"></pagination-component>
  </div>
</template>
  
<script>
import LoadingComponent from '@/components/LoadingComponent.vue'
import SearchUserPlaceholder from '@/components/SearchUserPlaceholder.vue'
import UserResult from '@/components/UserResult.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'
const baseGithubApi = 'https://api.github.com/users'
const githubApiParams = 'repos?sort=created&direction=desc&per_page=12'

export default {
  name: 'SearchUserPage',
  data() 
  {
    return {
      userLoaded: 'none',
      user: '',
      fetchedUser: {},
      repositoriesInfo: [],
      pageNumber: 1,
      totalRepos: ''
    }
  },
  components: {
    LoadingComponent,
    SearchUserPlaceholder,
    UserResult,
    PaginationComponent,
  },
  computed: {
    reposPerPage() {
      const githubApiParams = 'repos?sort=created&direction=desc&per_page=3';
      return parseInt(githubApiParams.split('per_page=')[1]);
    },
    totalPages() {
      return Math.ceil(this.totalRepos / this.reposPerPage);
    }
  },
  methods: {   
    getUserDetailsAndRepositories: async function(user) {
      if (user.trim() === '') return;
      this.userLoaded = 'loading';

      try {
        const fetchUserData = await fetch(`${baseGithubApi}/${user}`);
        const userData = await fetchUserData.json();

        const fetchRepositoriesData = await fetch(`${baseGithubApi}/${user}/${githubApiParams}&page=${this.pageNumber}`);
        const repositoriesData = await fetchRepositoriesData.json();

        // Extracting the user details
        const userDetails = {
          avatar: userData.avatar_url,
          fullName: userData.name,
          bio: userData.bio,
          followers: userData.followers,
          following: userData.following,
          totalRepos: userData.public_repos,
          // company: userData.company,
          dateJoined: userData.created_at,
          // gitHubProfileUrl: userDetails.html_url,
        }
        // Extracting the details for each repository and storing the value in an array.
        const repositoriesInfo = repositoriesData.map((repository) => ({
          name: repository.name,
          language: repository.language,
          description: repository.description,
          starCount: repository.stargazers_count,
          forkCount: repository.forks_count,
          dateCreated: repository.created_at,
          dateUpdated: repository.updated_at,
          url: repository.html_url
        }));

        // Updating the component's data properties with the fetched data
        this.user = user;
        this.totalRepos = userDetails.totalRepos;
        this.fetchedUser = userDetails;
        this.repositoriesInfo = repositoriesInfo;
        this.userLoaded = 'loaded';

      } catch (error) {
        console.error(error);
      }
    }
  },
  // mounted: function() {
  //   this.getUserDetailsAndRepositories('Smallz97');
  // }
}
</script>
  
<style scoped>
@import "@/assets/fonts/font.css";

.head {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: linear-gradient(to left, rgba(7, 27, 82, 1.0) 0%, rgba(0, 128, 128, 1.0) 100%);
}

header {
  background-color: #161B36;
}

header .pagetitle {
  /* color: rgba(7, 27, 82, 1.0); */
  color: #ffe200;
}

header .label {
  display: flex;
  flex-direction: column;
  margin: 1rem auto 1rem;
  color: darkorange;
}

header input, header button {
  line-height: 1.5rem;
  padding: 0.3rem;
  border: 1px solid black;
  margin-bottom: 4px;
}

.searchbar {
  border-radius: 0.3rem 0rem 0rem 0.3rem;
}

.searchbar:focus {
  font-size: 1.02em;   
}

.searchbutton {
  border-radius: 0rem 0.3rem 0.3rem 0rem;
  background-color: brown;
  border-top: 0px;
  border-bottom: 2px solid #DC4D01;
  color: #fff;
  transition: 0.5s;
  font-size: 1em;
  cursor: pointer;
}

.searchbutton:hover {
  background-color: #00998a;
  font-size: 1.1em;
}

main {
  background-color: white;
}

.pagination {
  /* background-color: #303c6a; */
  background-color: #161B36;
}
</style>