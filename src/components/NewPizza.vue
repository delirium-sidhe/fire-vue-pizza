<template>
  <div>
    <form action>
      <h3>Add new pzza:</h3>
      <div class="form-group row">
        <label class="col-sm-3" for>Name</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" v-model="newPizza.name" />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3" for>Description</label>
        <div class="col-sm-9">
          <textarea
            type="text"
            class="form-control"
            rows="5"
            v-model="newPizza.description"
          ></textarea>
        </div>
      </div>
      <p>
        <strong>Option 1:</strong>
      </p>
      <div class="form-group row">
        <label class="col-sm-3" for>Size(")</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control"
            v-model="newPizza.options[0].size"
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3" for>Price(")</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control"
            v-model="newPizza.options[0].price"
          />
        </div>
      </div>
      <p>
        <strong>Option 2:</strong>
      </p>
      <div class="form-group row">
        <label class="col-sm-3" for>Size(")</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control"
            v-model="newPizza.options[1].size"
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3" for>Price(")</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control"
            v-model="newPizza.options[1].price"
          />
        </div>
      </div>
      <div class="form-group row">
        <button
          class="btn btn-success btn-block"
          type="button"
          @click="addMenuItem"
        >
          Add
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newPizza: {
        name: 'Eg. Margherita',
        description:
          'Eg. A delicious tomato based pizza topped with mozzarella',
        options: [
          {
            size: 9,
            price: 6.95
          },
          {
            size: 12,
            price: 10.95
          }
        ]
      }
    }
  },
  methods: {
    addMenuItem() {
      console.log(this.newPizza)
    }
  }
}
</script>

<style scoped></style>
