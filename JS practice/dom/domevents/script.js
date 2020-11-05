var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var deletebutton = document.querySelectorAll(".delete");

// 입력값 길이
function inputLength() {
	return input.value.length;
}

// li 붙이기
function createListElement() {
	var li = document.createElement("li");
	//element생성 

	li.appendChild(document.createTextNode(input.value + " "));
	//돔 구조상 하위 노드에 잇는 text를 넣어주는 작업

	var delbutton = document.createElement("button");

	delbutton.classList.add("delete")

	delbutton.appendChild(document.createTextNode("Delete"));

	li.appendChild(delbutton)

	ul.appendChild(li);
	//생성한 element를 붙이는 작업

	input.value = "";
}

// 입력한 데이터 길이가 0보다 큰지
function addListAfterClick() {
	//alert("thanks");
	//콜백함수 실험
	if (inputLength() > 0) {
		createListElement();
	}
}

// 엔터키
function addListAfterKeypress(event) {
	//console.log(event); 모든 이벤트 출력 42번째줄 때문에 keypress이벤트만 나옴
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addDoneClass(event){
	event.target.classList.toggle('Done')
}

function deleteList(event){
	event.target.parentNode.parentNode.removeChild(event.target.parentNode)
}

button.addEventListener("click", addListAfterClick);
//2번째 파라미터는 함수, ()를 뒤에 붙이면 안된다, 붙이면 로드하는 중 1번만 자동 실행된 후 더 이상 작업하지 않는다
//이런 형식을 콜백함수라고 한다

input.addEventListener("keypress", addListAfterKeypress);

for (var i = 0; i < li.length; i++) {
	li[i].addEventListener("click", addDoneClass);

}

for (var i = 0; i < deletebutton.length; i++) {
	deletebutton[i].addEventListener("click", deleteList);

}