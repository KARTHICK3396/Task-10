function update(text) {
    document.getElementById("countDown").innerText = text;
  }
  
  function startCountdown() {
    update(10);
    setTimeout(() => {
      update(9);
      setTimeout(() => {
        update(8);
        setTimeout(() => {
          update(7);
          setTimeout(() => {
            update(6);
            setTimeout(() => {
                update(5);
                setTimeout(() => {
                    update(4);
                    setTimeout(() => {
                        update(3);
                        setTimeout(() => {
                            update(2);
                            setTimeout(() => {
                                update(1);
            setTimeout(() => {
              update("Happy Independence Day");
                               }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
 
}
  
startCountdown();
  