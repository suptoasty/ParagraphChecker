// data
let dataSucces = "This is a test! Here is another sentence. And another?"
let dataFailure = "This is a test. hEre is another sentence. And another."

const punctionRegex = /(?<=[.!?])/
const sentenceRegex = /^[A-Z].*[.!?]/

// methods
function splitParagraph(para) {
	return para.split(punctionRegex)
}

function isSentence(string) {
	return sentenceRegex.test(string)
}

// take string
function checkIsValidParagraph(s) {
	//split string into individual sentences by punctuation and trim trailing spaces
	sentences = splitParagraph(s).map((s) => s.trim())

	// at least three sentences
	if (sentences.length < 3) {
		console.log("Less Than 3 Sentences")
		return false
	}

	// are all sentences valid
	for (let sent of sentences) {
		if (!isSentence(sent)) {
			console.log(`Invalid sentence found: "${sent}"`)
			return false
		}
	}

	return true
}

// driver
;(function () {
	let isValid = checkIsValidParagraph(dataSucces)
	let isInvalid = checkIsValidParagraph(dataFailure)

	console.log(`Is valid para? ${isValid}`)
	console.log(`Is valid: ${isInvalid}`)
})()
