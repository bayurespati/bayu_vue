<template>
    <div>
        <h3>Some user detail</h3>
        <p>User loaded has ID : {{ $route.params.id }}</p>
        <router-link
                tag="button"
                :to="{ name: 'userEdit' }"
                class="btn btn-primary">Edit User</router-link>
    </div>
</template>