<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input v-model="username" placeholder="Username" required />
      <input v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    register() {
      axios.post('http://localhost:8000/api/auth/register/', {
        username: this.username,
        email: this.email,
        password: this.password,
      })
        .then(response => {
          localStorage.setItem('access_token', response.data.access);
          localStorage.setItem('refresh_token', response.data.refresh);
          this.$router.push('/dashboard');
        })
        .catch(error => {
          this.error = 'Registration failed';
        });
    },
  },
};
</script>