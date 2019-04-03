var promiseCount = 0;
function testPromise() {
  var thisPromiseCount = ++promiseCount;

  var log = document.getElementById('log');
  log.insertAdjacentHTML('beforeend', `<br>` + thisPromiseCount + ') Запуск (запуск синхронного кода)');

  // Создаём обещание, возвращающее 'result' (по истечении 3-х секунд)
  var p1 = new Promise(
    // Функция разрешения позволяет завершить успешно или
    // отклонить обещание
    function(resolve, reject) {
      log.insertAdjacentHTML('beforeend', `<br>` + thisPromiseCount + ') Запуск обещания (запуск асинхронного кода)');
      // Это всего лишь пример асинхронности
      window.setTimeout(
        function() {
          // Обещание выполнено!
          resolve(thisPromiseCount)
        }, Math.random() * 2000 + 1000);
    });

  // Указываем, что сделать с выполненным обещанием
  p1.then(
    // Записываем в протокол
    function(val) {
      log.insertAdjacentHTML('beforeend', `<br>` + val + ') Обещание выполнено (асинхронный код завершён)');
    });

  log.insertAdjacentHTML('beforeend', `<br>` + thisPromiseCount + ') Обещание создано (синхронный код завершён)');
}

if ("Promise" in window) {
  let btn = document.getElementById("btn");
  btn.addEventListener("click",testPromise);
} else {
  log = document.getElementById('log');
  log.innerHTML = "Демонстрация невозможна, поскольку ваш браузер не поддерживает интерфейс <code>Promise<code>.";
}
