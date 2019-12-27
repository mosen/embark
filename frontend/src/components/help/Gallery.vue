<template>

    <v-layout class="mt-5 mb-5">
        <v-flex xs12>
            <p class="display-1">Start building with &hellip;</p>
        </v-flex>
    </v-layout>

    <v-layout align-center justify-space-around row fill-height>
        <v-flex xs6 md3>
            <v-card>
                <v-img
                        src="@/assets/java.svg"
                        class="white--text"
                        height="200px"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                >
                    <v-card-title class="fill-height align-end"
                    >
                        Java
                    </v-card-title>
                </v-img>
                <v-card-actions>
                    <v-btn text color="primary">
                        Learn More
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>

        <v-flex xs6 md3>
            <v-card>
                <v-img
                        src="@/assets/javascript.svg"
                        class="white--text"
                        height="200px"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                >
                    <v-card-title class="fill-height align-end"
                    >
                        JavaScript
                    </v-card-title>
                </v-img>
                <v-card-actions>
                    <v-btn text color="primary">
                        Learn More
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>

        <v-flex xs6 md3>
            <v-card>
                <v-img
                        src="@/assets/python.svg"
                        class="white--text"
                        height="200px"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                >
                    <v-card-title class="fill-height align-end"
                    >
                        Python
                    </v-card-title>
                </v-img>
                <v-card-actions>
                    <v-btn text color="primary">
                        Learn More
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
  export default {
    name: "Gallery"
  }
</script>

<style scoped>

</style>