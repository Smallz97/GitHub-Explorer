<template>
    <div class="card">
        <div class="bar">
            <div class="avatar" :style="{ backgroundImage: `url(${imageUrl})` }"></div>
            <div class="info-bar">
                <div class="info">Full Name: <span class="value">{{ user.fullName }}</span></div>
                <div class="info">Total Repositories: <span class="value">{{ user.totalRepos }}</span></div>
                <div class="info">Followers: <span class="value">{{ user.followers }}</span></div>
                <div class="info">Following: <span class="value">{{ user.following }}</span></div>
                <!-- <div class="info">Company: <span class="value">{{ user.company }}</span></div> -->
                <div class="info">Date Joined: <span class="value">{{ formattedDate }}</span></div>
            </div>
        </div>
        <div class="results">
            <repo-card :repos="repositories"></repo-card>
        </div>
    </div>
</template>
  
<script>
import RepoCard from '@/components/RepoCard.vue';

export default {
    name: 'UserResult',
    props: {
        user: {
            type: Object,
            required: true,
        },
        repositories: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            imageUrl: this.user.avatar
        }
    },
    components: {
        RepoCard,
    },
    computed: {
        formattedDate() {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(this.user.dateJoined).toLocaleDateString(undefined, options);
        }
    }
}
</script>
  
<style scoped>
.card {
    background-color: #DC4D01;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
    margin: 6.5px;
}

.bar {
    background-color: #00ADF2;
    height: 21%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.avatar {
    width: 8%;
    height: 85%;
    border-radius: 10%;
    background-size: cover;
    background-position: center;
}

.info-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;
    height: 100%;
    width: 80%;
    /* background-color: #dbc300; */
    /* background-color: #00bfff; */
    /* background-color: #7BD9F6; */
    background-color: #00ADF2;
}

.info {
    font-size: 1rem;
    margin-right: 1rem;
    color: darkmagenta;
}

.value {
    font-weight: bold;
}

.results {
    height: 79%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>