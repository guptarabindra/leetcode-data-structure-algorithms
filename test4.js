const sleep = (ms) => {
    return new Promise( (resolve, reject) => {
      setTimeout(function() {
        resolve("sleeping")
      }, ms);
    })
  };
  

  async function delay() {
    console.log(2)
     const dealy2Sec = await sleep(2000)
     console.log(`${dealy2Sec} dealy2Sec`)
     console.log(1)
     const dealy6Sec = await sleep(6000)
     console.log(`${dealy6Sec} dealy6Sec`)
  }

  delay()
 