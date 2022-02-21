<template>
  <v-container>
    <h3>Dashboard</h3>

    <v-card>
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="employee in employees"
            :key="employee.employee_id"
          >
            <v-list-item-content>
              <v-row class="mt-auto align-center">
                <v-col cols="1">
                  <span>{{ employee.employee_id }}</span>
                </v-col>
                <v-col>
                  <v-list-item-title font-weight-bold class="mb-2"
                    >Name: {{ employee.name }}</v-list-item-title
                  >
                  <v-list-item-subtitle
                    >Department: {{ employee.dept }}</v-list-item-subtitle
                  >
                </v-col>
              </v-row>
            </v-list-item-content>
            <router-link
              :to="{
                name: 'view-employee',
                params: { employee_id: employee.employee_id },
              }"
            >
              <v-icon> mdi-account-circle</v-icon>
            </router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <v-btn
      class="mx-2"
      fab
      dark
      large
      color="#EC407A"
      fixed
      right
      bottom
      @click="goToDashboard"
    >
      <v-icon dark> mdi-pencil </v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import db from "./firebaseInit";
import { collection, getDocs } from "firebase/firestore";
export default {
  name: "dashboard",
  data() {
    return {
      employees: [],
    };
  },
  methods: {
    goToDashboard() {
      this.$router.push("/new");
    },
    async getEmployees(db) {
      const employees = collection(db, "employees");
      const employeesSnapshot = await getDocs(employees);
      employeesSnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          employee_id: doc.data().employee_id,
          name: doc.data().name,
          dept: doc.data().dept,
          position: doc.data().position,
        };
        this.employees.push(data);
      });
    },
  },
  created() {
    this.getEmployees(db);
    console.log(this.employees);
  },
};
</script>
