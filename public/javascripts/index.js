function clientRight(rNum) {
  var rOne = document.getElementById("id_client1");
  var rTwo = document.getElementById("id_client2");
  var rThree = document.getElementById("id_client3");

  if(rNum == 1) {
    rOne.className = "box has-text-centered client-hidden";
    rTwo.className = "box has-text-centered";
    rThree.className = "box has-text-centered client-hidden";
  } else if(rNum == 2) {
    rOne.className = "box has-text-centered client-hidden";
    rTwo.className = "box has-text-centered client-hidden";
    rThree.className = "box has-text-centered";
  } else {
    rOne.className = "box has-text-centered";
    rTwo.className = "box has-text-centered client-hidden";
    rThree.className = "box has-text-centered client-hidden";
  }
}
