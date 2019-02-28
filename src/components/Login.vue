<template>
  <div class="row">
    <form action>
      <div class="form-group">
        <label for>E-mail</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="yourmail@email.com"
        />
      </div>
      <div class="form-group">
        <label for>Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="your password"
        />
        <button type="button" class="btn btn-primary" @click.prevent="signIn">
          Sign In
        </button>
        <button type="button" class="btn btn-danger" @click.prevent="signOut">
          Sign Out
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  methods: {
    signIn() {
      var email = document.getElementById('email').value
      var password = document.getElementById('password').value
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function(error) {
          var errorCode = error.code
          var errorMessage = error.message

          if (errorCode === 'auth/wrong-password') {
            alert('Wrong Password')
          } else {
            alert(errorMessage)
          }
        })
    },
    signOut() {
      firebase.auth
        .signOut()
        .then(function() {
          alert('logged out')
        })
        .catch(function(error) {
          alert('Error')
          console.log(error)
        })
    }
  }
}
</script>

<style scoped></style>
