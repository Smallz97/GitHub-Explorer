<template>
    <div class="profile-card">
        <div class="profile-bar">
            <div class="avatar" :style="{ backgroundImage: `url(${imageUrl})` }"></div>
            <div class="info-bar">
                <div class="info">Full Name: <span class="value">{{ userprofile.fullName }}</span></div>
                <div class="info">Total Repositories: <span class="value">{{ userprofile.totalRepos }}</span></div>
                <div class="info">Followers: <span class="value">{{ userprofile.followers }}</span></div>
                <div class="info">Following: <span class="value">{{ userprofile.following }}</span></div>
                <div class="info">Date Joined: <span class="value">{{ formattedDate }}</span></div>
            </div>
        </div>
        <div class="repositories-list"><repositories-list :repositorieslist="repositoriesinfo" :username="username" :pagenumber="pagenumber"></repositories-list></div>
    </div>
</template>
  
<script>
import RepositoriesList from '@/components/RepositoriesList.vue';

export default {
    name: 'UserProfile',
    props: {
        userprofile: {
            type: Object,
            required: true,
        },
        repositoriesinfo: {
            type: Array,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        pagenumber: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            imageUrl: this.userprofile.avatar
        }
    },
    components: {
        RepositoriesList,
    },
    computed: {
        formattedDate() {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(this.userprofile.dateJoined).toLocaleDateString(undefined, options);
        }
    }
}
</script>
  
<style scoped>
.profile-card {
    background-color: #DC4D01;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
    margin: 6.5px;
}

.profile-bar {
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
}

.info {
    font-size: 1rem;
    margin-right: 1rem;
    color: darkmagenta;
}

.value {
    font-weight: bold;
}

.repositories-list {
    height: 79%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>