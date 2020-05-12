function all(promises) {
	return new Promise((resolve, reject) => {
		let count = promises.length;
		let results = [];

        const onFullfilled = (result) => results.push(result)

        const checkLength = () => {
            if (--count === 0) resolve(results)
        }

		promises.forEach((promise) => {
			promise
        .then(onFullfilled, reject)
        .then(checkLength)
		});
	});
}

function checkAnswer(promises) {
  all(promises).then(
    function(xs) { console.log(xs) },
    function(err) { console.log(err) }
  )
}

function delay(ms, value) {
  return new Promise(function(pass) {
    setTimeout(pass, ms, value)
  })
}

checkAnswer([
  delay(100, 'a'),
  delay(200, 'b'),
  delay(50, 'c'),
  delay(1000, 'd')
])

checkAnswer([
  delay(100, 'a'),
  delay(200, 'b'),
  Promise.reject('REJECTED'),
  delay(1000, 'd')
])