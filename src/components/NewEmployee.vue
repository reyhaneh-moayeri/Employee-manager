<template>
  <v-container>
    <form @submit.prevent="submit">
      <v-text-field
        v-model="name"
        :counter="10"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="employee_id"
        :counter="7"
        label="Employee Id"
        required
      ></v-text-field>
      <v-text-field v-model="dept" label="department" required></v-text-field>
      <v-text-field v-model="position" label="position" required></v-text-field>
      <v-btn class="mr-4" type="submit"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </form>
  </v-container>
</template>

<script>
import db from "./firebaseInit";
import { collection, addDoc } from "firebase/firestore";
export default {
  name: "new-employee",
  data() {
    return {
      name: null,
      dept: null,
      employee_id: null,
      position: null,
    };
  },

  methods: {
    async saveEmployee() {
      try {
        const docRef = await addDoc(collection(db, "employees"), {
          name: this.name,
          employee_id: this.employee_id,
          dept: this.dept,
          position: this.position,
        });
        console.log("Document written with ID: ", docRef.id);
        this.$router.push("/");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    submit() {
      this.saveEmployee();
    },
    clear() {
      this.name = null;
      this.employee_id = null;
      this.dept = null;
      this.position = null;
    },
  },
};
</script>
