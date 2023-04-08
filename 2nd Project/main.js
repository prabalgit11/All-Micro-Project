let counter = 0
function increment(){
	counter = counter + 1
	document.getElementById("counter").innerHTML = counter;
}
function decrement(){
	counter = counter - 1
	document.getElementById("counter").innerHTML = counter;
}
function incrementby5(){
	counter = counter + 5
	document.getElementById("counter").innerHTML = counter;
}
function decrementby10(){
	counter = counter - 10
	document.getElementById("counter").innerHTML = counter;
}
function takeinput(){
	number = Number(document.getElementById("sum").value)
}
function sum() {
	counter = counter + number
	document.getElementById("counter").innerHTML = counter;
}