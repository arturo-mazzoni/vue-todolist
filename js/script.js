var app = new Vue ({
  el: "#app",
  data: {
    list: [
      "Season one",
      "Season two",
      "Season three",
      "Season four",
      "Season five"
    ],
    listDeleted: [],
  },
  methods: {
    deleteItem(index){
      this.listDeleted.push(this.list[index]);
      // alert("You've watched: " + this.list[index]);
      this.list.splice(index,1);
      console.log(this.listDeleted);
    },
    restoreItem(index){
      this.list.push(this.listDeleted[index]);
      // alert("You're restoring: " + this.list[index]);
      this.listDeleted.splice(index,1);
    }
  }
});
