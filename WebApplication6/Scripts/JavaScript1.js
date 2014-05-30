var MyApp = {};
MyApp.items = [];
MyApp.toggleDone = function (index) {
    //This takes the existing boolean and reverses it
    //stores it in the original location
    MyApp.items[index].isDone = !MyApp.items[index].isDone;
    MyApp.writeItems();
};


MyApp.writeItems = function () {
   
    var stringHolder = "";
    for (var i in MyApp.items) {
   //loops over items adds them to string
        if (MyApp.items[i].isDone) {
            stringHolder += "<span class='done btn btn-success' onclick='MyApp.toggleDone("+ i +")'>";
        }
        else {
            stringHolder += "<span class='btn btn-danger'onclick='MyApp.toggleDone(" + i + ")'>";
        }
      
        stringHolder += MyApp.items[i]['taskName'];
        stringHolder += "</span>";
        stringHolder += "<br/>";
    }
    document.getElementById("list").innerHTML = stringHolder;

};


MyApp.addItem = function () {
    var newItem = document.getElementById("item-input");
    var holder = {
        taskName: newItem.value,
        isDone: false
    };

    MyApp.items.push(holder);
    newItem.value = "";
    MyApp.writeItems();

}


MyApp.clearDone = function () {

    var holderArray = [];
    for (var x in MyApp.items) {
        if (!MyApp.items[x].isDone) {
            holderArray.push(MyApp.items[x]);
        }
    }
    MyApp.items = holderArray;

    MyApp.writeItems();

};



 /*   for (var i = 0; i < MyApp.addItem.length - 1; i--) {
        if (MyApp.addItem.isDone) {
            MyApp.addItem.splice(i, 1);
        }
    }
}
*/