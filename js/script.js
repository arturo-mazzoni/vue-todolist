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
    newItem: ""
  },
  methods: {
    removeItem(index){
      this.listDeleted.push(this.list[index]);
      // alert("You've watched: " + this.list[index]);
      this.list.splice(index,1);
    },
    removeAll(){
      this.listDeleted.push(this.list);
      // this.list.splice(0);
    },
    deleteItem(index){
      this.listDeleted.splice(index,1);
    },
    restoreItem(index){
      this.list.push(this.listDeleted[index]);
      // alert("You're restoring: " + this.list[index]);
      this.listDeleted.splice(index,1);
    },
    deleteAll(){
      this.listDeleted.splice(0);
    },
    addItem(){
      if (this.newItem.length > 3){
        this.list.push(this.newItem);
        this.newItem = "";
      } else {
        alert("Type at least 4 characters");
      }
    }
  }
});
