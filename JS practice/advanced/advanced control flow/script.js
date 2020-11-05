// condition ? expr1 :expr2

function isUserVaild(bool) {
	return bool;
}

var answer = isUserVaild(true) ? "you may enter" : "access denied";

var automatedAnswer = "your account is " + (isUserVaild(false) ? "1234" : "not available");

function condition() {
	if(isUserVaild(true)) {
		return "you may enter";
	} else {
		return "access denied"
	}
}

var answer2 = condition();