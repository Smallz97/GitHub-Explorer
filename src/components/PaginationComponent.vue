<template>
    <div>
        <div class="pagiantion-row">
            <!-- First Page Button -->
            <button class="pagination-button">&lt;&lt; </button>
            <!-- Previous Button -->
            <button class="pagination-button">Previous</button>
            <!-- Row of Pagination buttons -->
            <span v-for="(item, index) in new Array (10)" :key="index">
                <button 
                    class="pagination-button"
                    @click="pageNumber = index + 1"
                >
                    {{ index + 1 }}
                </button>
            </span>
            <!-- Next Button -->
            <button class="pagination-button">Next</button>
            <!-- Last Page Button -->
            <button class="pagination-button">&gt;&gt;</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaginationComponent',
    data () {
        return {
            pageNumber : 1
        }
    }
}
</script>


<style scoped>
.pagination-button {
    padding: 8px;
    margin: 2px;
    border-radius: 3px;
    font-size: 1em;
    cursor: pointer;
    background-color: #75d5fd;
    color: black;
}

.pagination-row {
    /* padding: 5px 0; */
}
</style>