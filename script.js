function createCounter(value = 0) {
  const counters_container = document.querySelector(".counters_container");

  const counter = document.createElement("div");
  counter.className = "counter";
  counters_container.append(counter);

  const dec_btn = document.createElement("button");
  dec_btn.className = "btn";
  dec_btn.innerText = "-";
  counter.append(dec_btn);

  const inc_btn = document.createElement("button");
  inc_btn.className = "btn";
  inc_btn.innerText = "+";
  counter.append(inc_btn);

  const counter_value = document.createElement("div");
  counter_value.innerText = `counter: ${value}`;
  counter.append(counter_value);

  dec_btn.addEventListener("click", () => {
    counter_value.innerText = `counter: ${Math.max(-20, --value)}`;
  });

  inc_btn.addEventListener("click", () => {
    counter_value.innerText = `counter: ${Math.min(20, ++value)}`;
  });

  return {
    decrement: () => {
      return (counter_value.innerText = `counter: ${Math.max(-20, --value)}`);
    },

    increment: () => {
      return (counter_value.innerText = `counter: ${Math.min(20, ++value)}`);
    },

    getValue: () => {
      return value;
    },
  };
}

const counter_1 = createCounter(10);
const counter_2 = createCounter(-6);
const counter_3 = createCounter(15);

counter_2.decrement();
console.log(counter_1.getValue());
counter_3.increment();
console.log(counter_2.getValue());
