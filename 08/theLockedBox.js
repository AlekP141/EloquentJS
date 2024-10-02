const box = new class {
    locked = true;
    #content = [];
  
    unlock() { this.locked = false; }
    lock() { this.locked = true;  }
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this.#content;
    }
  };
  
  function withBoxUnlocked(func) {
    const initialState = box.locked
    box.unlock()
    try {
        func()
    } catch (error) {
        console.log(error)
    }
    initialState === true ? box.lock() : null
  }
  
  withBoxUnlocked(() => {
    box.content.push("gold piece");
  });
  
  try {
    withBoxUnlocked(() => {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised: " + e);
  }
  console.log(box.locked);
  // → true